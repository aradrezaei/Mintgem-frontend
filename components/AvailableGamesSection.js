'use client';

import { ArrowRight } from 'lucide-react';

export default function AvailableGamesSection() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">بازی‌های موجود</h2>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition font-semibold">
          مشاهده همه
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="border-b-2 border-primary w-20 mx-auto mt-6"></div>
    </div>
  );
}
