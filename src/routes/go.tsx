import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";

const redirectSearchSchema = z.object({
  u: z.string().optional(), // Final destination URL
  p: z.string().optional(), // Meta Pixel ID
  e: z.string().optional().default("PageView"), // Event name
  d: z.number().optional().default(800), // Delay in ms
});

export const Route = createFileRoute("/go")({
  validateSearch: (search) => redirectSearchSchema.parse(search),
  component: RedirectPage,
});

function RedirectPage() {
  const { u, p, e, d } = Route.useSearch();
  const [status, setStatus] = useState("Iniciando redirecionamento...");

  useEffect(() => {
    if (!u) {
      setStatus("Erro: URL de destino não fornecida.");
      return;
    }

    // 1. Load Meta Pixel if ID is provided
    if (p) {
      console.log(`[Redirect] Initializing Pixel ${p} with event ${e}`);
      
      // Standard Meta Pixel Code
      /* @ts-ignore */
      !(function (f, b, e, v, n, t, s) {
        /* @ts-ignore */
        if (f.fbq) return;
        /* @ts-ignore */
        n = f.fbq = function () {
          /* @ts-ignore */
          n.callMethod
            ? /* @ts-ignore */
              n.callMethod.apply(n, arguments)
            : /* @ts-ignore */
              n.queue.push(arguments);
        };
        /* @ts-ignore */
        if (!f._fbq) f._fbq = n;
        /* @ts-ignore */
        n.push = n;
        /* @ts-ignore */
        n.loaded = !0;
        /* @ts-ignore */
        n.version = "2.0";
        /* @ts-ignore */
        n.queue = [];
        /* @ts-ignore */
        t = b.createElement(e);
        /* @ts-ignore */
        t.async = !0;
        /* @ts-ignore */
        t.src = v;
        /* @ts-ignore */
        s = b.getElementsByTagName(e)[0];
        /* @ts-ignore */
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      /* @ts-ignore */
      window.fbq("init", p);
      /* @ts-ignore */
      window.fbq("track", e);
      
      setStatus(`Contabilizando ${e}...`);
    }

    // 2. Redirect after delay
    const timer = setTimeout(() => {
      setStatus("Redirecionando agora...");
      window.location.href = u;
    }, d);

    return () => clearTimeout(timer);
  }, [u, p, e, d]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-6 font-sans">
      <div className="w-12 h-12 border-4 border-zinc-800 border-t-accent rounded-full animate-spin mb-6"></div>
      <h1 className="text-xl font-medium tracking-tight mb-2">Alpha Academy</h1>
      <p className="text-zinc-400 text-sm animate-pulse">{status}</p>
      
      <div className="mt-12 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        Você será redirecionado em instantes
      </div>

      {/* Standard CSS color variables used via tailwind classes */}
      <style>{`
        :root {
          --accent: #9c2310;
        }
      `}</style>
    </div>
  );
}