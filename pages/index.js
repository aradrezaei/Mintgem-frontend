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
  );
}
