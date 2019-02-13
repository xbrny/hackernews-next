import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="manifest" href="/static/manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="HN" />
          <meta name="apple-mobile-web-app-title" content="HN" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="A hacker news clone (simple version) using nextjs for learning purpose"
          />

          <link
            rel="icon"
            type="image/jpeg"
            sizes="512x512"
            href="/static/logo/logo-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/jpeg"
            sizes="512x512"
            href="/static/logo/logo-512x512.png"
          />
          <link
            rel="icon"
            type="image/jpeg"
            sizes="192x192"
            href="/static/logo/logo-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/jpeg"
            sizes="192x192"
            href="/static/logo/logo-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
