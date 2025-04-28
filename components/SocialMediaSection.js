'use client';

import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

export default function SocialMediaSection() {
  return (
    <div className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">ما را در شبکه‌های اجتماعی دنبال کنید</h2>
        <p className="text-lg opacity-90 mb-8">جدیدترین اخبار، تخفیف‌ها و جوایز را از دست ندهید!</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="bg-white text-indigo-600 p-4 rounded-full hover:bg-gray-100 transition">
            <Instagram size={28} />
          </a>
          <a href="#" className="bg-white text-indigo-600 p-4 rounded-full hover:bg-gray-100 transition">
            <Youtube size={28} />
          </a>
          <a href="#" className="bg-white text-indigo-600 p-4 rounded-full hover:bg-gray-100 transition">
            <Twitter size={28} />
          </a>
          <a href="#" className="bg-white text-indigo-600 p-4 rounded-full hover:bg-gray-100 transition">
            <Facebook size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
