import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

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
      <meta name="viewport" content="width=device-width" />
      <meta name="apple-mobile-web-app-title" content="Cordhook" />
      <link rel="canonical" href="https://cordhook.vercel.app" />
      <title>Cordhook</title>
      <link rel="icon" href="/assets/logos/logo.webp" />
      <meta
        name="description"
        content="Cordhook is an application for sending webhooks on Discord."
      />
      <meta property="og:url" content="https://cordhook.vercel.app"></meta>
      <meta property="og:title" content="Cordhook" key="title" />
      <meta
        name="keywords"
        content="tauri, tauri app, cordhook, webhook, discord, webhooks"
      />
      <meta
        name="og:description"
        content="Cordhook is an application for sending webhooks on Discord."
      />
      <meta property="og:image" content="https://i.imgur.com/In4T49n.png" />
      <meta property="og:site_name" content="Cordhook" />
      <meta name="theme-color" content="#a855f7"></meta>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
