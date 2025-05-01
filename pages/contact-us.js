'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />

      <section className="py-20 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">تماس با مینت جم</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">پشتیبانی ۷ روز هفته | همراه همیشگی شما</p>

        <div className="mt-10 flex justify-center gap-8">
          <a
            href="https://t.me/mintgem"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all"
          >
            تلگرام
          </a>
          <a
            href="https://wa.me/989123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all"
          >
            واتساپ
          </a>
        </div>

        <div className="mt-16 max-w-xl mx-auto space-y-4 text-right">
          <p><strong>ایمیل:</strong> support@mintgem.ir</p>
          <p><strong>تلفن تماس:</strong> ۰۲۱-۹۱۰۱۰۴۱۴</p>
          <p><strong>ساعات پاسخگویی:</strong> هر روز ۸ صبح تا ۱۲ شب</p>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">فرم ارسال انتقادات و پیشنهادات</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold">نام و نام خانوادگی</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">ایمیل</label>
              <input type="email" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">پیام شما</label>
              <textarea rows="5" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
