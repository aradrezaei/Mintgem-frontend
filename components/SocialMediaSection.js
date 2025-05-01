'use client';

import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

export default function SocialMediaSection() {
  return (
    <section className="pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-800 dark:text-white">
        <h2 className="text-4xl font-extrabold mb-6">ما را در شبکه‌های اجتماعی دنبال کنید</h2>
        <p className="text-lg mb-10 opacity-90">برای اطلاع از اخبار دنیای گیم، جوایز ویژه و تخفیف‌ها، همراه ما باشید.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#" className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Instagram size={30} />
          </a>
          <a href="#" className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Youtube size={30} />
          </a>
          <a href="#" className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Twitter size={30} />
          </a>
          <a href="#" className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Facebook size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
