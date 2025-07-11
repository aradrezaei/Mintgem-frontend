'use client';

import { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

export default function UpdateAlert() {
  const [show, setShow] = useState(true);

  // Animation on mount
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 max-w-md w-[95%] px-4">
      <div className="backdrop-blur-md bg-yellow-200/70 dark:bg-yellow-300/10 border border-yellow-300 dark:border-yellow-400 rounded-xl shadow-md flex items-center justify-between gap-3 p-3 animate-fadeIn slide-down">
        <div className="flex items-center gap-2">
          <Bell size={20} className="text-yellow-800 dark:text-yellow-300" />
          <p className="text-sm text-yellow-900 dark:text-yellow-100">
            سایت در حال بروزرسانی است. امکان خرید موقتاً غیرفعال می‌باشد.
          </p>
        </div>
        <button
          aria-label="بستن اعلان"
          onClick={() => setShow(false)}
          className="text-yellow-800 dark:text-yellow-200 hover:text-yellow-900 transition"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
