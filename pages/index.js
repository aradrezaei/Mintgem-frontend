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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <section className="py-20">
          <GamesSlider />
        </section>
        <section className="py-16">
          <AvailableGamesSection />
          <GamesList />
        </section>
        <section className="py-20 bg-gray-100">
          <WhyMintGem />
        </section>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <FeaturesSection />
        </section>
        <section className="py-20">
          <AmazingOffers />
        </section>
        <section className="py-20 bg-gray-900">
          <ArticlesSlider />
        </section>
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
          <SocialMediaSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
