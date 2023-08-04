import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Health App</title>
        </Head>
        <div className="vh-fix">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
