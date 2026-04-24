import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import traderPhoto from "@/assets/trader-delucca.png";
import traderPhoto2 from "@/assets/trader-delucca-2.png";

export const Route = createFileRoute("/lp-01")({
  component: LP01,
  head: () => ({
    meta: [
      { title: "Opere ao vivo todos os dias · Alpha Academy" },
      {
        name: "description",
        content:
          "Grupo gratuito no Telegram. Operações ao vivo, sem gale, sem robô. Entre e veja funcionar antes de decidir.",
      },
      { property: "og:title", content: "Opere ao vivo todos os dias · Alpha Academy" },
      {
        property: "og:description",
        content:
          "Sem gale. Sem proteção. Sem robô. Só eu, o gráfico e você assistindo entrada por entrada.",
      },
    ],
  }),
});

const NOME_TRADER = "De Lucca";
const LINK_TELEGRAM = "{{LINK_TELEGRAM}}";

const BG = "#0a0a0a";
const BG2 = "#111";
const BG3 = "#060606";
const TEXT = "#f5f5f0";
const MUTED = "#8a8a85";
const YELLOW = "#ffd400";
const ORANGE = "#ff4d00";
const LINE = "rgba(255,255,255,0.08)";

const display = { fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.01em" };
const body = { fontFamily: "'Archivo', system-ui, sans-serif" };

function Topbar() {
  return (
    <div
      className="w-full text-center"
      style={{ background: YELLOW, color: "#000", padding: "10px 16px", ...body, fontWeight: 700, fontSize: "13px", letterSpacing: "0.06em" }}
    >
      <span
        className="inline-block mr-2"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "999px",
          background: "#000",
          animation: "lp01-pulse 1.4s ease-in-out infinite",
          verticalAlign: "middle",
        }}
      />
      AO VIVO AGORA · PRÓXIMA OPERAÇÃO EM ALGUNS MINUTOS
      <style>{`@keyframes lp01-pulse{0%,100%{opacity:1}50%{opacity:.55}}@keyframes lp01-btn-press{from{transform:translateY(0)}to{transform:translateY(4px)}}`}</style>
    </div>
  );
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={LINK_TELEGRAM}
      className="inline-block"
      style={{
        ...body,
        background: YELLOW,
        color: "#000",
        fontWeight: 900,
        textTransform: "uppercase",
        padding: "20px 32px",
        fontSize: "16px",
        letterSpacing: "0.04em",
        boxShadow: "8px 8px 0 #000",
        border: "2px solid #000",
        transition: "transform .08s ease, box-shadow .08s ease",
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "translate(4px,4px)";
        e.currentTarget.style.boxShadow = "4px 4px 0 #000";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = "8px 8px 0 #000";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = "8px 8px 0 #000";
      }}
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: BG,
        backgroundImage: `radial-gradient(circle at 0% 0%, rgba(255,212,0,0.10), transparent 50%), radial-gradient(circle at 100% 100%, rgba(255,77,0,0.08), transparent 45%)`,
      }}
    >
      {/* Vertical edition marker */}
      <div className="mx-auto max-w-[1320px] px-6 pt-10 md:pt-14 flex items-center justify-between">
        <span style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.22em", fontWeight: 600 }}>
          ED. 001 — AO VIVO / TELEGRAM
        </span>
        <span style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.22em", fontWeight: 600 }}>
          SÃO PAULO · BRASIL
        </span>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 pt-8 pb-20 md:pt-12 md:pb-32 grid grid-cols-12 gap-x-6 gap-y-10 items-end">
        {/* Big number marker */}
        <div className="col-span-12 md:col-span-1 order-1">
          <p style={{ ...display, color: YELLOW, fontSize: "120px", lineHeight: 0.8, opacity: 0.9 }}>01</p>
        </div>

        {/* Headline block — overflows visually into image column */}
        <div className="col-span-12 md:col-span-7 order-2 md:-mr-16 relative z-10">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ border: `1px solid ${YELLOW}`, color: YELLOW, ...body, fontSize: "11px", letterSpacing: "0.14em", fontWeight: 700 }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 999, background: YELLOW, animation: "lp01-pulse 1.4s ease-in-out infinite" }} />
            GRUPO GRATUITO · TELEGRAM
          </span>

          <h1
            className="mt-6 text-[64px] sm:text-[88px] md:text-[124px] leading-[0.86]"
            style={{ ...display, color: TEXT, textTransform: "uppercase" }}
          >
            OPERE
            <br />
            <span className="relative inline-block" style={{ color: YELLOW, fontStyle: "italic" }}>
              <span
                aria-hidden
                className="absolute inset-0"
                style={{ background: ORANGE, opacity: 0.35, transform: "skewX(-8deg)", zIndex: 0 }}
              />
              <span className="relative" style={{ zIndex: 1 }}>AO VIVO</span>
            </span>{" "}
            <span style={{ color: TEXT }}>COMIGO</span>
            <br />
            <span style={{ color: MUTED, fontSize: "0.55em", letterSpacing: "-0.01em" }}>todos os dias.</span>
          </h1>
        </div>

        {/* Image column — taller, no caption overlay */}
        <div className="col-span-12 md:col-span-4 order-3 relative w-full" style={{ aspectRatio: "3/4" }}>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1c1c1c, #0a0a0a)",
              border: `1px solid ${LINE}`,
            }}
          >
            <img
              src={traderPhoto}
              alt={`${NOME_TRADER} · Trader`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>
          {/* floating tag bottom-left of image */}
          <div
            className="absolute -bottom-4 -left-4 px-4 py-3"
            style={{ background: YELLOW, border: "2px solid #000", boxShadow: "6px 6px 0 #000" }}
          >
            <p style={{ ...display, fontSize: "22px", color: "#000", lineHeight: 1 }}>{NOME_TRADER}</p>
            <p style={{ ...body, color: "#000", fontSize: "10px", letterSpacing: "0.14em", fontWeight: 700, marginTop: 2 }}>
              TRADER · 6 ANOS
            </p>
          </div>
        </div>

        {/* Bottom row: rule + paragraph + CTA, asymmetric */}
        <div className="col-span-12 order-4 mt-6 md:mt-12 grid grid-cols-12 gap-6 items-end" style={{ borderTop: `1px solid ${LINE}`, paddingTop: 28 }}>
          <div className="col-span-12 md:col-span-1">
            <p style={{ ...body, color: YELLOW, fontSize: "11px", letterSpacing: "0.22em", fontWeight: 700 }}>§ 01</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p style={{ ...body, color: TEXT, fontSize: "18px", lineHeight: 1.5, fontWeight: 500 }}>
              Sem gale. Sem proteção. Sem robô.
            </p>
            <p className="mt-2" style={{ ...body, color: MUTED, fontSize: "15px", lineHeight: 1.55 }}>
              Só eu, o gráfico e você assistindo entrada por entrada em tempo real.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <CtaButton>Entrar no Grupo Gratuito →</CtaButton>
            <p className="mt-3" style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.08em" }}>
              Acesso imediato · Vagas limitadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { n: "99%", l: "Acerto nas Lives", big: true },
    { n: "0", l: "Gale ou Proteção" },
    { n: "5x", l: "Lives na Semana" },
    { n: "12k+", l: "Alunos Ativos" },
  ];
  return (
    <section style={{ background: BG3, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-12">
          <p style={{ ...body, color: YELLOW, fontSize: "11px", letterSpacing: "0.22em", fontWeight: 700 }}>
            § 02 — NÚMEROS
          </p>
          <span style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.18em" }}>ATUALIZADO HOJE</span>
        </div>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-end">
          {items.map((s, i) => {
            const span = s.big ? "col-span-12 md:col-span-6" : "col-span-6 md:col-span-2";
            return (
              <div
                key={i}
                className={span}
                style={i > 0 ? { borderLeft: `1px solid ${LINE}`, paddingLeft: 20 } : {}}
              >
                <p
                  className={s.big ? "text-[110px] md:text-[180px]" : "text-[56px] md:text-[80px]"}
                  style={{
                    ...display,
                    color: s.big ? YELLOW : TEXT,
                    lineHeight: 0.85,
                    fontStyle: s.big ? "italic" : "normal",
                  }}
                >
                  {s.n}
                </p>
                <p
                  className="mt-3"
                  style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}
                >
                  {s.l}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      n: "I",
      t: "Lives diárias ao vivo",
      d: "Entro na sala, abro o gráfico e opero na sua frente. Você acompanha leitura, entrada e saída em tempo real.",
      span: "col-span-12 md:col-span-7",
      tall: true,
    },
    {
      n: "II",
      t: "Curso completo",
      d: "Do zero ao avançado. Leitura de gráfico, gestão de risco, psicologia e método autoral.",
      span: "col-span-12 md:col-span-5",
    },
    {
      n: "III",
      t: "Sala priorizada",
      d: "Quem entra pelo grupo gratuito recebe avisos antes das operações começarem.",
      span: "col-span-12 md:col-span-5",
    },
    {
      n: "IV",
      t: "Comunidade ativa",
      d: "Mais de 16 mil operadores trocando leitura, estratégia e call do dia. Ninguém opera sozinho aqui.",
      span: "col-span-12 md:col-span-7",
      tall: true,
    },
  ];
  return (
    <section style={{ background: BG }}>
      <div className="mx-auto max-w-[1320px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 items-end mb-16">
          <div className="col-span-12 md:col-span-3">
            <p style={{ ...body, color: YELLOW, fontSize: "11px", letterSpacing: "0.22em", fontWeight: 700 }}>
              § 03 — O QUE VOCÊ RECEBE
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-[44px] sm:text-[72px] md:text-[104px]"
              style={{ ...display, color: TEXT, textTransform: "uppercase", lineHeight: 0.88 }}
            >
              Tudo que você <span style={{ color: YELLOW, fontStyle: "italic" }}>precisa</span> pra operar hoje.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {items.map((it, i) => (
            <div
              key={i}
              className={`${it.span} p-7 md:p-10 transition-colors duration-200`}
              style={{
                background: BG2,
                border: `1px solid ${LINE}`,
                borderTop: `2px solid ${YELLOW}`,
                minHeight: it.tall ? 280 : 220,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = ORANGE)}
              onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = YELLOW)}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span style={{ ...display, color: YELLOW, fontSize: "32px", lineHeight: 1, fontStyle: "italic" }}>{it.n}</span>
                <span style={{ ...body, color: MUTED, fontSize: "10px", letterSpacing: "0.2em", fontWeight: 700 }}>
                  / 04
                </span>
              </div>
              <h3 style={{ ...display, color: TEXT, fontSize: it.tall ? "44px" : "32px", textTransform: "uppercase", lineHeight: 0.95 }}>
                {it.t}
              </h3>
              <p className="mt-4" style={{ ...body, color: MUTED, fontSize: "15px", lineHeight: 1.6, maxWidth: 480 }}>
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section style={{ background: BG3, borderTop: `1px solid ${LINE}` }}>
      <div className="mx-auto max-w-[1320px] px-6 py-24 md:py-32 grid grid-cols-12 gap-x-6 gap-y-12">
        {/* Left column: section marker + huge name */}
        <div className="col-span-12 md:col-span-7 md:pt-8">
          <p style={{ ...body, color: YELLOW, fontSize: "11px", letterSpacing: "0.22em", fontWeight: 700 }}>
            § 04 — QUEM OPERA COM VOCÊ
          </p>
          <h2
            className="mt-6 text-[72px] sm:text-[120px] md:text-[180px]"
            style={{ ...display, color: TEXT, textTransform: "uppercase", lineHeight: 0.82, fontStyle: "italic" }}
          >
            {NOME_TRADER}
          </h2>
          <div
            className="mt-8 grid grid-cols-12 gap-x-6"
            style={{ borderTop: `1px solid ${LINE}`, paddingTop: 24 }}
          >
            <div className="col-span-12 md:col-span-1">
              <p style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.2em", fontWeight: 700 }}>BIO</p>
            </div>
            <div className="col-span-12 md:col-span-11 max-w-[560px]">
              <p style={{ ...body, color: TEXT, fontSize: "18px", lineHeight: 1.55, fontWeight: 500 }}>
                Sou trader há mais de 6 anos. Passei pelo mercado de sinal pago, de robô que prometia o mundo, e de gente que sumia quando o gráfico virava contra.
              </p>
              <p className="mt-4" style={{ ...body, color: MUTED, fontSize: "16px", lineHeight: 1.6 }}>
                Resolvi fazer diferente. Abro a tela, opero ao vivo todos os dias, e você vê tudo. Os acertos, os erros, a gestão. Se funciona, funciona na sua frente.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: portrait, vertical, offset */}
        <div className="col-span-12 md:col-span-5 md:-mt-8">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "4/5", background: "linear-gradient(135deg,#1a1a1a,#070707)", border: `1px solid ${LINE}` }}
          >
            <img src={traderPhoto2} alt={NOME_TRADER} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="mt-4 flex items-center justify-between" style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.18em" }}>
            <span>FIG. 01 · {NOME_TRADER.toUpperCase()}</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const cards = [
    { v: "+R$ 847,00", l: "Sala da manhã · IDX" },
    { v: "7/7 GREEN", l: "Sequência da quinta" },
    { v: "+R$ 1.250", l: "Live de sexta · WIN" },
  ];
  return (
    <section style={{ background: BG }}>
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <p style={{ ...body, color: YELLOW, fontSize: "12px", letterSpacing: "0.18em", fontWeight: 700 }}>
          RESULTADOS RECENTES
        </p>
        <h2 className="mt-3 text-4xl sm:text-6xl" style={{ ...display, color: TEXT, textTransform: "uppercase", lineHeight: 1 }}>
          GREENS RECENTES DA NOSSA SALA.
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative p-6 flex flex-col justify-between"
              style={{
                aspectRatio: "9/16",
                background: "linear-gradient(180deg,#141414,#0a0a0a)",
                border: `1px solid ${LINE}`,
              }}
            >
              <p style={{ ...display, color: "#3dff8a", fontSize: "40px", lineHeight: 1, textShadow: "0 0 18px rgba(61,255,138,0.35)" }}>
                {c.v}
              </p>
              <p style={{ ...body, color: MUTED, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.l}</p>
            </div>
          ))}
        </div>
        <p className="mt-6" style={{ ...body, color: MUTED, fontSize: "12px", fontStyle: "italic" }}>
          Substitua pelos prints reais do cliente
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    {
      q: "Preciso ter experiência pra entrar?",
      a: "Não. Tem gente que opera com a gente há anos e tem gente que entrou ontem. O curso dentro do grupo cobre do zero, e nas lives eu explico cada entrada antes de operar.",
    },
    {
      q: "Quanto custa?",
      a: "O grupo é gratuito. O curso completo também está liberado pra quem entra. Não tem pegadinha, não tem upsell escondido na porta de entrada.",
    },
    {
      q: "E se eu não conseguir operar ao vivo?",
      a: "As lives ficam salvas no grupo. Você revê quantas vezes quiser, no horário que der. Mas a recomendação é acompanhar ao vivo pelo menos uma vez na semana.",
    },
    {
      q: "Por que está gratuito?",
      a: "Porque o modelo é simples. Você entra, vê funcionar, e decide depois se quer aprofundar em produtos avançados. Pra entrar e operar junto, não custa nada.",
    },
  ];
  return (
    <section style={{ background: BG3, borderTop: `1px solid ${LINE}` }}>
      <div className="mx-auto max-w-[1320px] px-6 py-24 md:py-32 grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 md:col-span-4 md:sticky md:top-12 md:self-start">
          <p style={{ ...body, color: YELLOW, fontSize: "11px", letterSpacing: "0.22em", fontWeight: 700 }}>
            § 05 — FAQ
          </p>
          <h2
            className="mt-6 text-[56px] sm:text-[80px] md:text-[88px]"
            style={{ ...display, color: TEXT, textTransform: "uppercase", lineHeight: 0.88 }}
          >
            Dúvidas <br />
            <span style={{ color: YELLOW, fontStyle: "italic" }}>comuns.</span>
          </h2>
          <p className="mt-6" style={{ ...body, color: MUTED, fontSize: "14px", lineHeight: 1.6, maxWidth: 280 }}>
            Se ficar alguma dúvida depois, é só perguntar dentro do grupo.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-5">
          {qs.map((it, i) => (
            <details
              key={i}
              className="group py-6"
              style={{ borderTop: `1px solid ${LINE}`, ...(i === qs.length - 1 ? { borderBottom: `1px solid ${LINE}` } : {}) }}
            >
              <summary
                className="flex justify-between items-start cursor-pointer list-none gap-6"
                style={{ ...body, color: TEXT, fontWeight: 600 }}
              >
                <span className="flex items-baseline gap-4 flex-1">
                  <span style={{ ...body, color: YELLOW, fontSize: "12px", letterSpacing: "0.18em", fontWeight: 700, minWidth: 28 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "20px", lineHeight: 1.3 }}>{it.q}</span>
                </span>
                <span
                  className="transition-transform duration-200 group-open:rotate-45 shrink-0"
                  style={{ color: YELLOW, fontSize: "32px", lineHeight: 1, ...display }}
                >
                  +
                </span>
              </summary>
              <p
                className="mt-4 ml-0 md:ml-[44px]"
                style={{ ...body, color: MUTED, fontSize: "15px", lineHeight: 1.65, maxWidth: 560 }}
              >
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      id="lp01-final-cta"
      className="w-full px-6 py-24 text-center"
      style={{
        background: YELLOW,
        backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 2px, transparent 2px 18px)`,
      }}
    >
      <div className="mx-auto max-w-[820px]">
        <h2 className="text-5xl sm:text-7xl md:text-8xl" style={{ ...display, color: "#000", textTransform: "uppercase", lineHeight: 0.95 }}>
          A PRÓXIMA LIVE COMEÇA HOJE.
        </h2>
        <p className="mt-6" style={{ ...body, color: "#000", fontSize: "18px", lineHeight: 1.55 }}>
          Entra no grupo, assiste, e decide depois. Sem cadastro complicado, sem upsell escondido.
        </p>
        <a
          href={LINK_TELEGRAM}
          className="inline-block mt-10"
          style={{
            ...body,
            background: "#000",
            color: YELLOW,
            fontWeight: 900,
            textTransform: "uppercase",
            padding: "22px 36px",
            fontSize: "16px",
            letterSpacing: "0.04em",
            boxShadow: "8px 8px 0 rgba(0,0,0,0.25)",
            border: "2px solid #000",
          }}
        >
          Entrar no Telegram Agora →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#000", color: MUTED, ...body }}>
      <div className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <p className="max-w-[720px] mx-auto" style={{ fontSize: "11px", letterSpacing: "0.1em", lineHeight: 1.6 }}>
          AVISO DE RISCO · Operações no mercado financeiro envolvem risco de perda total ou parcial do capital investido. Resultados passados não garantem resultados futuros. O conteúdo é educacional e não constitui recomendação de investimento.
        </p>
        <p className="mt-4" style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          © 2026 Alpha Academy · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finalCta = document.getElementById("lp01-final-cta");
    if (!finalCta) return;

    const onScroll = () => {
      // show after scrolling past first viewport
      const scrolled = window.scrollY > window.innerHeight * 0.6;
      setVisible(scrolled);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
        else onScroll();
      },
      { threshold: 0.1 }
    );
    observer.observe(finalCta);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed left-1/2 z-50 px-4 w-full max-w-[420px]"
      style={{
        bottom: 20,
        transform: `translateX(-50%) translateY(${visible ? "0" : "140%"})`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "transform .35s cubic-bezier(.2,.8,.2,1), opacity .25s ease",
      }}
    >
      <a
        href={LINK_TELEGRAM}
        className="flex items-center justify-center w-full"
        style={{
          ...body,
          background: "#000",
          color: YELLOW,
          fontWeight: 900,
          textTransform: "uppercase",
          padding: "18px 24px",
          fontSize: "15px",
          letterSpacing: "0.04em",
          boxShadow: "6px 6px 0 rgba(0,0,0,0.35), 0 8px 30px rgba(0,0,0,0.5)",
          border: `2px solid ${YELLOW}`,
        }}
      >
        Entrar no Telegram Agora →
      </a>
    </div>
  );
}

function LP01() {
  return (
    <main style={{ background: BG, color: TEXT, ...body, scrollBehavior: "smooth" }} className="min-h-screen">
      <Topbar />
      <Hero />
      <Stats />
      <Benefits />
      <Authority />
      <FAQ />
      <FinalCta />
      <Footer />
      <FloatingCta />
    </main>
  );
}
