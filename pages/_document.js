import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        {/* Fonts & SEO Base */}
        <link rel="preload" href="/fonts/Shabnam.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="fa" />
        <meta name="distribution" content="global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* PWA & Icons */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6D28D9" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body className="font-shabnam bg-white dark:bg-gray-900 transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
