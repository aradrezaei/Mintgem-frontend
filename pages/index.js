'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyMintGem from '../components/WhyMintGem';
import FeaturesSection from '../components/FeaturesSection';
import AmazingOffers from '../components/AmazingOffers';
import SocialMediaSection from '../components/SocialMediaSection';

// ⚠️ Swiper کامپوننت‌ها فقط در کلاینت
import dynamic from 'next/dynamic';
const HeroSlider = dynamic(() => import('../components/HeroSlider'), { ssr: false });
const GamesSlider = dynamic(() => import('../components/GamesSlider'), { ssr: false });
const ArticlesSlider = dynamic(() => import('../components/ArticlesSlider'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <GamesSlider />
        <WhyMintGem />
        <FeaturesSection />
        <AmazingOffers />
        <ArticlesSlider />
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
}
