'use client';

import { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

export default function UpdateAlert() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500); // تاخیر ۰.۵ ثانیه
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-5 z-[9999] max-w-xs w-full transition-transform duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 bg-yellow-400/80 dark:bg-yellow-500/30 backdrop-blur-md text-gray-900 dark:text-gray-100 px-4 py-3 rounded-xl shadow-lg border border-yellow-400/50">
        <Bell className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm flex-1">
          سایت در حال بروزرسانی است، امکان خرید موقتاً وجود ندارد.
        </p>
        <button onClick={() => setShow(false)} aria-label="بستن">
          <X className="w-5 h-5 hover:text-black dark:hover:text-white transition" />
        </button>
      </div>
    </div>
  );
}
