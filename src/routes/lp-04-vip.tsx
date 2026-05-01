import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import traderPhoto from "@/assets/trader-delucca-vip.png";
import renanPhoto from "@/assets/renan-sampaio.jpg";

export const Route = createFileRoute("/lp-04-vip")({
  component: LP04NewsVip,
  head: () => ({
    meta: [
      { title: "Trader brasileiro acerta 99% das operações ao vivo · Mercado em Foco" },
      {
        name: "description",
        content:
          "Reportagem: De Lucca criou uma comunidade fechada de operadores com filtro de entrada por conversa direta no WhatsApp.",
      },
      { property: "og:title", content: "Trader brasileiro acerta 99% das operações ao vivo · Mercado em Foco" },
      {
        property: "og:description",
        content:
          "Sala aberta, operações públicas, comunidade fechada. Filtro de entrada por conversa direta.",
      },
    ],
  }),
});

const NOME_TRADER = "De Lucca";
const LINK_WHATSAPP =
  "https://wa.me/5561982972677?text=Oi%2C%20De%20Lucca.%20Vim%20pelo%20an%C3%BAncio%20e%20quero%20saber%20as%20regras%20pra%20entrar%20na%20comunidade.";
const CTA_LABEL = "Falar com De Lucca no WhatsApp ↓";

const PAPER = "#fafaf7";
const PAPER2 = "#f0ede4";
const INK = "#1a1a1a";
const INK_SOFT = "#55554f";
const ACCENT = "#0f3b2e";
const ALERT = "#c1272d";
const RULE = "#d8d3c4";

const display = { fontFamily: "'Playfair Display', Georgia, serif" };
const serif = { fontFamily: "'Source Serif 4', 'Source Serif Pro', Georgia, serif" };
const meta = { fontFamily: "'Inter', system-ui, sans-serif" };

function useNowString() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    setNow(formatNow(new Date()));
    const id = setInterval(() => setNow(formatNow(new Date())), 60_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatNow(d: Date) {
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${day} de ${month}, ${year} · ${hh}h${mm}`;
}

function Masthead() {
  const now = useNowString();
  return (
    <div style={{ borderBottom: `1px solid ${RULE}`, background: PAPER }}>
      <div className="mx-auto max-w-[1100px] px-5 py-3 grid grid-cols-3 items-center">
        <p style={{ ...meta, color: INK_SOFT, fontSize: 11, letterSpacing: "0.06em" }}>{now}</p>
        <p className="text-center" style={{ ...display, fontWeight: 800, color: INK, fontSize: 22, letterSpacing: "-0.01em" }}>
          Mercado em Foco
        </p>
        <div className="text-right flex items-center justify-end gap-4" style={{ ...meta, color: INK_SOFT, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
          <span>Assine</span>
          <span style={{ color: INK }}>Entrar</span>
        </div>
      </div>
    </div>
  );
}

function SectionNav() {
  return (
    <div style={{ borderBottom: `1px solid ${RULE}`, background: PAPER }}>
      <div className="mx-auto max-w-[1100px] px-5 py-2.5" style={{ ...meta, color: INK_SOFT, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
        Economia <span style={{ opacity: 0.5 }}>›</span> Mercado de Capitais{" "}
        <span style={{ opacity: 0.5 }}>›</span> Investidores
      </div>
    </div>
  );
}

function Headline() {
  return (
    <h1 className="mx-auto max-w-[820px] mt-6 text-[34px] sm:text-[44px] md:text-[56px]" style={{ ...display, color: INK, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.015em" }}>
      Trader brasileiro acerta <span style={{ fontWeight: 900 }}>99%</span> das operações{" "}
      <span style={{ fontWeight: 700, fontStyle: "italic" }}>ao vivo</span> e começa a chamar atenção fora do mercado financeiro
    </h1>
  );
}

function Dek() {
  return (
    <p className="mx-auto max-w-[760px] mt-6" style={{ ...serif, fontStyle: "italic", color: INK_SOFT, fontSize: 21, lineHeight: 1.45 }}>
      Com um modelo de sala aberta e resultados públicos, {NOME_TRADER} criou uma comunidade de 16 mil operadores que já provocou reação de quem trabalha com sinais pagos e robôs de operação.
    </p>
  );
}

function Byline() {
  return (
    <div className="mx-auto max-w-[760px] mt-8 pb-6 flex items-center gap-4" style={{ borderBottom: `1px solid ${RULE}` }}>
      <img
        src={renanPhoto}
        alt="Renan Sampaio"
        width={44}
        height={44}
        loading="lazy"
        style={{ width: 44, height: 44, borderRadius: 999, objectFit: "cover", flexShrink: 0, border: `1px solid ${RULE}` }}
      />
      <div className="flex-1">
        <p style={{ ...meta, color: INK, fontSize: 13, fontWeight: 600 }}>Por Renan Sampaio</p>
        <p style={{ ...meta, color: INK_SOFT, fontSize: 11, letterSpacing: "0.06em" }}>
          Repórter · Mercado em Foco · Publicado há 3 horas
        </p>
      </div>
      <div className="flex items-center gap-2" aria-hidden>
        {["f", "X", "in", "✉"].map((s, i) => (
          <span
            key={i}
            className="flex items-center justify-center"
            style={{ width: 30, height: 30, borderRadius: 999, border: `1px solid ${RULE}`, ...meta, fontSize: 11, color: INK_SOFT, fontWeight: 600 }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroPhoto() {
  return (
    <figure className="mt-8 w-full">
      <div className="overflow-hidden" style={{ background: "#1a1a1a" }}>
        <img
          src={traderPhoto}
          alt={`${NOME_TRADER} durante live diária em sua sala de operações`}
          className="w-full h-auto block"
          style={{ filter: "grayscale(0.85) contrast(1.05)" }}
          loading="eager"
        />
      </div>
      <figcaption className="mx-auto max-w-[860px] mt-3 px-5" style={{ ...serif, fontStyle: "italic", color: INK_SOFT, fontSize: 14, lineHeight: 1.5 }}>
        {NOME_TRADER} durante live diária em sua sala de operações. Foto: Divulgação / Alpha Academy
      </figcaption>
    </figure>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-5" style={{ ...display, color: INK, fontSize: 30, fontWeight: 700, lineHeight: 1.15 }}>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5" style={{ ...serif, color: INK, fontSize: 19, lineHeight: 1.65 }}>
      {children}
    </p>
  );
}

function PullQuote() {
  return (
    <blockquote className="my-10 pl-6" style={{ borderLeft: `4px solid ${ALERT}` }}>
      <p style={{ ...display, color: INK, fontSize: 26, fontStyle: "italic", lineHeight: 1.35, fontWeight: 700 }}>
        “Eu levei anos queimando dinheiro com gente que prometia o que não entregava. Quando entendi que a única prova que um trader pode dar é operar ao vivo e mostrar a tela, o modelo ficou óbvio.”
      </p>
      <cite className="block mt-4" style={{ ...meta, color: INK_SOFT, fontSize: 12, fontStyle: "normal", letterSpacing: "0.06em" }}>
        {NOME_TRADER}, em entrevista à reportagem
      </cite>
    </blockquote>
  );
}

function HowItWorksBox() {
  return (
    <aside className="my-10 p-7" style={{ background: PAPER2, borderLeft: `4px solid ${ACCENT}` }}>
      <p style={{ ...meta, color: ACCENT, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
        Como funciona o acesso
      </p>
      <p className="mt-3" style={{ ...serif, color: INK, fontSize: 17, lineHeight: 1.6 }}>
        A entrada na comunidade Alpha Academy é feita por conversa direta com o trader, via WhatsApp. Após o contato inicial, {NOME_TRADER} apresenta as regras da comunidade e avalia se o perfil do interessado faz sentido. Não há cobrança para entrar, mas há filtro.
      </p>
      <a
        href={LINK_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5"
        style={{ ...meta, background: ACCENT, color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 22px", letterSpacing: "0.04em" }}
      >
        {CTA_LABEL}
      </a>
    </aside>
  );
}

function InlineCta() {
  return (
    <aside className="mx-auto max-w-[760px] mt-14 p-8" style={{ background: PAPER2, border: `1px solid ${RULE}` }}>
      <p style={{ ...meta, color: ACCENT, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>
        Contato direto
      </p>
      <h3 className="mt-3" style={{ ...display, color: INK, fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>
        Manda mensagem. Recebe as regras. Decide com calma.
      </h3>
      <p className="mt-3" style={{ ...serif, color: INK_SOFT, fontSize: 17, lineHeight: 1.55 }}>
        O canal direto com {NOME_TRADER} está aberto via WhatsApp. Sem grupo automático, sem cadastro em massa.
      </p>
      <a
        href={LINK_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6"
        style={{ ...meta, background: ACCENT, color: "#fff", fontWeight: 600, fontSize: 15, padding: "16px 28px", letterSpacing: "0.04em" }}
      >
        Falar no WhatsApp ↓
      </a>
    </aside>
  );
}

function ReadAlso() {
  const items = [
    "Educação financeira avança entre jovens brasileiros",
    "CVM atualiza regras sobre comunicação de produtos de investimento",
    "Comunidades online reformulam o ensino de operação em mercado",
  ];
  return (
    <section className="mx-auto max-w-[1100px] mt-20 px-5 pb-12" style={{ borderTop: `1px solid ${RULE}`, paddingTop: 32 }}>
      <p style={{ ...meta, color: INK_SOFT, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>
        Leia também
      </p>
      <div className="mt-5 grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <article key={i} className="pt-5" style={{ borderTop: `1px solid ${RULE}` }}>
            <p style={{ ...meta, color: ACCENT, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
              Economia
            </p>
            <h4 className="mt-2" style={{ ...display, color: INK, fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>
              {t}
            </h4>
            <p className="mt-2" style={{ ...meta, color: INK_SOFT, fontSize: 11 }}>
              Mercado em Foco
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FooterDisclosure() {
  return (
    <footer style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}>
      <div className="mx-auto max-w-[1100px] px-5 py-10">
        <p className="mt-8 text-center" style={{ ...meta, color: INK_SOFT, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Mercado em Foco © 2026
        </p>
      </div>
    </footer>
  );
}

function Body() {
  return (
    <article className="mx-auto max-w-[760px] px-5 mt-10">
      <P>
        Nos últimos dois anos, o nome de {NOME_TRADER} começou a circular em grupos de operadores com um diferencial raro no mercado brasileiro. Enquanto a maioria dos perfis que vendem previsões de mercado opera longe dos holofotes e raramente mostra resultados verificáveis, o trader abriu uma sala ao vivo pública, onde executa operações diárias na frente de milhares de pessoas.
      </P>
      <P>
        A taxa de acerto reportada nas lives é de 99%, sem uso de estratégias comuns entre operadores frequentes de opções binárias como gale ou proteção dobrada. O modelo tem chamado atenção por um motivo simples: é verificável em tempo real. Qualquer pessoa com acesso à comunidade pode assistir, acompanhar entrada, saída e resultado de cada operação.
      </P>

      <H2>Um mercado saturado de promessas</H2>
      <P>
        O contexto ajuda a explicar o crescimento. O mercado de sinais e metodologias de trading no Brasil movimenta cifras estimadas em centenas de milhões de reais por ano, com proliferação de gurus, robôs automatizados e cursos gravados que raramente cumprem a performance prometida. Em meio a esse cenário, propostas baseadas em transparência operacional começam a ganhar tração.
      </P>
      <P>
        Segundo dados fornecidos pela Alpha Academy, a comunidade reúne cerca de 16 mil operadores ativos, sendo que aproximadamente 40% são novos a cada trimestre. O crescimento foi feito sem investimento em publicidade paga até o início de 2025.
      </P>

      <PullQuote />

      <P>
        A estrutura da academia inclui um curso completo, material técnico liberado para membros, e uma sala de análise pós-mercado que debate os movimentos do dia. Mas o diferencial, segundo o próprio trader, está na operação ao vivo.
      </P>

      <H2>Por que a transparência incomoda o mercado</H2>
      <P>
        O modelo de sala aberta entrou em conflito com boa parte dos players tradicionais do setor. Vendedores de sinais pagos, por exemplo, dependem da opacidade do resultado para sustentar o valor cobrado. Quando um operador demonstra que é possível acompanhar operações reais, a assimetria do mercado diminui.
      </P>
      <P>
        Nos últimos meses, algumas comunidades concorrentes passaram a adotar estratégias semelhantes, criando salas “gratuitas” como porta de entrada. Mas, segundo operadores ouvidos pela reportagem, a maioria recorre a edições de gravação ou seleção de melhores operações, o que difere do modelo ao vivo puro adotado pela Alpha Academy.
      </P>

      <P>
        Outro fator que tem chamado atenção no caso é o modelo de admissão. Ao contrário das comunidades pagas tradicionais, que aceitam qualquer pagador, e dos grupos gratuitos abertos, que aceitam qualquer cadastro, a Alpha Academy filtra cada entrada por conversa direta.
      </P>
      <P>
        “A gente já passou por aventureiro entrando, queimando banca em duas semanas e saindo culpando o método”, explica {NOME_TRADER} à reportagem. “Hoje eu prefiro abrir menos vagas e abrir certo.”
      </P>
      <P>
        O filtro funciona via WhatsApp: o interessado manda mensagem, recebe as regras da comunidade, e o próprio trader avalia o perfil antes de liberar o acesso. O modelo é incomum no mercado digital brasileiro, onde o padrão é o contrário: quanto mais pessoas, melhor.
      </P>

      <HowItWorksBox />

      <P>
        {NOME_TRADER} evita comentar diretamente sobre concorrentes. Em entrevista, ele se limita a dizer que o modelo “se vende sozinho quando a pessoa assiste uma live”. A Alpha Academy não divulga faturamento, mas afirma que a base de membros segue em expansão controlada.
      </P>

      <H2>O que esperar daqui pra frente</H2>
      <P>
        Para 2026, a academia projeta expansão da base de operadores e lançamento de um programa de formação avançada voltado para quem já opera com consistência. A porta de entrada continua sendo a conversa direta com o trader, com vagas abertas em lotes conforme demanda.
      </P>
      <P>
        Para quem tem curiosidade sobre o modelo, o canal de contato direto continua disponível. A recomendação do próprio trader é simples: mande mensagem, ouça as regras, e decida com informação completa se faz sentido pra você.
      </P>
    </article>
  );
}

function LP04NewsVip() {
  return (
    <main style={{ background: PAPER, color: INK, ...serif }} className="min-h-screen">
      <Masthead />
      <SectionNav />

      <div className="mx-auto max-w-[820px] px-5">
        <Headline />
        <Dek />
      </div>
      <div className="mx-auto max-w-[760px] px-5">
        <Byline />
      </div>
      <HeroPhoto />

      <Body />

      <InlineCta />
      <ReadAlso />
      <FooterDisclosure />
    </main>
  );
}
