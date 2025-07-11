'use client'; // Enable client-side interactivity

// Essential imports
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import GamesList from '../components/GamesList';
import WhyMintGem from '../components/WhyMintGem';
import FeaturesSection from '../components/FeaturesSection';
import AmazingOffers from '../components/AmazingOffers';
import ArticlesSlider from '../components/ArticlesSlider';
import SocialMediaSection from '../components/SocialMediaSection';
import UpdateAlert from '../components/UpdateAlert';

export default function Home() {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>MintGem | مینت جم </title>
        <meta name="description" content="مینت جم بهترین فروشگاه آنلاین برای خرید انواع جم بازی‌ها با قیمت مناسب و تحویل فوری است. تجربه خرید امن و سریع را با ما داشته باشید." />
        <meta name="keywords" content="فری فایر, کالاف, COD, کلش, کلش آف کلنز, موبایل لجندز, پابجی, خرید سی پی, خرید سی پی کالاف, خرید پول بازی, پرداخت درون برنامه ای, مینت جم, خرید جم بازی, جم فری فایر, جم کلش, خرید جم, فروش جم, فروشگاه بازی" />
        <meta name="author" content="Arad Rezaee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://mintgem.ir/" />
      </Head>

      {/* Page Structure */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Update Alert */}
        <UpdateAlert />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <HeroSlider />
          <GamesList />
          <WhyMintGem />
          <FeaturesSection />
          <AmazingOffers />
          <ArticlesSlider />
          <SocialMediaSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* JSON-LD Schema for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
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
            "description": "مینت جم فروشگاه آنلاین جم بازی‌ها با تحویل فوری و پشتیبانی حرفه‌ای است."
          })
        }}
      />
    </>
  );
}
