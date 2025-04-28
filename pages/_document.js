import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          <link
            href="https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font@v5.0.1/dist/font-face.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body className="font-shabnam">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
