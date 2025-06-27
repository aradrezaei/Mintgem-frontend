'use client';

import Head from 'next/head'; // برای SEO
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRocket, FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa';

export default function About() {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>درباره مینت جم | خرید سریع و امن جم بازی</title>
        <meta name="description" content="مینت جم بهترین سایت خرید پول بازی در ایران با پشتیبانی ۲۴ ساعته، تحویل آنی و قیمت‌های رقابتی است. درباره ما بیشتر بدانید." />
        <meta name="keywords" content="درباره مینت جم, سایت خرید جم, خرید سریع جم بازی, پشتیبانی جم بازی, فروشگاه جم آنلاین, تحویل آنی جم, خرید جم ارزان, امنیت خرید جم, سایت خرید پول بازی, خرید پول بازی برای فری فایر، کالاف دیوتی، کلش اف کلنز، کلش رویال" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Arad Rezaee" />
        <meta property="og:title" content="درباره مینت جم | سریع‌ترین سایت خرید جم بازی" />
        <meta property="og:description" content="مینت جم با خدمات تحویل آنی، قیمت مناسب و پشتیبانی سریع، تجربه‌ای متفاوت از خرید پول بازی ارائه می‌دهد." />
        <meta property="og:url" content="https://mintgem.ir/about" />
        <meta property="og:image" content="https://mintgem.ir/cover.png" />
        <link rel="canonical" href="https://mintgem.ir/about" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        {/* Hero Section */}
        <section className="mt-16 sm:mt-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
              درباره مینت جم
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              سریع‌ترین، امن‌ترین و پیشرفته‌ترین پلتفرم خرید پول بازی در ایران
            </p>
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
            <Image 
              src="/mintgem-target.webp" 
              alt="هدف مینت جم"
              width={400}             // عرض واقعی تصویر (اختیاری، برای بهینه‌سازی)
              height={224}            // ارتفاع واقعی تصویر متناسب با عرض
              className="w-full max-w-md h-56 rounded-2xl shadow-xl object-cover mx-auto"
              loading="lazy"         // لیزی لودینگ (به صورت پیش‌فرض lazy است، اما برای وضوح اضافه شده)
              placeholder="blur"     // ایجاد اثر Blur قبل از لود کامل (اختیاری، اگر static import استفاده شود بهتر عمل می‌کند)
              priority={false}       // برای تصاویر غیر Hero، false بماند
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
    </>
  );
}
