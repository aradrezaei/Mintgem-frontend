'use client';

import { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

export default function UpdateAlert() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // نمایش با تاخیر ۱ ثانیه
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 z-[9999] animate-slideIn">
      <div className="flex items-center gap-4 bg-yellow-400/80 dark:bg-yellow-500/30 backdrop-blur-xl text-gray-800 dark:text-gray-100 px-5 py-3 rounded-2xl shadow-xl border border-yellow-500/30 max-w-xs w-full">
        <Bell className="w-6 h-6 flex-shrink-0" />
        <div className="flex-1 text-sm">
          سایت در حال بروزرسانی است، امکان خرید فعلا وجود ندارد.
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
          aria-label="بستن اعلان"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
