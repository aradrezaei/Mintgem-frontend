'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRocket, FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-darkbg transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1590080877632-8025fc92d7c4" 
          alt="Gaming" 
          className="absolute w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-extrabold mb-4">درباره ما</h1>
          <p className="text-xl font-medium">سریع‌ترین، امن‌ترین و حرفه‌ای‌ترین فروشگاه پول بازی</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-6">ماموریت ما</h2>
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            مینت جم متعهد است تا بهترین تجربه خرید پول بازی را به شما ارائه دهد، با امنیت فوق‌العاده، سرعت بالا، پشتیبانی ۲۴ ساعته و تخفیف‌های فوق ویژه برای کاربران وفادار. ما آینده‌ی بازار گیمینگ را هوشمندتر می‌سازیم.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1600267165477-5a36d057b1a7" 
            alt="Mission" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">چرا مینت جم؟</h2>
          <div className="grid md:grid-cols-4 gap-10">
            <div className="text-center">
              <FaRocket className="text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">سرعت بی‌نظیر</h3>
              <p>تحویل فوق سریع محصولات دیجیتال.</p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">امنیت کامل</h3>
              <p>اطلاعات شما با ما در امنیت کامل است.</p>
            </div>
            <div className="text-center">
              <FaTags className="text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">تخفیف‌های شگفت‌انگیز</h3>
              <p>با خرید بیشتر، تخفیف‌های بیشتری بگیر!</p>
            </div>
            <div className="text-center">
              <FaHeadset className="text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">پشتیبانی حرفه‌ای</h3>
              <p>پشتیبانی قوی از کاربران در تمامی ساعات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">به مینت جم بپیوندید!</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">تجربه‌ی خرید حرفه‌ای و سریع پول بازی‌ها فقط با ما.</p>
        <a href="/" className="inline-block px-6 py-3 bg-accent text-white rounded-full hover:bg-pink-600 transition">
          بازگشت به صفحه اصلی
        </a>
      </section>

      <Footer />
    </div>
  );
}
