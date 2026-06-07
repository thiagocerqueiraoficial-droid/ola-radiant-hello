import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import JSZip from "jszip";

export const Route = createFileRoute("/go")({
  component: DownloadCenter,
});

const PAGES = [
  { path: "/", label: "Home (Carta Alpha Academy)", filename: "home.html" },
  { path: "/carta-vip", label: "Carta VIP", filename: "carta-vip.html" },
  { path: "/cartaw", label: "Carta Castelli (Acordo)", filename: "carta-castelli.html" },
  { path: "/lp-01", label: "LP 01", filename: "lp-01.html" },
  { path: "/lp-02", label: "LP 02", filename: "lp-02.html" },
  { path: "/lp-03", label: "LP 03", filename: "lp-03.html" },
  { path: "/lp-04", label: "LP 04", filename: "lp-04.html" },
  { path: "/lp-04-vip", label: "LP 04 VIP", filename: "lp-04-vip.html" },
  { path: "/lp-w", label: "LP Notícia Castelli", filename: "lp-noticia-castelli.html" },
];

function DownloadCenter() {
  const [loading, setLoading] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const downloadPage = async (path: string, filename: string) => {
    setLoading(path);
    setStatus("");
    try {
      const url = `${window.location.origin}${path}`;
      const res = await fetch(url);
      let html = await res.text();

      // Pega os links de CSS e fontes do próprio HTML original (via DOM parser para ser robusto)
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      // Remove scripts do React/Vite para evitar hidratação quebrada no HTML estático
      const scripts = doc.querySelectorAll('script');
      scripts.forEach(s => s.remove());

      // Converte URLs relativas (src, href) em absolutas
      const base = window.location.origin;
      const elements = doc.querySelectorAll('[href], [src]');
      elements.forEach(el => {
        const attr = el.hasAttribute('href') ? 'href' : 'src';
        const val = el.getAttribute(attr);
        if (val && val.startsWith('/') && !val.startsWith('//')) {
          el.setAttribute(attr, base + val);
        }
      });

      // Garante que o CSS principal e fontes do Google estejam presentes (fallback caso não detectados)
      const head = doc.head;
      
      // Se não houver estilos, vamos tentar injetar os que sabemos que o app usa
      if (!doc.querySelector('link[rel="stylesheet"]')) {
         const links = [
           { rel: "preconnect", href: "https://fonts.googleapis.com" },
           { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
           { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,800;1,9..144,400;1,9..144,600;1,9..144,800&family=JetBrains+Mono:wght@400;700&family=Bebas+Neue&family=Archivo:wght@400;500;600;700;800;900&family=Anton&family=Work+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400;1,600&display=swap" }
         ];
         links.forEach(l => {
           const linkEl = doc.createElement('link');
           Object.entries(l).forEach(([k, v]) => linkEl.setAttribute(k, v));
           head.appendChild(linkEl);
         });
      }

      const finalHtml = "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;

      const blob = new Blob([finalHtml], { type: "text/html;charset=utf-8" });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
      setStatus(`✓ ${filename} baixado!`);
    } catch (e) {
      setStatus(`Erro ao baixar ${filename}: ${(e as Error).message}`);
    } finally {
      setLoading(null);
    }
  };

  const downloadAllZip = async () => {
    setLoading("zip");
    setStatus("Preparando pacote .zip...");
    const zip = new JSZip();

    try {
      for (const p of PAGES) {
        setStatus(`Processando: ${p.label}...`);
        const url = `${window.location.origin}${p.path}`;
        const res = await fetch(url);
        let html = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        
        doc.querySelectorAll('script').forEach(s => s.remove());
        
        const base = window.location.origin;
        doc.querySelectorAll('[href], [src]').forEach(el => {
          const attr = el.hasAttribute('href') ? 'href' : 'src';
          const val = el.getAttribute(attr);
          if (val && val.startsWith('/') && !val.startsWith('//')) {
            el.setAttribute(attr, base + val);
          }
        });

        const finalHtml = "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
        zip.file(p.filename, finalHtml);
      }

      setStatus("Gerando arquivo .zip...");
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = "landing-pages-projeto.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setStatus("✓ Arquivo .zip baixado com sucesso!");
    } catch (e) {
      setStatus(`Erro ao criar ZIP: ${(e as Error).message}`);
    } finally {
      setLoading(null);
    }
  };

  const downloadAll = async () => {
    for (const p of PAGES) {
      await downloadPage(p.path, p.filename);
      await new Promise((r) => setTimeout(r, 400));
    }
    setStatus("✓ Todas as páginas foram baixadas!");
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6 sm:p-10" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">📥 Centro de Downloads</h1>
        <p className="text-zinc-400 mb-8 text-sm">Baixe o HTML completo de qualquer landing page do projeto.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button
            onClick={downloadAllZip}
            disabled={loading !== null}
            className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {loading === "zip" ? "📦 Compactando..." : "🎁 Baixar TUDO em .ZIP"}
          </button>

            <button
              onClick={() => {
                setLoading("all");
                downloadAll();
              }}
              disabled={loading !== null}
              className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-700 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading === "all" ? "⬇ Baixando..." : "⬇ Baixar 1 por 1"}
            </button>
        </div>

        {status && (
          <div className="mb-6 p-3 bg-zinc-900 border border-zinc-700 rounded text-sm text-emerald-400">
            {status}
          </div>
        )}

        <div className="space-y-2">
          {PAGES.map((p) => (
            <div
              key={p.path}
              className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="font-semibold">{p.label}</div>
                <div className="text-xs text-zinc-500 font-mono">{p.path}</div>
              </div>
              <div className="flex gap-2">
                <a
                  href={p.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded transition-colors"
                >
                  Ver
                </a>
                <button
                  onClick={() => downloadPage(p.path, p.filename)}
                  disabled={loading === p.path}
                  className="px-4 py-2 text-xs bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 font-semibold rounded transition-colors"
                >
                  {loading === p.path ? "..." : "⬇ Baixar"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-zinc-600">
          Dica: o HTML baixado já vem com todos os links e imagens convertidos para URLs absolutas, então pode ser aberto/hospedado em qualquer lugar.
        </p>
      </div>
    </div>
  );
}
