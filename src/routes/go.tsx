import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/go")({
  component: DownloadCenter,
});

function DownloadCenter() {
  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white border border-[#d8d3c4] p-8 shadow-sm rounded-lg">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2 text-center">Centro de Downloads</h1>
        <p className="text-[#55554f] text-sm mb-8 text-center">Clique nos botões abaixo para baixar os arquivos HTML das suas LPs.</p>
        
        <div className="space-y-4">
          <button
            onClick={() => handleDownload('pagina-noticia.html')}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0f3b2e] text-white font-semibold rounded-md hover:bg-[#0a2a21] transition-colors shadow-sm group"
          >
            <span>Baixar Página de Notícia</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

          <button
            onClick={() => handleDownload('pagina-acordo.html')}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#9c2310] text-white font-semibold rounded-md hover:bg-[#7a1c0d] transition-colors shadow-sm group"
          >
            <span>Baixar Página do Acordo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        <div className="mt-10 p-4 bg-[#f0ede4] rounded-md border border-[#d8d3c4]">
          <p className="text-xs text-[#55554f] leading-relaxed">
            <strong>Instrução:</strong> Se o download automático não iniciar, a página abrirá em uma nova aba. Lá, basta apertar <code className="bg-white px-1 border rounded">Ctrl + S</code> para salvar.
          </p>
        </div>
      </div>
      
      <a href="/" className="mt-6 text-[#55554f] text-sm hover:underline">Voltar para a Home</a>
    </div>
  );
}
