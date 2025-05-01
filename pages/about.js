'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRocket, FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1618005198919-d3d4b1aeb8b0" 
          alt="Gaming" 
          className="absolute w-full h-full object-cover brightness-[0.4]"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-gray-800 dark:text-white text-center">
          <h1 className="text-6xl font-black mb-4 tracking-tight drop-shadow-lg">درباره مینت جم</h1>
          <p className="text-2xl font-medium opacity-90">سریع‌ترین، امن‌ترین و پیشرفته‌ترین پلتفرم خرید پول بازی در ایران</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-primary mb-6">ماموریت ما</h2>
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            مینت جم با هدف تحول در تجربه خرید آنلاین پول بازی، ایجاد شده است. ما باور داریم که سرعت، امنیت و شفافیت، فاکتورهای کلیدی رضایت کاربران هستند. بنابراین با فراهم‌سازی بستر سریع، پشتیبانی ۲۴ ساعته و قیمت‌های منصفانه، قدمی بزرگ در بازار گیمینگ ایران برداشته‌ایم.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1600267165477-5a36d057b1a7" 
            alt="Mission" 
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">چرا مینت جم؟</h2>
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <FaRocket className="text-5xl mb-4 mx-auto text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">سرعت بی‌نظیر</h3>
              <p className="text-gray-600 dark:text-gray-300">تحویل آنی و بدون معطلی.</p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="text-5xl mb-4 mx-auto text-green-400" />
              <h3 className="text-xl font-semibold mb-2">امنیت کامل</h3>
              <p className="text-gray-600 dark:text-gray-300">اطلاعات کاربران کاملاً رمزنگاری شده و محفوظ است.</p>
            </div>
            <div className="text-center">
              <FaTags className="text-5xl mb-4 mx-auto text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">تخفیف‌های شگفت‌انگیز</h3>
              <p className="text-gray-600 dark:text-gray-300">پیشنهادات جذاب برای کاربران وفادار.</p>
            </div>
            <div className="text-center">
              <FaHeadset className="text-5xl mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">پشتیبانی ۲۴ ساعته</h3>
              <p className="text-gray-600 dark:text-gray-300">در هر لحظه آماده پاسخگویی به شما هستیم.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
