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

  const fetchAndProcessHtml = async (path: string) => {
    const url = `${window.location.origin}${path}`;
    const res = await fetch(url);
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    // Remove scripts do React/Vite para evitar hidratação quebrada no HTML estático
    doc.querySelectorAll('script').forEach(s => s.remove());

    // Converte URLs relativas (src, href) em absolutas
    const base = window.location.origin;
    doc.querySelectorAll('[href], [src]').forEach(el => {
      const attr = el.hasAttribute('href') ? 'href' : 'src';
      const val = el.getAttribute(attr);
      if (val && val.startsWith('/') && !val.startsWith('//')) {
        el.setAttribute(attr, base + val);
      }
    });

    // Garante que o CSS principal e fontes do Google estejam presentes
    const head = doc.head;
    
    // Injeta os estilos que sabemos que o app usa para garantir que nada falte
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

    return "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
  };

  const downloadPageZip = async (path: string, filename: string, label: string) => {
    setLoading(path);
    setStatus("");
    try {
      setStatus(`Processando ${label}...`);
      const finalHtml = await fetchAndProcessHtml(path);
      
      const zip = new JSZip();
      zip.file("index.html", finalHtml);
      
      const zipName = filename.replace(".html", "") + ".zip";
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = zipName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setStatus(`✓ ${zipName} baixado!`);
    } catch (e) {
      setStatus(`Erro ao baixar ${label}: ${(e as Error).message}`);
    } finally {
      setLoading(null);
    }
  };

  const downloadAllZip = async () => {
    setLoading("zip");
    setStatus("Preparando pacote .zip completo...");
    const zip = new JSZip();

    try {
      for (const p of PAGES) {
        setStatus(`Processando: ${p.label}...`);
        const finalHtml = await fetchAndProcessHtml(p.path);
        zip.file(p.filename, finalHtml);
      }

      setStatus("Gerando arquivo .zip...");
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = "landing-pages-projeto-completo.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setStatus("✓ Arquivo .zip completo baixado!");
    } catch (e) {
      setStatus(`Erro ao criar ZIP: ${(e as Error).message}`);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6 sm:p-10" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-emerald-500">📥 Centro de Downloads</h1>
        <p className="text-zinc-400 mb-8 text-sm">Baixe as landing pages empacotadas em .ZIP para garantir que funcionem perfeitamente.</p>

        <div className="mb-8">
          <button
            onClick={downloadAllZip}
            disabled={loading !== null}
            className="w-full px-6 py-5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 font-bold rounded-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 shadow-lg"
          >
            {loading === "zip" ? "📦 Compactando tudo..." : "🎁 BAIXAR TODAS AS PÁGINAS EM UM ÚNICO .ZIP"}
          </button>
        </div>

        {status && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-sm text-emerald-400 font-medium animate-pulse">
            {status}
          </div>
        )}

        <div className="space-y-3">
          {PAGES.map((p) => (
            <div
              key={p.path}
              className="flex items-center justify-between p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-emerald-500/50 transition-all group"
            >
              <div>
                <div className="font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">{p.label}</div>
                <div className="text-xs text-zinc-500 font-mono mt-1">{p.path}</div>
              </div>
              <div className="flex gap-3">
                <a
                  href={p.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors font-semibold"
                >
                  Ver
                </a>
                <button
                  onClick={() => downloadPageZip(p.path, p.filename, p.label)}
                  disabled={loading !== null}
                  className="px-5 py-2.5 text-xs bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-800 text-white font-bold rounded-lg transition-all shadow-md"
                >
                  {loading === p.path ? "Processando..." : "⬇ Baixar .ZIP"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
          <h3 className="text-sm font-bold text-zinc-300 mb-2 flex items-center gap-2">
            <span>💡</span> Por que baixar em .ZIP?
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Ao baixar em .ZIP, o arquivo <code className="text-emerald-500">index.html</code> dentro dele vem limpo, sem códigos do React que podem "quebrar" a visualização offline. Todas as imagens e fontes são vinculadas corretamente para que a página abra exatamente como você vê aqui.
          </p>
        </div>
      </div>
    </div>
  );
}
