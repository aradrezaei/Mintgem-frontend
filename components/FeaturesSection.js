'use client';

import { FaRocket, FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa';

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14">چرا مینت جم؟</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition text-center">
            <FaRocket className="text-5xl text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">سرعت بالا</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">خرید سریع و بدون معطلی.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition text-center">
            <FaShieldAlt className="text-5xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">امنیت فوق‌العاده</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">محافظت از اطلاعات و پرداخت‌ها.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition text-center">
            <FaTags className="text-5xl text-accent mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">تخفیف‌های ویژه</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">تخفیف برای کاربران وفادار.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition text-center">
            <FaHeadset className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">پشتیبانی حرفه‌ای</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">همیشه در کنار شما.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
