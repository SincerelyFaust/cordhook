import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "@cordhook/ui";

export default class CordhookDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return <Page />;
  }
}

const Page = () => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Cordhook Web" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#9733ee" />
      <link rel="icon" href="./favicon/favicon.ico" />
      <meta name="msapplication-TileImage" content="./favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#9733ee" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="./site.webmanifest" />
      <meta
        name="keywords"
        content="cordhook, tauri app, webhook, discord, webhooks, react native app, react app, web app, nextjs app, send webhook"
      />
      <meta property="og:image" content="https://i.imgur.com/wmwqCnY.png" />
      <meta property="og:site_name" content="Cordhook Web" />
      <meta name="theme-color" content="#9733ee" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
