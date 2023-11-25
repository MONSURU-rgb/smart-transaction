import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider, useTheme } from "next-themes";

export default function Document() {
  const { resolvedTheme } = useTheme();
  return (
    <Html lang="nl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="bg-cultured dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
