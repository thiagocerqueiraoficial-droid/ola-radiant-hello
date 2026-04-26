import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

export const Route = createFileRoute("/lp-03")({
  component: LP03Quiz,
  head: () => ({
    meta: [
      { title: "Quiz · Descubra seu perfil de operador · Alpha Academy" },
      {
        name: "description",
        content: "5 perguntas, 90 segundos. Descubra seu perfil de operador e o próximo passo real pra você.",
      },
      { property: "og:title", content: "Quiz · Descubra seu perfil de operador · Alpha Academy" },
      {
        property: "og:description",
        content: "Diagnóstico em 90 segundos. Sem cadastro. Resposta imediata.",
      },
    ],
  }),
});

const LINK_TELEGRAM = "{{LINK_TELEGRAM}}";

const BG = "#05070d";
const BG2 = "#0d1320";
const CARD = "#111827";
const TEXT = "#f7fbff";
const MUTED = "#8f9bb3";
const LIME = "#b7ff37";
const PURPLE = "#6d5cff";
const CYAN = "#22d3ee";
const HOT = "#ff4fd8";
const LINE = "rgba(255,255,255,0.08)";

const display = { fontFamily: "'Syne', system-ui, sans-serif", letterSpacing: "-0.01em" };
const body = { fontFamily: "'Inter', system-ui, sans-serif" };

type Option = { label: string; weight: number };
type Question = { q: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    q: "Você já operou no mercado financeiro antes?",
    options: [
      { label: "Nunca operei, estou começando agora", weight: 0 },
      { label: "Já operei algumas vezes, sem método", weight: 1 },
      { label: "Opero há meses mas sem consistência", weight: 2 },
      { label: "Opero há mais de 1 ano e tenho algum resultado", weight: 3 },
    ],
  },
  {
    q: "Qual é o seu maior problema hoje?",
    options: [
      { label: "Não sei por onde começar", weight: 3 },
      { label: "Já perdi dinheiro com sinal ou robô", weight: 2 },
      { label: "Opero no feeling, sem estratégia definida", weight: 3 },
      { label: "Tenho método mas falta consistência emocional", weight: 1 },
    ],
  },
  {
    q: "Quanto tempo você pode dedicar por dia?",
    options: [
      { label: "Menos de 30 minutos", weight: 1 },
      { label: "Entre 30 min e 1 hora", weight: 2 },
      { label: "1 a 2 horas todo dia", weight: 3 },
      { label: "Tempo livre, foco total", weight: 3 },
    ],
  },
  {
    q: "Você já acompanhou alguém operando ao vivo?",
    options: [
      { label: "Nunca", weight: 3 },
      { label: "Já assisti, mas nada sério", weight: 2 },
      { label: "Acompanho alguns traders mas não aplico", weight: 1 },
      { label: "Acompanho e já aplico, quero melhorar", weight: 0 },
    ],
  },
  {
    q: "Qual é o seu objetivo nos próximos 90 dias?",
    options: [
      { label: "Começar do zero com o pé direito", weight: 3 },
      { label: "Parar de perder dinheiro e sair do zero a zero", weight: 3 },
      { label: "Gerar uma renda extra de R$ 2 a 5 mil", weight: 2 },
      { label: "Tornar isso minha fonte principal", weight: 2 },
    ],
  },
];

const LOADING_MSGS = [
  "Cruzando com base de 16 mil operadores",
  "Calculando seu perfil comportamental",
  "Identificando maior oportunidade pra você",
  "Gerando recomendações personalizadas",
];

function getProfile(total: number) {
  if (total <= 5) {
    return {
      name: "Operador em Transição",
      veredict:
        "Você já tem alguma experiência e busca refinamento. A sala ao vivo vai te ajudar a apertar o método e parar de deixar dinheiro na mesa em operações evitáveis.",
      recs: [
        "Comparar suas entradas com as da sala ao vivo",
        "Focar em gestão de risco e timing",
        "Acessar os módulos avançados do curso",
        "Participar das lives de análise pós-mercado",
      ],
    };
  }
  if (total <= 10) {
    return {
      name: "Operador em Formação",
      veredict:
        "Você está no momento ideal pra acompanhar operações ao vivo e construir método. A sala foi desenhada exatamente pro seu estágio, e a maioria dos alunos que entram nesse perfil ganha consistência em 30 a 60 dias.",
      recs: [
        "Entrar na sala ao vivo (próxima abre hoje)",
        "Acompanhar 3 lives na primeira semana",
        "Acessar o curso completo liberado no grupo",
        "Operar em conta demo nos primeiros 15 dias",
      ],
    };
  }
  return {
    name: "Iniciante bem posicionado",
    veredict:
      "Boa notícia: você está começando no caminho certo, buscando aprender antes de arriscar. A sala ao vivo é o ambiente mais seguro pra um iniciante porque você vê operação real antes de aplicar.",
    recs: [
      "Começar pelo curso básico liberado no grupo",
      "Assistir 5 lives antes de qualquer entrada real",
      "Operar em conta demo nos primeiros 30 dias",
      "Tirar dúvidas na comunidade antes de arriscar",
    ],
  };
}

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-4 flex items-center justify-between"
      style={{
        background: "rgba(5,7,13,0.74)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        borderBottom: `1px solid ${LINE}`,
        boxShadow: `0 0 36px ${CYAN}12`,
      }}
    >
      <p style={{ ...display, fontWeight: 800, color: TEXT, fontSize: 18, letterSpacing: "-0.02em" }}>
        ALPHA<span style={{ color: CYAN }}>.</span><span style={{ color: LIME }}>QUIZ</span>
      </p>
      <p style={{ ...body, color: MUTED, fontSize: 12, fontWeight: 500 }}>
        5 perguntas · <span style={{ color: LIME, fontWeight: 700 }}>90 segundos</span>
      </p>
    </header>
  );
}

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div
      className="fixed left-0 right-0 z-40"
      style={{ top: 56, height: 3, background: LINE }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${CYAN}, ${LIME}, ${HOT})`,
          boxShadow: `0 0 16px ${CYAN}80`,
          transition: "width 400ms ease",
        }}
      />
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section
      className="relative mx-auto max-w-[820px] px-6 text-center"
      style={{ paddingTop: 120, paddingBottom: 80, animation: "lp03-in 400ms ease both" }}
    >
      <h1
        className="text-[40px] sm:text-[50px] md:text-[58px]"
        style={{ ...display, fontWeight: 800, color: TEXT, lineHeight: 1.05 }}
      >
        Descubra seu{" "}
        <span className="relative inline-block">
          <span
            aria-hidden
            className="absolute"
            style={{
              inset: "-4px -10px",
              background: PURPLE,
              opacity: 0.35,
              borderRadius: 12,
              filter: "blur(4px)",
              zIndex: 0,
            }}
          />
          <span style={{ position: "relative", color: LIME, fontStyle: "italic", zIndex: 1 }}>
            perfil de operador
          </span>
        </span>{" "}
        em 90 segundos.
      </h1>
      <p
        className="mx-auto mt-7"
        style={{ ...body, color: MUTED, fontSize: 17, lineHeight: 1.55, maxWidth: 580 }}
      >
        5 perguntas rápidas pra identificar em que ponto do mercado você está e qual é o próximo passo real pra você sair do prejuízo ou aumentar o que já funciona.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["100% gratuito", "Sem cadastro", "Resposta imediata"].map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: BG2, border: `1px solid ${LINE}`, ...body, color: MUTED, fontSize: 13, fontWeight: 500 }}
          >
            <span style={{ color: LIME, fontWeight: 700 }}>✓</span> {t}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={onStart}
        className="mt-10 inline-flex items-center gap-3 transition-transform hover:scale-[1.03]"
        style={{
          ...body,
          background: LIME,
          color: "#000",
          fontWeight: 700,
          padding: "16px 12px 16px 28px",
          borderRadius: 999,
          fontSize: 16,
          boxShadow: `0 12px 30px ${LIME}33`,
        }}
      >
        Começar quiz
        <span
          className="flex items-center justify-center"
          style={{ width: 36, height: 36, borderRadius: 999, background: "#000", color: LIME, fontSize: 16 }}
        >
          →
        </span>
      </button>
    </section>
  );
}

function QuestionScreen({
  index,
  question,
  selected,
  onSelect,
  onBack,
  onNext,
}: {
  index: number;
  question: Question;
  selected: number | null;
  onSelect: (i: number) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <section
      key={index}
      className="mx-auto max-w-[760px] px-6"
      style={{ paddingTop: 120, paddingBottom: 80, animation: "lp03-in 400ms ease both" }}
    >
      <span
        className="inline-block px-3 py-1.5 rounded-full"
        style={{ background: `${CYAN}12`, color: CYAN, ...body, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", border: `1px solid ${CYAN}44`, boxShadow: `0 0 22px ${CYAN}18` }}
      >
        Pergunta {index + 1} de {QUESTIONS.length}
      </span>
      <h2
        className="mt-5 text-[28px] sm:text-[36px] md:text-[42px]"
        style={{ ...display, fontWeight: 700, color: TEXT, lineHeight: 1.15 }}
      >
        {question.q}
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        {question.options.map((opt, i) => {
          const isSel = selected === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              className="relative text-left transition-all duration-200 hover:translate-x-1"
              style={{
                background: isSel ? `linear-gradient(135deg, ${CYAN}18, ${LIME}12)` : `linear-gradient(135deg, ${CARD}, #0b1020)`,
                border: `1px solid ${isSel ? CYAN : LINE}`,
                borderRadius: 12,
                padding: "18px 20px 18px 58px",
                ...body,
                color: TEXT,
                fontSize: 16,
                fontWeight: 500,
                cursor: "pointer",
                boxShadow: isSel ? `0 0 0 1px ${LIME}55, 0 14px 38px ${CYAN}18` : `inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
              onMouseEnter={(e) => {
                if (!isSel) e.currentTarget.style.borderColor = CYAN;
              }}
              onMouseLeave={(e) => {
                if (!isSel) e.currentTarget.style.borderColor = LINE;
              }}
            >
              <span
                className="absolute"
                style={{
                  left: 22,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 20,
                  height: 20,
                  borderRadius: 999,
                  border: `2px solid ${isSel ? LIME : "#4a6078"}`,
                  background: isSel ? `radial-gradient(circle, ${LIME} 38%, ${CYAN})` : "transparent",
                  boxShadow: isSel ? `0 0 18px ${LIME}88` : "none",
                  transition: "all 200ms ease",
                }}
              />
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-start">
        <button
          type="button"
          onClick={onBack}
          style={{ ...body, color: MUTED, fontSize: 14, fontWeight: 600, background: "transparent", border: 0, cursor: "pointer" }}
        >
          ← Voltar
        </button>
      </div>
    </section>
  );
}

function Loading() {
  const [msgIdx, setMsgIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setMsgIdx((i) => (i + 1) % LOADING_MSGS.length), 700);
    return () => clearInterval(id);
  }, []);
  return (
    <section
      className="mx-auto max-w-[600px] px-6 text-center flex flex-col items-center"
      style={{ paddingTop: 160, paddingBottom: 120, animation: "lp03-in 400ms ease both" }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 999,
          border: `3px solid ${LINE}`,
          borderTopColor: LIME,
          animation: "lp03-spin 1s linear infinite",
        }}
      />
      <h3 className="mt-8" style={{ ...display, fontWeight: 700, color: TEXT, fontSize: 24 }}>
        Analisando suas respostas...
      </h3>
      <p className="mt-3" style={{ ...body, color: MUTED, fontSize: 15 }}>
        {LOADING_MSGS[msgIdx]}
      </p>
    </section>
  );
}

function Result({ total }: { total: number }) {
  const profile = useMemo(() => getProfile(total), [total]);
  const score = Math.min(99, Math.round(75 + (total / 15) * 24));
  return (
    <section
      className="mx-auto max-w-[760px] px-5"
      style={{ paddingTop: 110, paddingBottom: 80, animation: "lp03-in 500ms ease both" }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          background: CARD,
          border: `1px solid ${LINE}`,
          borderRadius: 16,
          padding: "48px 40px",
        }}
      >
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: -100,
            right: -100,
            width: 320,
            height: 320,
            background: `radial-gradient(circle, ${LIME}33, transparent 70%)`,
          }}
        />
        <div className="relative">
          <span
            className="inline-block px-3 py-1.5 rounded-full"
            style={{ background: `${LIME}15`, color: LIME, ...body, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", border: `1px solid ${LIME}40` }}
          >
            Perfil identificado
          </span>
          <h2
            className="mt-5 text-[32px] sm:text-[42px] md:text-[48px]"
            style={{ ...display, fontWeight: 800, color: TEXT, lineHeight: 1.05 }}
          >
            Você é um{" "}
            <span style={{ color: LIME, fontStyle: "italic" }}>{profile.name}</span>
          </h2>

          <div
            className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full"
            style={{ background: BG2, border: `1px solid ${LINE}` }}
          >
            <span style={{ ...display, color: LIME, fontWeight: 800, fontSize: 28, lineHeight: 1 }}>
              {score}%
            </span>
            <span style={{ ...body, color: MUTED, fontSize: 12, letterSpacing: "0.06em" }}>
              Compatibilidade com a sala ao vivo
            </span>
          </div>

          <p
            className="mt-7"
            style={{ ...body, color: TEXT, fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}
          >
            {profile.veredict}
          </p>

          <div
            className="mt-8 p-6"
            style={{ background: BG2, border: `1px solid ${LINE}`, borderRadius: 12 }}
          >
            <p
              style={{ ...display, color: LIME, fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              O que a gente recomenda pra você
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {profile.recs.map((r, i) => (
                <li key={i} className="flex items-start gap-3" style={{ ...body, color: TEXT, fontSize: 15, lineHeight: 1.5 }}>
                  <span style={{ color: LIME, fontWeight: 700, lineHeight: 1.5 }}>✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 text-center">
            <a
              href={LINK_TELEGRAM}
              className="inline-flex items-center gap-2 transition-transform hover:scale-[1.02]"
              style={{
                ...body,
                background: `linear-gradient(90deg, ${LIME}, #f4ff5e)`,
                color: "#000",
                fontWeight: 800,
                padding: "20px 36px",
                borderRadius: 999,
                fontSize: 16,
                boxShadow: `0 0 0 1px ${LIME}, 0 18px 50px ${LIME}55`,
                textTransform: "none",
              }}
            >
              Entrar na sala ao vivo →
            </a>
            <p className="mt-4" style={{ ...body, color: MUTED, fontSize: 12 }}>
              Vagas limitadas · Abertura imediata no Telegram
            </p>
          </div>
        </div>
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
          © 2026 Alpha Academy · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

type Screen = "intro" | "question" | "loading" | "result";

function LP03Quiz() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(QUESTIONS.length).fill(null));

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen, qIdx]);

  useEffect(() => {
    if (screen !== "loading") return;
    const id = setTimeout(() => setScreen("result"), 2800);
    return () => clearTimeout(id);
  }, [screen]);

  const total = useMemo(
    () => answers.reduce<number>((acc, ai, i) => acc + (ai === null ? 0 : QUESTIONS[i].options[ai].weight), 0),
    [answers],
  );

  const pct =
    screen === "intro"
      ? 0
      : screen === "result"
        ? 100
        : screen === "loading"
          ? 100
          : Math.round(((qIdx + (answers[qIdx] !== null ? 1 : 0)) / QUESTIONS.length) * 100);

  const handleSelect = (i: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = i;
      return next;
    });
  };

  const handleNext = () => {
    if (answers[qIdx] === null) return;
    if (qIdx < QUESTIONS.length - 1) {
      setQIdx((i) => i + 1);
    } else {
      setScreen("loading");
    }
  };

  const handleBack = () => {
    if (qIdx === 0) {
      setScreen("intro");
    } else {
      setQIdx((i) => i - 1);
    }
  };

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: BG, color: TEXT, ...body }}
    >
      <style>{`
        @keyframes lp03-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lp03-spin { to { transform: rotate(360deg); } }
      `}</style>
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ top: -200, left: -200, width: 600, height: 600, background: `radial-gradient(circle, ${PURPLE}22, transparent 70%)` }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ bottom: -200, right: -200, width: 600, height: 600, background: `radial-gradient(circle, ${LIME}11, transparent 70%)` }}
      />

      <Header />
      <ProgressBar pct={pct} />

      <div className="relative" style={{ zIndex: 2 }}>
        {screen === "intro" && <Intro onStart={() => setScreen("question")} />}
        {screen === "question" && (
          <QuestionScreen
            index={qIdx}
            question={QUESTIONS[qIdx]}
            selected={answers[qIdx]}
            onSelect={handleSelect}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}
        {screen === "loading" && <Loading />}
        {screen === "result" && <Result total={total} />}
        <Footer />
      </div>
    </main>
  );
}
