import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
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
            lang={
              'fr'
            }>
            <Head>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=xQ7PaK5rdG" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=xQ7PaK5rdG" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=xQ7PaK5rdG" />
              <link rel="manifest" href="/site.webmanifest?v=xQ7PaK5rdG" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg?v=xQ7PaK5rdG" color="#c65817" />
              <link rel="shortcut icon" href="/favicon.ico?v=xQ7PaK5rdG" />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />
              {/* enable analytics script only for production */}
              {isProduction && (
                <>
                  <script data-ad-client="ca-pub-1380169426555104" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                  <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                  />
                  <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                    }}
                  />
                </>
              )}
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }
}