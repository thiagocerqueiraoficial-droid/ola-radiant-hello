import { createFileRoute } from "@tanstack/react-router";

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
        backgroundImage: `radial-gradient(circle at 0% 0%, rgba(255,212,0,0.08), transparent 45%), radial-gradient(circle at 100% 100%, rgba(255,77,0,0.08), transparent 45%)`,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ border: `1px solid ${YELLOW}`, color: YELLOW, ...body, fontSize: "11px", letterSpacing: "0.14em", fontWeight: 700 }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 999, background: YELLOW, animation: "lp01-pulse 1.4s ease-in-out infinite" }} />
            GRUPO GRATUITO · TELEGRAM
          </span>

          <h1
            className="mt-6 text-[56px] sm:text-[72px] md:text-[92px] leading-[0.92]"
            style={{ ...display, color: TEXT, textTransform: "uppercase" }}
          >
            OPERE{" "}
            <span className="relative inline-block" style={{ color: YELLOW, fontStyle: "italic" }}>
              <span
                aria-hidden
                className="absolute inset-0"
                style={{ background: ORANGE, opacity: 0.35, transform: "skewX(-8deg)", zIndex: 0 }}
              />
              <span className="relative" style={{ zIndex: 1 }}>AO VIVO</span>
            </span>{" "}
            COMIGO TODOS OS DIAS.
          </h1>

          <p className="mt-6 text-base sm:text-lg max-w-[520px]" style={{ ...body, color: MUTED, lineHeight: 1.55 }}>
            Sem gale. Sem proteção. Sem robô. Só eu, o gráfico e você assistindo entrada por entrada em tempo real.
          </p>

          <div className="mt-8">
            <CtaButton>Entrar no Grupo Gratuito →</CtaButton>
            <p className="mt-4" style={{ ...body, color: MUTED, fontSize: "12px", letterSpacing: "0.06em" }}>
              Acesso imediato · Vagas limitadas por sala
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-[460px] mx-auto md:ml-auto" style={{ aspectRatio: "4/5" }}>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1c1c1c, #0a0a0a)",
              border: `1px solid ${LINE}`,
            }}
          >
            <span
              className="absolute"
              style={{
                top: "-30px",
                left: "-10px",
                ...display,
                fontSize: "360px",
                lineHeight: 1,
                color: YELLOW,
                opacity: 0.18,
              }}
            >
              A
            </span>

            <div
              className="absolute left-0 right-0 bottom-0 px-5 py-4"
              style={{
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)",
                borderLeft: `3px solid ${YELLOW}`,
              }}
            >
              <p style={{ ...display, fontSize: "28px", color: TEXT, lineHeight: 1 }}>{NOME_TRADER}</p>
              <p style={{ ...body, color: MUTED, fontSize: "12px", letterSpacing: "0.08em", marginTop: 4 }}>
                Trader · 6 anos de mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { n: "99%", l: "Acerto nas Lives" },
    { n: "0", l: "Gale ou Proteção" },
    { n: "5x", l: "Lives na Semana" },
    { n: "12k+", l: "Alunos Ativos" },
  ];
  return (
    <section style={{ background: BG3, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
      <div className="mx-auto max-w-[1200px] px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((s, i) => (
          <div key={i} className="text-center md:text-left">
            <p style={{ ...display, color: YELLOW, fontSize: "72px", lineHeight: 1 }}>{s.n}</p>
            <p className="mt-2" style={{ ...body, color: MUTED, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      t: "Lives diárias ao vivo",
      d: "Entro na sala, abro o gráfico e opero na sua frente. Você acompanha leitura, entrada e saída em tempo real.",
    },
    {
      t: "Curso completo liberado",
      d: "Do zero até operação avançada. Módulos de leitura de gráfico, gestão de risco, psicologia e método autoral.",
    },
    {
      t: "Sala de sinais priorizada",
      d: "Quem entra pelo grupo gratuito recebe avisos antes das operações começarem. Nada de chegar atrasado.",
    },
    {
      t: "Comunidade ativa",
      d: "Mais de 12 mil operadores trocando leitura, estratégia e call do dia. Ninguém opera sozinho aqui.",
    },
  ];
  return (
    <section style={{ background: BG }}>
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <p style={{ ...body, color: YELLOW, fontSize: "12px", letterSpacing: "0.18em", fontWeight: 700 }}>
          O QUE VOCÊ RECEBE
        </p>
        <h2 className="mt-3 text-4xl sm:text-6xl" style={{ ...display, color: TEXT, textTransform: "uppercase", lineHeight: 1 }}>
          TUDO QUE VOCÊ PRECISA PRA OPERAR HOJE.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <div
              key={i}
              className="p-7 transition-colors duration-200 group"
              style={{ background: BG2, borderLeft: `3px solid ${YELLOW}`, border: `1px solid ${LINE}`, borderLeftWidth: 3, borderLeftColor: YELLOW }}
              onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = ORANGE)}
              onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = YELLOW)}
            >
              <h3 style={{ ...display, color: TEXT, fontSize: "28px", textTransform: "uppercase", lineHeight: 1.05 }}>{it.t}</h3>
              <p className="mt-3" style={{ ...body, color: MUTED, fontSize: "15px", lineHeight: 1.55 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section style={{ background: BG3 }}>
      <div className="mx-auto max-w-[1200px] px-6 py-20 grid md:grid-cols-3 gap-10 items-center">
        <div
          className="aspect-square flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#1a1a1a,#070707)", border: `1px solid ${LINE}` }}
        >
          <span style={{ ...display, color: YELLOW, fontSize: "240px", lineHeight: 1 }}>A</span>
        </div>
        <div className="md:col-span-2">
          <p style={{ ...body, color: YELLOW, fontSize: "12px", letterSpacing: "0.18em", fontWeight: 700 }}>
            QUEM OPERA COM VOCÊ
          </p>
          <h2 className="mt-3 text-5xl sm:text-7xl" style={{ ...display, color: TEXT, textTransform: "uppercase", lineHeight: 1 }}>
            {NOME_TRADER}.
          </h2>
          <p className="mt-6" style={{ ...body, color: TEXT, fontSize: "17px", lineHeight: 1.6 }}>
            Sou trader há mais de 6 anos. Passei pelo mercado de sinal pago, de robô que prometia o mundo, e de gente que sumia quando o gráfico virava contra.
          </p>
          <p className="mt-4" style={{ ...body, color: MUTED, fontSize: "17px", lineHeight: 1.6 }}>
            Resolvi fazer diferente. Abro a tela, opero ao vivo todos os dias, e você vê tudo. Os acertos, os erros, a gestão. Se funciona, funciona na sua frente.
          </p>
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
    <section style={{ background: BG3 }}>
      <div className="mx-auto max-w-[860px] px-6 py-20">
        <p style={{ ...body, color: YELLOW, fontSize: "12px", letterSpacing: "0.18em", fontWeight: 700 }}>
          PERGUNTAS FREQUENTES
        </p>
        <h2 className="mt-3 text-4xl sm:text-6xl" style={{ ...display, color: TEXT, textTransform: "uppercase", lineHeight: 1 }}>
          DÚVIDAS COMUNS.
        </h2>
        <div className="mt-10">
          {qs.map((it, i) => (
            <details
              key={i}
              className="group py-5"
              style={{ borderTop: `1px solid ${LINE}`, ...(i === qs.length - 1 ? { borderBottom: `1px solid ${LINE}` } : {}) }}
            >
              <summary
                className="flex justify-between items-center cursor-pointer list-none"
                style={{ ...body, color: TEXT, fontSize: "18px", fontWeight: 600 }}
              >
                <span>{it.q}</span>
                <span
                  className="ml-4 transition-transform duration-200 group-open:rotate-45"
                  style={{ color: YELLOW, fontSize: "26px", lineHeight: 1, ...display }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3" style={{ ...body, color: MUTED, fontSize: "15px", lineHeight: 1.6 }}>
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

function LP01() {
  return (
    <main style={{ background: BG, color: TEXT, ...body, scrollBehavior: "smooth" }} className="min-h-screen">
      <Topbar />
      <Hero />
      <Stats />
      <Benefits />
      <Authority />
      <Proof />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
