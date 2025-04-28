import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font@v5.0.1/dist/font-face.css" />

      </Head>
      <body className="bg-gray-50 dark:bg-darkbg transition-colors duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
