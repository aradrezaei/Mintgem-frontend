'use client';

import { ArrowRight } from 'lucide-react';

export default function AvailableGamesSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 md:mb-0">بازی‌های موجود</h2>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
          مشاهده همه
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto mt-6"></div>
    </section>
  );
}
