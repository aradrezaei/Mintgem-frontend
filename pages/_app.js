import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
        <html lang="fa" dir="rtl">
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font@v5.0.1/dist/font-face.css" />
      </Head>
      <Component {...pageProps} />
      </html>
    </>
  )
}
