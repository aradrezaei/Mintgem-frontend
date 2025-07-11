'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UpdateAlert() {
  const [visible, setVisible] = useState(true);

  const handleNotificationRequest = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification('MintGem', {
          body: 'شما با موفقیت ثبت شدید. به محض آماده شدن سایت به شما اطلاع داده می‌شود.',
          icon: '/logo.png'
        });
      }
    } else {
      alert('مرورگر شما از نوتیفیکیشن پشتیبانی نمی‌کند.');
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed top-0 left-0 w-full z-50"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-b-2xl shadow-xl">
            <div className="text-sm sm:text-base">
              سایت در حال بروزرسانی می‌باشد و امکان خرید از سایت وجود ندارد.
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleNotificationRequest}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                اطلاع‌رسانی هنگام آماده شدن
              </button>
              <button
                onClick={() => setVisible(false)}
                className="p-2 hover:bg-white/20 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
