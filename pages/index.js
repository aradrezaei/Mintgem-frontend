'use client'; // Enable client-side interactivity

import Head from 'next/head'; // SEO management
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import GamesSlider from '../GamesSlider';
import AvailableGamesSection from '../components/AvailableGamesSection';
import GamesList from '../components/GamesList';
import WhyMintGem from '../components/WhyMintGem';
import FeaturesSection from '../components/FeaturesSection';
import AmazingOffers from '../components/AmazingOffers';
import ArticlesSlider from '../components/ArticlesSlider';
import SocialMediaSection from '../components/SocialMediaSection';

export default function Home() {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title>MintGem | مینت جم </title>
        <meta name="description" content="مینت جم بهترین فروشگاه آنلاین برای خرید انواع جم بازی‌ها با قیمت مناسب و تحویل فوری است. تجربه خرید امن و سریع را با ما داشته باشید." />
        <meta name="keywords" content="فری فایر ,کالاف,COD,کلش,کلش آف کلنز,مبایل لجندز,پابجی,خرید سی پی,خرید سی پی کالاف,خرید پول بازی,پرداخت درون برنامه ای,مینت جم, خرید جم بازی, جم فری فایر, جم کلش, خرید جم, فروش جم, فروشگاه بازی" />
        <meta name="author" content="Arad Rezaee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />



        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical */}
        <link rel="canonical" href="https://mintgem.ir/" />
      </Head>

      {/* Page Structure */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <HeroSlider />
          <GamesSlider />
          <AvailableGamesSection />
          <GamesList />
          <WhyMintGem />
          <FeaturesSection />
          <AmazingOffers />
          <ArticlesSlider />
          <SocialMediaSection />
        </main>
        <Footer />
      </div>

      {/* JSON-LD Schema for Google Rich Results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MintGem",
          "url": "https://mintgem.ir",
          "logo": "https://mintgem.ir/logo.png",
          "sameAs": [
            "https://t.me/mintgem",
            "https://instagram.com/mintgem"
          ],
          "description": "مینت جم فروشگاه آنلاین جم بازی‌ها با تحویل فوری و پشتیبانی حرفه‌ای است.",
        })
      }} />
    </>
  );
}
