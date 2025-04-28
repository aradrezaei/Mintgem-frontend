'use client'; // اضافه کن اولین خط

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import GamesSlider from '../components/GamesSlider';
import AvailableGamesSection from '../components/AvailableGamesSection';
import GamesList from '../components/GamesList';
import WhyMintGem from '../components/WhyMintGem';
import FeaturesSection from '../components/FeaturesSection';
import AmazingOffers from '../components/AmazingOffers';
import ArticlesSlider from '../components/ArticlesSlider';
import SocialMediaSection from '../components/SocialMediaSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-darkbg transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <GamesSlider />
        </section>
        
        <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <AvailableGamesSection />
          <GamesList />
        </section>
        
        <section className="py-20 bg-primary text-white dark:bg-secondary transition-colors duration-300">
          <WhyMintGem />
        </section>
        
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white dark:from-secondary dark:to-primary transition-all duration-500">
          <FeaturesSection />
        </section>
        
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <AmazingOffers />
        </section>
        
        <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <ArticlesSlider />
        </section>
        
        <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white dark:from-primary dark:to-secondary transition-all duration-500">
          <SocialMediaSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
