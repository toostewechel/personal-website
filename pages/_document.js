import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Open+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Vollkorn:wght@600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
        <meta charset="utf-8"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
