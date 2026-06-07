import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import traderPhoto from "@/assets/trader-delucca-vip.png";
import renanPhoto from "@/assets/renan-sampaio.jpg";

export const Route = createFileRoute("/lp-w")({
  component: LPNewsW,
  head: () => ({
    meta: [
      { title: "Estrategista financeiro revela método de 'Ruptura' · Mercado em Foco" },
      {
        name: "description",
        content:
          "Gabriel Castelli abre modelo de parceria onde assume o risco: dobra o capital na conta do cliente antes de qualquer pagamento.",
      },
      { property: "og:title", content: "Estrategista financeiro revela método de 'Ruptura' · Mercado em Foco" },
      {
        property: "og:description",
        content:
          "Sem pagamento antecipado. Sem promessas vazias. O modelo de alavancagem que está sacudindo o mercado.",
      },
    ],
  }),
});

const NOME_TRADER = "Gabriel Castelli";
const LINK_WHATSAPP =
  "https://wa.me/5561982972677?text=ENTROU";
const CTA_LABEL = "Falar com Gabriel no WhatsApp ↓";

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
      Estrategista brasileiro revela método de <span style={{ fontWeight: 700, fontStyle: "italic" }}>'ruptura'</span> e propõe modelo onde cliente só paga após o lucro
    </h1>
  );
}

function Dek() {
  return (
    <p className="mx-auto max-w-[760px] mt-6" style={{ ...serif, fontStyle: "italic", color: INK_SOFT, fontSize: 21, lineHeight: 1.45 }}>
      Gabriel Castelli, operador que já extraiu mais de R$ 5 milhões de grandes corretoras, apresenta modelo de parceria focado em performance absoluta e risco financeiro blindado.
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
          Repórter · Mercado em Foco · Atualizado há 15 minutos
        </p>
      </div>
    </div>
  );
}

function HeroPhoto() {
  return (
    <figure className="mx-auto max-w-[760px] px-5 mt-8 w-full">
      <div className="overflow-hidden mx-auto" style={{ background: "#1a1a1a", maxWidth: 520 }}>
        <img
          src={traderPhoto}
          alt={`${NOME_TRADER} em sua estação de operações`}
          className="w-full h-auto block"
          style={{ filter: "grayscale(0.85) contrast(1.05)", aspectRatio: "1 / 1", objectFit: "cover" }}
          loading="eager"
        />
      </div>
      <figcaption className="mx-auto max-w-[520px] mt-3" style={{ ...serif, fontStyle: "italic", color: INK_SOFT, fontSize: 14, lineHeight: 1.5 }}>
        Castelli durante execução de estratégia de alavancagem. Foto: Arquivo Pessoal
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
        “Eu não quero o dinheiro de ninguém para começar. Eu quero que você veja o dinheiro na sua conta antes de me pagar um centavo.”
      </p>
      <cite className="block mt-4" style={{ ...meta, color: INK_SOFT, fontSize: 12, fontStyle: "normal", letterSpacing: "0.06em" }}>
        {NOME_TRADER}, em entrevista exclusiva
      </cite>
    </blockquote>
  );
}

function HowItWorksBox() {
  return (
    <aside className="my-10 p-7" style={{ background: PAPER2, borderLeft: `4px solid ${ACCENT}` }}>
      <p style={{ ...meta, color: ACCENT, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
        O Protocolo Castelli
      </p>
      <ul className="mt-4 space-y-3" style={{ ...serif, color: INK, fontSize: 16, lineHeight: 1.4 }}>
        <li><strong>1. Contato:</strong> Você me chama no WhatsApp e diz "ENTROU".</li>
        <li><strong>2. Execução:</strong> Eu dobro seu capital na sua própria conta em até 24 horas.</li>
        <li><strong>3. Acerto:</strong> Você só me paga a minha parte depois que o lucro estiver na sua mão.</li>
      </ul>
      <a
        href={LINK_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6"
        style={{ ...meta, background: ACCENT, color: "#fff", fontWeight: 600, fontSize: 14, padding: "14px 24px", letterSpacing: "0.04em" }}
      >
        {CTA_LABEL}
      </a>
    </aside>
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
        Em um cenário onde o mercado financeiro é inundado por promessas de lucros fáceis e algoritmos automáticos que frequentemente falham, o nome de Gabriel Castelli tem se destacado por uma abordagem diametralmente oposta. O estrategista, que afirma ter sido banido de grandes corretoras como IQ Option e Quotex por "sangrar o caixa" dessas instituições, agora propõe um modelo de parceria onde o risco financeiro recai sobre ele.
      </P>
      <P>
        "Eu cansei de ver pessoas perdendo tudo para robôs e cursos gravados em 2022. O mercado mudou", explica Castelli. "Meu método não é sobre sorte, é sobre explorar ineficiências na blindagem dos algoritmos dessas gigantes."
      </P>

      <H2>Transação sem risco antecipado</H2>
      <P>
        O grande diferencial do modelo Castelli é a inversão do fluxo de pagamento. Ao contrário de gurus que cobram taxas de entrada ou mensalidades, Gabriel propõe uma transação onde o parceiro cria sua própria conta, faz um depósito controlado de R$ 200 e ele executa a operação.
      </P>
      <P>
        O objetivo é claro: dobrar o valor em 24 horas. "Eu só recebo minha parte depois que o parceiro vê o dinheiro lá, pronto para o saque. Se o impensável acontecer e a operação falhar, o acordo é claro: eu te envio o PIX dos 200 reais de volta", afirma o estrategista.
      </P>

      <PullQuote />

      <H2>A guerra contra os algoritmos</H2>
      <P>
        Castelli descreve sua atuação como uma "regra de guerra". Ele estuda as manipulações de preço e mapeia os pontos de ruptura onde as corretoras são mais vulneráveis. Segundo ele, é essa eficácia cirúrgica que causou seus múltiplos banimentos. "Elas me expulsam porque eu ganho. Elas não querem traders consistentes, querem vítimas."
      </P>
      
      <P>
        Atualmente, Castelli limita o número de parceiros para manter a eficácia da estratégia e evitar detecções em massa pelos algoritmos. O contato é feito exclusivamente via WhatsApp, onde ele explica o passo a passo da blindagem de conta e execução das entradas.
      </P>

      <HowItWorksBox />

      <H2>O que dizem os especialistas</H2>
      <P>
        Analistas de mercado sugerem cautela, mas admitem que modelos baseados estritamente em performance (success fee) são os que melhor alinham os interesses de quem opera e de quem investe. Para Castelli, o modelo se autojustifica: "A reputação não importa. O que importa é o número na conta amanhã de manhã."
      </P>
    </article>
  );
}

function LPNewsW() {
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

      <FooterDisclosure />
    </main>
  );
}
