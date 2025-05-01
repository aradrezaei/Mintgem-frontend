'use client';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-300 to-white text-gray-800 dark:text-gray-300  dark:bg-gradient-to-r dark:from-gray-900 dark:to-black py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
        
        {/* بخش درباره ما */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-primary mb-4">مینت جم</h2>
          <p className="text-sm leading-7">
            مینت جم با هدف ارائه بهترین تجربه خرید پول بازی، با بالاترین سرعت و امنیت طراحی شده است.  
            به ما بپیوندید و حرفه‌ای بازی کنید!
          </p>
        </div>

        {/* بخش لینک‌های مفید */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-primary mb-4">لینک‌های مفید</h3>
          <a href="/" className="hover:text-accent transition">خانه</a>
          <a href="/services" className="hover:text-accent transition">خدمات</a>
          <a href="/blog" className="hover:text-accent transition">وبلاگ</a>
          <a href="/about" className="hover:text-accent transition">درباره ما</a>
          <a href="/contact-us" className="hover:text-accent transition">ارتباط با ما</a>
        </div>

        {/* بخش شبکه‌های اجتماعی */}
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold text-primary mb-4">ما را دنبال کنید</h3>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gray-400 transition"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedin size={24} /></a>
          </div>
        </div>

      </div>

      {/* خط جداکننده */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-900 dark:text-gray-400">
        ساخته شده توسط{' '}
        <a href="https://aradrezaei.github.io" target="_blank" className="text-primary hover:underline">
          آراد رضایی
        </a>{' '}
        | © 2025 تمامی حقوق این وبسایت متعلق به مینت جم میباشد.
      </div>
    </footer>
  );
}
