import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import clsx from "clsx";

import { fontUnbounded, fontInter, fontFiraCode } from "@/config/fonts";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        className={clsx(
          fontUnbounded.variable,
          fontInter.variable,
          fontFiraCode.variable
        )}
        lang="ru"
      >
        <Head />
        <body
          className={clsx("min-h-screen bg-background font-sans antialiased")}
        >
          <Main />
          <NextScript />
          <script src="https://forms.yandex.ru/_static/embed.js" />
        </body>
      </Html>
    );
  }
}
