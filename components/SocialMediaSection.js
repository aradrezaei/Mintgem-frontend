'use client';

import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

export default function SocialMediaSection() {
  return (
    <section className="py-24 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-700">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">ما را در شبکه‌های اجتماعی دنبال کنید</h2>
        <p className="text-lg mb-10 opacity-90">برای اطلاع از اخبار دنیای گیم، جوایز ویژه و تخفیف‌ها، همراه ما باشید.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Instagram size={30} />
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Youtube size={30} />
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Twitter size={30} />
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition duration-300 transform hover:scale-110">
            <Facebook size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
