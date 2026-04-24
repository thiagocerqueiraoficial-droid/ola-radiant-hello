import { createFileRoute } from "@tanstack/react-router";
import traderPhoto from "@/assets/trader-delucca.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Carta Aberta · Alpha Academy" },
      {
        name: "description",
        content:
          "Uma carta de trader pra trader. Pra quem já se queimou com sinal pago, robô, curso gravado e promessa de guru.",
      },
      { property: "og:title", content: "Carta Aberta · Alpha Academy" },
      {
        property: "og:description",
        content:
          "Se você já perdeu dinheiro tentando operar sozinho, essa carta é pra você.",
      },
    ],
  }),
});

const NOME_TRADER = "De Lucca";
const LINK_TELEGRAM = "{{LINK_TELEGRAM}}";

const PAPER = "#f4f0e6";
const INK = "#1a1a1a";
const INK_SOFT = "#5a5a52";
const ACCENT = "#b8361f";
const RULE = "#d4cdb8";
const HIGHLIGHT = "#fff3a3";

const serif = { fontFamily: "'Fraunces', Georgia, serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

function Mast() {
  return (
    <header
      className="w-full"
      style={{
        borderBottom: `2px solid ${INK}`,
      }}
    >
      <div className="mx-auto max-w-[1100px] px-5 py-4 grid grid-cols-3 items-center">
        <span
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-left"
          style={mono}
        >
          Vol. 01 · Carta Aberta
        </span>
        <span
          className="text-center text-lg sm:text-2xl"
          style={{ ...serif, fontWeight: 800, letterSpacing: "-0.01em" }}
        >
          Alpha Academy
        </span>
        <span
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-right"
          style={mono}
        >
          Só pra quem já perdeu
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[860px] px-6 pt-16 sm:pt-24 pb-12 text-center">
      <p
        className="text-[11px] sm:text-xs uppercase tracking-[0.22em]"
        style={{ ...mono, color: ACCENT }}
      >
        Uma carta de trader pra trader
      </p>
      <h1
        className="mt-6 text-[40px] leading-[1.05] sm:text-[58px] md:text-[68px]"
        style={{ ...serif, fontWeight: 800, letterSpacing: "-0.02em", color: INK }}
      >
        Se você já perdeu dinheiro tentando{" "}
        <span style={{ fontStyle: "italic", fontWeight: 400 }}>operar sozinho</span>,
        essa carta é pra você.
      </h1>
      <p
        className="mt-8 text-lg sm:text-xl max-w-[640px] mx-auto"
        style={{ ...serif, fontStyle: "italic", color: INK_SOFT, lineHeight: 1.5 }}
      >
        Não é mais um robô. Não é mais um guru vendendo print. É o que eu gostaria
        que alguém tivesse me dito antes de eu queimar os primeiros R$ 50 mil.
      </p>
      <figure className="mt-12 mx-auto max-w-[460px]">
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "4/5",
            background: "#0a0a0a",
            border: `1px solid ${RULE}`,
            boxShadow: "0 2px 0 rgba(0,0,0,0.04), 0 18px 40px -20px rgba(0,0,0,0.35)",
            filter: "grayscale(0.15) contrast(1.02)",
          }}
        >
          <img
            src={traderPhoto}
            alt={`${NOME_TRADER}, trader da Alpha Academy`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <figcaption
          className="mt-3 text-center"
          style={{ ...mono, fontSize: "11px", letterSpacing: "0.2em", color: INK_SOFT, textTransform: "uppercase" }}
        >
          {NOME_TRADER} · Trader · Brasília, 2026
        </figcaption>
      </figure>
    </section>
  );
}

function Body() {
  return (
    <article
      className="mx-auto px-6 pb-16"
      style={{ ...serif, color: INK, maxWidth: "720px", fontSize: "19px", lineHeight: 1.65 }}
    >
      <p className="mt-6">
        <span
          className="float-left mr-3 mt-1"
          style={{
            ...serif,
            fontSize: "72px",
            lineHeight: "0.9",
            color: ACCENT,
            fontWeight: 800,
          }}
        >
          S
        </span>
        e você chegou até aqui, provavelmente já tentou de tudo. Comprou curso, pagou
        sinal, entrou em grupo de Telegram lotado de gente gritando call em mandarim,
        talvez até tenha caído num robô que prometia renda passiva enquanto você
        dormia. E olha, se serve de consolo, você não está sozinho. A maioria das
        pessoas que hoje opera com a gente passou pelo mesmo.
      </p>

      <p className="mt-6">
        O problema nunca foi você. O problema é que o mercado virou um show de circo.
        Cada esquina tem um especialista de 22 anos com Ferrari alugada dizendo que
        descobriu a fórmula. Cada grupo promete 90% de acerto e entrega 40%. Cada robô
        funciona nos três primeiros dias e some na primeira virada.
      </p>

      <aside
        className="my-10 pl-5 py-3"
        style={{
          borderLeft: `3px solid ${ACCENT}`,
          ...mono,
          color: ACCENT,
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        Nota de margem: se você se identificou com algum parágrafo acima, pode
        continuar. Está no lugar certo.
      </aside>

      <blockquote
        className="my-12 pl-6"
        style={{
          borderLeft: `4px solid ${ACCENT}`,
          ...serif,
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "26px",
          lineHeight: 1.35,
          color: INK,
        }}
      >
        “Você não precisa de mais um guru. Você precisa de alguém que opere na sua
        frente e te mostre que dá certo antes de pedir um centavo.”
      </blockquote>

      <p className="mt-6">
        Essa é a premissa de tudo que a gente faz aqui. Eu abro a minha tela todos os
        dias. Eu mostro a entrada antes de entrar. Eu mostro o stop quando o mercado
        vira. Eu mostro o green e mostro o red.{" "}
        <strong
          style={{
            background: `linear-gradient(transparent 60%, ${HIGHLIGHT} 60%)`,
            fontWeight: 600,
          }}
        >
          Se o método funciona, você vai ver funcionando. Se não funciona, você vai
          ver não funcionando. Sem print editado, sem gravação antiga, sem história.
        </strong>
      </p>

      <h2
        className="mt-16 mb-4"
        style={{ ...serif, fontWeight: 800, fontSize: "32px", lineHeight: 1.15, letterSpacing: "-0.01em" }}
      >
        <span style={{ color: ACCENT, marginRight: "0.4em" }}>§</span>
        Por que nada do que você tentou antes funcionou
      </h2>

      <p>
        Vou te adiantar algumas verdades que ninguém fala pra você, porque ninguém
        ganha dinheiro te falando essas coisas.
      </p>

      <ul className="mt-8 mb-8">
        {[
          "Sinal pago raramente funciona. Se o cara acerta 90%, ele não precisa vender sinal, ele tá na praia. O que ele vende é a esperança de que dessa vez vai.",
          "Robô não opera melhor que humano. Ele opera mais rápido. E quando o mercado muda de comportamento, ele quebra junto. Sua banca vai junto.",
          "Curso gravado em 2022 não serve pra operar em 2026. Mercado muda. Se o cara não opera ao vivo hoje, ele não sabe o que está acontecendo hoje.",
          "Gale não é estratégia. Gale é pânico com nome bonito. Todo trader que sobreviveu no longo prazo aprendeu isso do jeito caro.",
        ].map((item, i) => (
          <li
            key={i}
            className="py-4 flex gap-3"
            style={{ borderBottom: `1px dashed ${RULE}` }}
          >
            <span style={{ color: ACCENT, fontWeight: 700, lineHeight: 1.65 }}>→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6">
        Eu sei disso porque eu também caí em cada uma. Os R$ 50 mil que perdi no começo
        não foram investimento em educação, foram investimento no ego de gente que
        estava ganhando dinheiro da minha ignorância. Quando eu aceitei isso, parei de
        procurar atalho e comecei a construir método.
      </p>

      <h2
        className="mt-16 mb-4"
        style={{ ...serif, fontWeight: 800, fontSize: "32px", lineHeight: 1.15, letterSpacing: "-0.01em" }}
      >
        <span style={{ color: ACCENT, marginRight: "0.4em" }}>§</span>
        O que a gente faz de diferente
      </h2>

      <p>
        Faz mais de 3 anos que eu abro sala ao vivo, opero na frente de operador, e
        mostro a leitura em tempo real. A taxa de acerto fica em 99% nas lives. Sem
        gale. Sem proteção. Sem robô. Só leitura de gráfico, gestão de risco, e
        entrada no momento certo.
      </p>

      <p className="mt-6">
        O grupo é gratuito. Você entra, assiste a live, vê funcionar, e só decide
        qualquer coisa depois disso.{" "}
        <span
          style={{
            background: `linear-gradient(transparent 60%, ${HIGHLIGHT} 60%)`,
          }}
        >
          Ninguém te pede nada pra entrar.
        </span>{" "}
        Você só precisa saber onde está o Telegram.
      </p>

      <blockquote
        className="my-12 pl-6"
        style={{
          borderLeft: `4px solid ${ACCENT}`,
          ...serif,
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "26px",
          lineHeight: 1.35,
          color: INK,
        }}
      >
        “Se funcionar na sua frente, você decide o que fazer com isso. Se não
        funcionar, você sai. Justo?”
      </blockquote>

      <h2
        className="mt-16 mb-4"
        style={{ ...serif, fontWeight: 800, fontSize: "32px", lineHeight: 1.15, letterSpacing: "-0.01em" }}
      >
        <span style={{ color: ACCENT, marginRight: "0.4em" }}>§</span>
        O que você vai encontrar lá dentro
      </h2>

      <ul className="mt-6 mb-8">
        {[
          "Sala ao vivo todos os dias. Eu entro, abro o gráfico, opero. Você assiste e copia se quiser.",
          "Curso completo liberado. Do básico ao avançado. Leitura, psicologia, gestão. Sem custo.",
          "Comunidade de 12 mil operadores ativos. Gente que já passou pelo que você tá passando.",
          "Avisos prioritários. Você é notificado antes da sala abrir. Nada de chegar quando a operação já acabou.",
        ].map((item, i) => (
          <li
            key={i}
            className="py-4 flex gap-3"
            style={{ borderBottom: `1px dashed ${RULE}` }}
          >
            <span style={{ color: ACCENT, fontWeight: 700, lineHeight: 1.65 }}>→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8">
        Não tem pegadinha. Não tem upsell na porta de entrada. Você entra, vê, decide.
        É esse o contrato.
      </p>

      <hr className="mt-16 mb-8" style={{ border: 0, borderTop: `1px solid ${RULE}` }} />

      <p style={{ fontSize: "19px" }}>Um abraço e te vejo na sala,</p>
      <p
        className="mt-4"
        style={{ ...serif, fontStyle: "italic", fontSize: "38px", color: ACCENT, lineHeight: 1.1 }}
      >
        {NOME_TRADER}
      </p>
      <p
        className="mt-2"
        style={{ ...mono, fontSize: "11px", letterSpacing: "0.18em", color: INK_SOFT, textTransform: "uppercase" }}
      >
        Trader · Alpha Academy
      </p>

      <div
        className="relative mt-16 p-7 sm:p-9"
        style={{
          background: "#ffffff",
          border: `1px solid ${RULE}`,
        }}
      >
        <span
          className="absolute -top-3 left-5 px-2"
          style={{
            ...mono,
            background: "#ffffff",
            color: ACCENT,
            fontSize: "11px",
            letterSpacing: "0.2em",
          }}
        >
          P.S.
        </span>
        <p style={{ ...serif, fontSize: "18px", lineHeight: 1.6 }}>
          Se você já se queimou antes, sei que vai ler essa carta desconfiado. Eu
          leria também. A única coisa que eu posso te oferecer é isso: entra no grupo,
          assiste uma live, e julga pelo que você ver. Zero compromisso.
        </p>
        <p className="mt-4" style={{ ...serif, fontSize: "18px", lineHeight: 1.6 }}>
          A próxima sala abre hoje. Se você quiser acompanhar, o botão tá logo abaixo.
        </p>
      </div>
    </article>
  );
}

function Cta() {
  return (
    <section
      className="relative w-full px-6 py-20 sm:py-28 overflow-hidden"
      style={{
        background: "#0a0a0a",
        backgroundImage: `repeating-linear-gradient(45deg, rgba(184,54,31,0.08) 0 2px, transparent 2px 16px)`,
      }}
    >
      <div className="mx-auto max-w-[760px] text-center">
        <h3
          className="text-3xl sm:text-5xl"
          style={{ ...serif, fontWeight: 800, color: "#f4f0e6", lineHeight: 1.15, letterSpacing: "-0.01em" }}
        >
          Entre no grupo. Assista a próxima live. Julgue por você mesmo.
        </h3>
        <p
          className="mt-6 text-base sm:text-lg"
          style={{ ...serif, color: "#bdbdb5", lineHeight: 1.55 }}
        >
          Gratuito. Sem cadastro complicado. Sem upsell escondido. Você entra, vê
          funcionar, e decide.
        </p>
        <a
          href={LINK_TELEGRAM}
          className="inline-block mt-10 px-8 py-5 transition-colors duration-200"
          style={{
            ...mono,
            background: ACCENT,
            color: PAPER,
            border: `3px solid ${PAPER}`,
            fontSize: "13px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = PAPER;
            e.currentTarget.style.color = ACCENT;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = ACCENT;
            e.currentTarget.style.color = PAPER;
          }}
        >
          Acessar Grupo no Telegram →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="px-6 py-10 text-center"
      style={{ ...mono, fontSize: "10px", letterSpacing: "0.16em", color: INK_SOFT, textTransform: "uppercase" }}
    >
      <p className="max-w-[680px] mx-auto leading-relaxed">
        Aviso de risco · Operações no mercado financeiro envolvem risco de perda do
        capital investido. Resultados passados não garantem resultados futuros.
      </p>
      <p className="mt-4">© 2026 Alpha Academy · Todos os direitos reservados</p>
    </footer>
  );
}

function Index() {
  return (
    <main
      style={{
        background: PAPER,
        backgroundImage: `radial-gradient(rgba(26,26,26,0.06) 1px, transparent 1px)`,
        backgroundSize: "3px 3px",
        color: INK,
        scrollBehavior: "smooth",
      }}
      className="min-h-screen"
    >
      <Mast />
      <Hero />
      <Body />
      <Cta />
      <Footer />
    </main>
  );
}
