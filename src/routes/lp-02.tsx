import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import traderPhoto from "@/assets/trader-delucca.png";

export const Route = createFileRoute("/lp-02")({
  component: LP02VSL,
  head: () => ({
    meta: [
      { title: "Como eu acerto 99% das operações ao vivo · Alpha Academy" },
      {
        name: "description",
        content:
          "Vídeo de 4 minutos. O método que eu uso todos os dias. Sem gale, sem proteção, sem robô.",
      },
      { property: "og:title", content: "Como eu acerto 99% das operações ao vivo · Alpha Academy" },
      {
        property: "og:description",
        content: "4 minutos pra entender o método. Depois você decide.",
      },
    ],
  }),
});

const NOME_TRADER = "De Lucca";
const LINK_TELEGRAM = "{{LINK_TELEGRAM}}";
const REVEAL_SECONDS = 90;

const BG = "#0d0d10";
const BG2 = "#14141a";
const TEXT = "#f0f0ee";
const MUTED = "#9a9a94";
const GREEN = "#00ff88";
const RED = "#ff2d55";
const LINE = "rgba(255,255,255,0.08)";

const display = { fontFamily: "'Anton', Impact, sans-serif", letterSpacing: "0.01em" };
const body = { fontFamily: "'Work Sans', system-ui, sans-serif" };

function GrainBg() {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;
  const url = `url("data:image/svg+xml;utf8,${svg.replace(/#/g, "%23")}")`;
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ backgroundImage: url, opacity: 0.035, mixBlendMode: "overlay", zIndex: 1 }}
    />
  );
}

function AlertBar() {
  return (
    <div
      className="w-full text-center relative overflow-hidden"
      style={{
        background: RED,
        color: "#fff",
        padding: "10px 16px",
        ...body,
        fontWeight: 700,
        fontSize: "12px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.35) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.35) 100%), linear-gradient(${RED},${RED})`,
      }}
    >
      <span
        className="inline-block mr-2 align-middle"
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "#fff",
          animation: "lp02-blink 1s steps(2,start) infinite",
        }}
      />
      Esta apresentação pode sair do ar sem aviso
      <style>{`
        @keyframes lp02-blink{50%{opacity:0}}
        @keyframes lp02-ring{0%{box-shadow:0 0 0 0 rgba(0,255,136,.55)}80%{box-shadow:0 0 0 40px rgba(0,255,136,0)}100%{box-shadow:0 0 0 0 rgba(0,255,136,0)}}
        @keyframes lp02-reveal{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </div>
  );
}

function Heading() {
  return (
    <section className="text-center px-6" style={{ paddingTop: 36, paddingBottom: 24 }}>
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          border: `1px solid ${GREEN}`,
          color: GREEN,
          ...body,
          fontSize: 11,
          letterSpacing: "0.16em",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        Vídeo abaixo · 4 minutos
      </span>
      <h1
        className="mx-auto mt-5 text-[36px] sm:text-[46px] md:text-[58px] leading-[0.92]"
        style={{ ...display, color: TEXT, textTransform: "uppercase", maxWidth: 720 }}
      >
        Como eu acerto <span style={{ color: GREEN, fontStyle: "italic" }}>99%</span>
        <br />
        das operações ao vivo.
      </h1>
      <p
        className="mx-auto mt-5"
        style={{ ...body, color: MUTED, fontSize: 16, lineHeight: 1.5, maxWidth: 560 }}
      >
        Sem gale. Sem proteção. Sem robô. O método que eu uso todos os dias, explicado em 4 minutos.
      </p>
    </section>
  );
}

function Player({ onPlay, started }: { onPlay: () => void; started: boolean }) {
  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        width: "min(100% - 32px, 540px)",
        aspectRatio: "4/5",
        border: `1px solid ${LINE}`,
        borderRadius: 8,
        boxShadow: `0 30px 80px rgba(0,0,0,0.5), inset 0 0 0 1px ${LINE}`,
        background: "#000",
      }}
    >
      {!started ? (
        <button
          type="button"
          onClick={onPlay}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
          style={{ cursor: "pointer", background: "#000" }}
        >
          <img
            src={traderPhoto}
            alt={`${NOME_TRADER} · poster`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.75, objectPosition: "center top" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)",
            }}
          />
          <div className="relative flex flex-col items-center" style={{ zIndex: 2 }}>
            <div
              className="flex items-center justify-center"
              style={{
                width: 88,
                height: 88,
                borderRadius: 999,
                background: GREEN,
                animation: "lp02-ring 1.8s ease-out infinite",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#000" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p
              className="mt-6"
              style={{ ...body, color: TEXT, fontWeight: 700, fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Clique para assistir
            </p>
            <p className="mt-2" style={{ ...body, color: MUTED, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Aumente o volume · 4:00
            </p>
          </div>
        </button>
      ) : (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{ background: "#000" }}>
          {/* INTEGRAR PLAYER AQUI: Vturb / VSLPlayer / Vimeo / YouTube */}
          <p style={{ ...body, color: MUTED, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Player carregado · Substituir por embed real
          </p>
        </div>
      )}
    </div>
  );
}

function CtaZone({ started, secondsLeft }: { started: boolean; secondsLeft: number }) {
  const revealed = started && secondsLeft <= 0;
  return (
    <div
      className="mx-auto px-6 text-center flex flex-col items-center justify-center"
      style={{ maxWidth: 720, minHeight: 280, paddingTop: 40, paddingBottom: 40 }}
    >
      {!revealed ? (
        <div>
          <p style={{ ...body, color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
            O botão pra entrar no grupo aparece durante o vídeo.
          </p>
          <p
            className="mt-4"
            style={{ ...display, color: GREEN, fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            {started ? `Liberação em ${secondsLeft}s` : "Aguarde"}
          </p>
        </div>
      ) : (
        <div style={{ animation: "lp02-reveal .5s ease-out both" }}>
          <h2 style={{ ...display, color: TEXT, fontSize: 44, textTransform: "uppercase", lineHeight: 1 }}>
            Liberou. Entra agora.
          </h2>
          <p className="mt-4" style={{ ...body, color: MUTED, fontSize: 16, lineHeight: 1.55 }}>
            A próxima live começa em instantes. Entre no grupo gratuito e receba o aviso quando a sala abrir.
          </p>
          <a
            href={LINK_TELEGRAM}
            className="inline-flex items-center gap-2 mt-8 group"
            style={{
              ...body,
              background: GREEN,
              color: "#000",
              fontWeight: 800,
              textTransform: "uppercase",
              padding: "22px 32px",
              fontSize: 15,
              letterSpacing: "0.06em",
              borderRadius: 4,
              transition: "transform .2s ease, box-shadow .2s ease",
              boxShadow: "0 10px 30px rgba(0,255,136,0.25)",
            }}
          >
            Entrar no Grupo Gratuito
            <span
              style={{ display: "inline-block", transition: "transform .2s ease" }}
              className="group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      )}
    </div>
  );
}

function Stats() {
  const items = [
    { n: "99%", l: "Acerto nas Lives" },
    { n: "12k+", l: "Operadores Ativos" },
    { n: "6 anos", l: "De Mercado" },
    { n: "0", l: "Gale / Proteção" },
  ];
  return (
    <section style={{ background: BG2, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
      <div className="mx-auto max-w-[1100px] px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((s, i) => (
          <div key={i}>
            <p style={{ ...display, color: GREEN, fontSize: 56, lineHeight: 1, textTransform: "uppercase" }}>{s.n}</p>
            <p
              className="mt-2"
              style={{ ...body, color: MUTED, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}
            >
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Warning() {
  return (
    <section style={{ background: BG }}>
      <div
        className="mx-auto my-16 p-7 sm:p-9"
        style={{
          maxWidth: 680,
          background: BG2,
          borderLeft: `4px solid ${RED}`,
          border: `1px solid ${LINE}`,
          borderLeftWidth: 4,
          borderLeftColor: RED,
        }}
      >
        <p
          style={{
            ...body,
            color: RED,
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          ⚠ Atenção
        </p>
        <p className="mt-3" style={{ ...body, color: TEXT, fontSize: 16, lineHeight: 1.6 }}>
          Este vídeo não é uma aula técnica. É uma explicação do método. Para aplicar, você precisa entrar no grupo e acompanhar as lives diárias. Assista até o final antes de sair.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#000", color: MUTED, ...body }}>
      <div className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <p className="max-w-[720px] mx-auto" style={{ fontSize: 11, letterSpacing: "0.1em", lineHeight: 1.6 }}>
          AVISO DE RISCO · Operações no mercado financeiro envolvem risco de perda total ou parcial do capital investido. Resultados passados não garantem resultados futuros. O conteúdo é educacional e não constitui recomendação de investimento.
        </p>
        <p className="mt-4" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          © 2026 Alpha Academy · {NOME_TRADER} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

function LP02VSL() {
  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REVEAL_SECONDS);

  useEffect(() => {
    if (!started) return;
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [started, secondsLeft]);

  return (
    <main
      className="min-h-screen relative"
      style={{ background: BG, color: TEXT, ...body, scrollBehavior: "smooth" }}
    >
      <GrainBg />
      <div className="relative" style={{ zIndex: 2 }}>
        <AlertBar />
        <Heading />
        <div className="px-6">
          <Player onPlay={() => setStarted(true)} started={started} />
        </div>
        <CtaZone started={started} secondsLeft={secondsLeft} />
        <Stats />
        <Warning />
        <Footer />
      </div>
    </main>
  );
}
