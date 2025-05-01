'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <section className="py-16 text-center px-4">
        <h1 className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">تماس با مینت جم</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">پشتیبانی هفت روز هفته، پاسخ‌گویی سریع و دوستانه</p>

        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110">
            <FaTelegramPlane size={28} />
          </a>
          <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110">
            <FaWhatsapp size={28} />
          </a>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex flex-col items-center gap-2">
            <Phone size={26} className="text-indigo-500" />
            <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail size={26} className="text-indigo-500" />
            <p>support@mintgem.ir</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin size={26} className="text-indigo-500" />
            <p>تهران، میدان ولیعصر</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">فرم ارسال پیام</h2>
          <form className="space-y-4">
            <input type="text" placeholder="نام شما" className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600" />
            <input type="email" placeholder="ایمیل شما" className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600" />
            <textarea rows="4" placeholder="پیام شما..." className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"></textarea>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition">ارسال پیام</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
