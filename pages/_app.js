'use client';

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Meta SEO Base */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#6D28D9" />
        <meta name="author" content="Arad Rezaee" />
        <link rel="canonical" href="https://mintgem.ir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Layout */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
