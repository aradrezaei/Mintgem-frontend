'use client';

import Head from 'next/head'; 

import { Mail, MapPin, Phone } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <>
      {/* Meta tags and SEO */}
      <Head>
        <title>تماس با ما | MintGem</title>
        <meta name="description" content="در صورت داشتن سوال، پیشنهاد یا مشکل، با پشتیبانی مینت جم تماس بگیرید. پاسخ‌گویی سریع و پشتیبانی ۷ روز هفته!" />
        <meta name="keywords" content="تماس با مینت جم, پشتیبانی جم بازی, ارتباط با فروشگاه جم, mintgem support" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Arad Rezaee" />

        <meta property="og:title" content="تماس با مینت جم | پشتیبانی سریع و حرفه‌ای" />
        <meta property="og:description" content="با تیم پشتیبانی ما تماس بگیرید و بهترین خدمات را دریافت کنید." />
        <meta property="og:url" content="https://mintgem.ir/contact-us" />
        {/* <meta property="og:image" content="https://mintgem.ir/cover.png" /> */}



        <link rel="canonical" href="https://mintgem.ir/contact-us" />
      </Head>

      {/* Page content */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        <section className="py-16 mt-16 sm:mt-16 text-center px-4">
          <h1 className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">تماس با مینت جم</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            پشتیبانی هفت روز هفته، پاسخ‌گویی سریع و دوستانه
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            <a
              href="https://t.me/mint_gem"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
              aria-label="تماس در تلگرام"
            >
              <FaTelegramPlane size={28} />
            </a>

          </div>



          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">فرم ارسال پیام</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="نام شما"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
              <input
                type="email"
                placeholder="ایمیل شما"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
              <textarea
                rows="4"
                placeholder="پیام شما..."
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </section>

      </div>
    </>
  );
}
