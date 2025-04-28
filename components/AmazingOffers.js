'use client';

import { Gift } from 'lucide-react';

export default function AmazingOffers() {
  return (
    <div className="py-20  text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className=" text-pink-600 p-4 rounded-full shadow-lg">
            <Gift size={40} />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4">آفرهای شگفت‌انگیز</h2>
        <p className="text-lg opacity-90 mb-6">
          بهترین تخفیف‌ها و پیشنهادات ویژه را در MintGem تجربه کنید.  
          فرصت را از دست ندهید!
        </p>
        <button className="px-6 py-3  text-pink-600 font-bold rounded-full  transition">
          مشاهده تخفیف‌ها
        </button>
      </div>
    </div>
  );
}
