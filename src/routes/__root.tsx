import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const path = window.location.pathname;
  
  // Se for um arquivo HTML na pasta public, redirecionar
  if (path === "/pagina-noticia.html" || path === "/pagina-acordo.html") {
    window.location.href = path;
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "This application generates various landing pages for lead generation and marketing campaigns." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "This application generates various landing pages for lead generation and marketing campaigns." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "This application generates various landing pages for lead generation and marketing campaigns." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c09e0ee2-f759-4158-970e-2e54dad903c5/id-preview-d2146c7c--bcc0fe75-b030-403f-92a4-2b6245ff995a.lovable.app-1777219385772.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c09e0ee2-f759-4158-970e-2e54dad903c5/id-preview-d2146c7c--bcc0fe75-b030-403f-92a4-2b6245ff995a.lovable.app-1777219385772.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,800;1,9..144,400;1,9..144,600;1,9..144,800&family=JetBrains+Mono:wght@400;700&family=Bebas+Neue&family=Archivo:wght@400;500;600;700;800;900&family=Anton&family=Work+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400;1,600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
