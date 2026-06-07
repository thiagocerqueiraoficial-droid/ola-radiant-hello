import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cartaw")({
  component: Cartaw,
  head: () => ({
    meta: [
      { title: "O Acordo de Castelli · Gabriel Castelli" },
      {
        name: "description",
        content:
          "Eu bati de frente com o sistema. Estudei os algoritmos, mapeei as manipulações de preço e encontrei a falha na blindagem deles.",
      },
      { property: "og:title", content: "O Acordo de Castelli · Gabriel Castelli" },
      {
        property: "og:description",
        content:
          "Não é sorte. É método. Risco calculado e resultado tangível. Veja como dobramos o capital em 24h.",
      },
    ],
  }),
});

const NOME_TRADER = "Gabriel Castelli";
const LINK_WHATSAPP =
  "https://wa.me/5561982972677?text=ENTROU";
const CTA_LABEL = "Enviar \"ENTROU\" para Castelli no WhatsApp ↓";

const PAPER = "#fdfcf9"; // Slightly whiter but still paper-like
const INK = "#111111";
const INK_SOFT = "#4a4a44";
const ACCENT = "#9c2310"; // A deeper, blood-like red
const RULE = "#e2ddd1";
const HIGHLIGHT = "#fff08b";

const serif = { fontFamily: "'Fraunces', Georgia, serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

function Mast() {
  return (
    <header className="w-full" style={{ borderBottom: `1px solid ${INK}` }}>
      <div className="mx-auto max-w-[1100px] px-5 py-3 grid grid-cols-3 items-center">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-left" style={mono}>
          PROTOCOLO EXCLUSIVO
        </span>
        <span className="text-center text-base sm:text-xl" style={{ ...serif, fontWeight: 800, letterSpacing: "-0.01em" }}>
          MÉTODO CASTELLI
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-right" style={mono}>
          CONFIDENCIAL
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[860px] px-6 pt-12 sm:pt-20 pb-10 text-center">
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em]" style={{ ...mono, color: ACCENT }}>
        PARA QUEM CANSOU DE SER PRESA
      </p>
      <h1 className="mt-6 text-[36px] leading-[1.1] sm:text-[54px] md:text-[62px]" style={{ ...serif, fontWeight: 800, letterSpacing: "-0.02em", color: INK }}>
        As promessas de ganho fácil deixaram um{" "}
        <span style={{ fontStyle: "italic", fontWeight: 400 }}>gosto de ferro</span> na sua boca?
      </h1>
      <p className="mt-8 text-lg sm:text-xl max-w-[620px] mx-auto" style={{ ...serif, fontStyle: "italic", color: INK_SOFT, lineHeight: 1.5 }}>
        Você já sentiu o estômago revirar vendo o saldo cair, candle vermelho após candle vermelho, enquanto a corretora fingia instabilidade?
      </p>
    </section>
  );
}

function Body() {
  return (
    <article className="mx-auto px-6 pb-20" style={{ ...serif, color: INK, maxWidth: "720px", fontSize: "19px", lineHeight: 1.7 }}>
      <p className="mt-4">
        Montanhas de promessas vazias. Gráficos que nunca favorecem você. A sensação constante de que o jogo foi armado antes mesmo de você clicar em "comprar".
      </p>

      <p className="mt-8">
        Por que você ainda não desistiu? Por que continua mexendo no celular, procurando uma brecha, um segredo, uma falha na matriz?
      </p>

      <p className="mt-8">
        <span className="float-left mr-3 mt-1" style={{ ...serif, fontSize: "72px", lineHeight: "0.9", color: ACCENT, fontWeight: 800 }}>P</span>
        orque tem um instinto dentro de você que não aceita o "não". Um fogo frio que sussurra que você não nasceu para ser a vítima, mas sim o predador. Você quer roubar o sistema. Você acredita, no fundo da alma, que existe uma forma de virar o tabuleiro e fazer a casa pagar a conta.
      </p>

      <blockquote className="my-12 pl-6" style={{ borderLeft: `4px solid ${ACCENT}`, ...serif, fontStyle: "italic", fontWeight: 600, fontSize: "24px", lineHeight: 1.35, color: INK }}>
        “Eu não apenas acreditei. Eu executei.”
      </blockquote>

      <p className="mt-8">
        Chame de alavancagem segura. Chame de parceria estratégica. Chame do que quiser. Mas eu, <strong style={{ fontWeight: 700 }}>Gabriel Castelli</strong>, desenvolvi um método que já extraiu mais de 5 milhões de reais das entranhas de gigantes como IQ Option, Olymp Trade, Binomo e Quotex. 
      </p>

      <p className="mt-6">
        E não foi porque sou um gênio abençoado pelo mercado. Foi porque parei de jogar conforme as regras deles e comecei a jogar com as regras da guerra. Eu bati de frente com o sistema. Estudei os algoritmos, mapeei as manipulações de preço e encontrei a falha na blindagem deles.
      </p>

      <aside className="my-10 p-6" style={{ border: `1px solid ${RULE}`, background: "rgba(156,35,16,0.03)", ...serif, fontStyle: "italic", fontSize: "18px" }}>
        As corretoras não me baniram porque eu tinha sorte. Elas me expulsaram porque eu estava sangrando o caixa delas de forma cirúrgica, implacável e consistente.
      </aside>

      <p className="mt-8">
        Agora, a dúvida cruel deve estar queimando sua mente: <span style={{ background: HIGHLIGHT }}>"Opa, se esse cara foi banido de tudo, como posso confiar?"</span>
      </p>

      <p className="mt-6">
        A resposta é curta, seca e brutal: Você não confia em mim. <strong style={{ fontWeight: 700 }}>Você confia no resultado.</strong>
      </p>

      <p className="mt-6">
        Eu não quero o seu dinheiro agora. Eu não estou aqui para pedir sua fé ou um pagamento antecipado. Estou aqui para oferecer uma transação onde eu assumo o fardo da prova. Você cria sua conta, você faz o seu depósito, e eu executo. Só depois que você ver o dinheiro dobrado na sua conta, disponível para saque, é que a gente acerta a minha parte. Minha reputação não vale nada para você agora — o que vale é o saldo que você vai enxergar com seus próprios olhos amanhã.
      </p>

      <h2 className="mt-20 mb-6" style={{ ...serif, fontWeight: 800, fontSize: "32px", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
        As Regras do Acordo
      </h2>

      <div className="space-y-10">
        <div className="flex gap-5">
          <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent font-bold" style={mono}>01</div>
          <div>
            <h3 className="font-bold text-xl mb-2">Conta e Depósito (Risco Zero)</h3>
            <p>
              Você cria sua própria conta e deposita exatamente 200 reais. <strong style={{ fontWeight: 700 }}>Você não me envia um centavo.</strong> O dinheiro continua sob seu total controle. Esse valor é o seu "bilhete de entrada" para testar o método com risco calculado.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent font-bold" style={mono}>02</div>
          <div>
            <h3 className="font-bold text-xl mb-2">A Execução (Dobra em 24h)</h3>
            <p>
              Eu entro na sua conta, aplico a estratégia de ruptura e dobro o capital. Em 24 horas, você terá 400 reais lá, prontos para o saque. Dinheiro limpo, disponível na hora.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent font-bold" style={mono}>03</div>
          <div>
            <h3 className="font-bold text-xl mb-2">Acerto de Contas (Só após o Lucro)</h3>
            <p>
              <strong style={{ fontWeight: 700 }}>Você só me paga a minha parte depois que o lucro estiver na sua conta.</strong> Não existe pagamento antecipado, taxa de inscrição ou mensalidade. Eu entrego o resultado primeiro, você vê o dinheiro, e só então fazemos o acerto. É performance pura.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-16">
        Ao contrário do que os gurus de internet ensinam, eu não corto seu lucro na primeira vitória. Eu não sumo depois do primeiro saque. Sou diferente. Sou a anomalia que o mercado não consegue prever.
      </p>

      <div className="relative mt-16 p-7 sm:p-9" style={{ background: "#ffffff", border: `2px solid ${ACCENT}` }}>
        <span className="absolute -top-3 left-5 px-2 font-bold" style={{ ...mono, background: "#ffffff", color: ACCENT, fontSize: "11px", letterSpacing: "0.2em" }}>
          BLINDAGEM TOTAL
        </span>
        <p style={{ ...serif, fontSize: "19px", lineHeight: 1.6 }}>
          Se, por algum motivo cósmico ou falha técnica impossível, a operação der errado, o acordo é claro como vidro: <strong style={{ fontWeight: 700 }}>eu te envio o PIX dos 200 reais de volta.</strong> Parece loucura? Talvez. Mas eu assumo o risco financeiro total. Eu coloco meu capital e minha reputação na linha de frente para que você possa operar seguro.
        </p>
      </div>

      <p className="mt-12">
        O restante da estratégia? Os detalhes de como blindamos sua conta contra os algoritmos de detecção? Isso eu explico apenas no um a um, no sigilo do WhatsApp. Não vou deixar esse ouro exposto para curiosos ou espiões de corretora.
      </p>

      <p className="mt-8 font-bold text-2xl" style={{ color: ACCENT }}>
        A hora de teorizar acabou. Abra sua conta agora. Deposite os 200 reais. Me mande o print do depósito.
      </p>

      <p className="mt-8">
        Se não der certo? Você sabe o que fazer. Simples assim. O risco é meu. Mas se der certo? E vai dar. Você acaba de entrar para um clube restrito. Um seleto grupo de pessoas que parou de ser presa e se tornou caçadora.
      </p>

      <hr className="mt-20 mb-8" style={{ border: 0, borderTop: `1px solid ${RULE}` }} />

      <p style={{ fontSize: "19px" }}>No aguardo do seu sinal,</p>
      <p className="mt-4" style={{ ...serif, fontStyle: "italic", fontSize: "38px", color: ACCENT, lineHeight: 1.1 }}>
        {NOME_TRADER}
      </p>
      <p className="mt-2" style={{ ...mono, fontSize: "11px", letterSpacing: "0.18em", color: INK_SOFT, textTransform: "uppercase" }}>
        Especialista em Ruptura de Algoritmos
      </p>

      <div className="mt-16 space-y-8 opacity-80">
        <div className="relative p-6 border border-rule">
           <span className="absolute -top-3 left-4 px-2 bg-white text-[10px] tracking-widest text-accent uppercase font-bold" style={mono}>P.S.</span>
           <p className="text-base">O relógio está correndo. Você tem exatamente 12 horas para decidir. Depois disso, a oportunidade se dissolve no ar. Eu fecho as vagas.</p>
        </div>
        <div className="relative p-6 border border-rule">
           <span className="absolute -top-3 left-4 px-2 bg-white text-[10px] tracking-widest text-accent uppercase font-bold" style={mono}>P.P.S.</span>
           <p className="text-base">Isso não é pirâmide. Isso não é golpe. Isso é inteligência aplicada bruta, fria e calculista. É a exploração de uma ineficiência do sistema. Mas se você está com medo, ótimo. O medo é o filtro que separa os que ganham milhões dos que só observam e comentam.</p>
        </div>
      </div>
    </article>
  );
}

function Cta() {
  return (
    <section
      className="relative w-full px-6 py-20 sm:py-32 overflow-hidden"
      style={{
        background: "#080808",
        backgroundImage: `radial-gradient(${ACCENT}22 1px, transparent 1px)`,
        backgroundSize: "20px 20px"
      }}
    >
      <div className="mx-auto max-w-[800px] text-center">
        <h3 className="text-3xl sm:text-5xl" style={{ ...serif, fontWeight: 800, color: "#ffffff", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
          Mande <span className="italic text-accent">"ENTROU"</span> agora. 
          <br className="hidden sm:block" /> Ou aceite o jogo deles.
        </h3>
        <p className="mt-8 text-lg sm:text-xl" style={{ ...serif, color: "#a1a1a1", lineHeight: 1.55 }}>
          Se você tem a coragem de olhar para o abismo e pular, responda agora. Senão, boa sorte com suas perdas. Você vai precisar.
        </p>
        
        <div className="mt-12 flex flex-col items-center gap-6">
          <a
            href={LINK_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-10 py-6 overflow-hidden transition-all duration-300"
            style={{
              ...mono,
              background: ACCENT,
              color: "#ffffff",
              fontSize: "14px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <span className="relative z-10">{CTA_LABEL}</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <style>{`
              .group:hover { color: ${ACCENT} !important; }
            `}</style>
          </a>
          
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-zinc-500" style={mono}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Castelli Online Agora
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12 text-center" style={{ ...mono, fontSize: "10px", letterSpacing: "0.15em", color: INK_SOFT, textTransform: "uppercase" }}>
      <p className="max-w-[720px] mx-auto leading-relaxed">
        Aviso de Transparência · Este é um convite para uma parceria estratégica baseada em performance. Não garantimos lucros fixos. O mercado financeiro é soberano. Opere com consciência.
      </p>
      <div className="mt-8 pt-8 border-t border-rule max-w-[200px] mx-auto opacity-50">
        © 2026 Gabriel Castelli
      </div>
    </footer>
  );
}

function Cartaw() {
  return (
    <main
      style={{
        background: PAPER,
        color: INK,
        scrollBehavior: "smooth",
      }}
      className="min-h-screen selection:bg-accent selection:text-white"
    >
      <Mast />
      <Hero />
      <Body />
      <Cta />
      <Footer />
    </main>
  );
}