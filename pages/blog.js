"use client";

import Head from "next/head";
import { motion } from "framer-motion";


// مقالات مرتبط با گیم و خرید جم
const posts = [
  { id: 1, title: "بهترین روش خرید جم فری فایر با قیمت مناسب", summary: "چگونه جم فری فایر را با قیمت ارزان و تحویل سریع خریداری کنیم؟", date: "۱۴۰۴/۰۴/۲۰" },
  { id: 2, title: "بررسی آپدیت جدید کلش آف کلنز", summary: "ویژگی‌های جدید آپدیت کلش آف کلنز و تاثیر آن بر بازی", date: "۱۴۰۴/۰۴/۱۵" },
  { id: 3, title: "ترفندهای حرفه‌ای در کالاف دیوتی موبایل", summary: "نکات و ترفندهایی برای افزایش مهارت در COD Mobile", date: "۱۴۰۴/۰۴/۱۰" },
];

const categories = [
  "اخبار بازی‌ها",
  "راهنمای خرید جم",
  "آپدیت‌های بازی",
  "ترفندهای بازی",
  "نقد و بررسی بازی‌ها",
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>وبلاگ | مینت جم</title>
        <meta name="description" content="آخرین مقالات آموزشی و خبری مرتبط با بازی‌ها، خرید جم و دنیای گیمینگ در وبلاگ مینت جم." />
      </Head>


      <main className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-24 px-4 md:px-12">
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* دسته‌بندی‌ها */}
          <aside className="md:w-1/4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-primary mb-4">دسته‌بندی‌ها</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent cursor-pointer transition"
                >
                  {category}
                </motion.li>
              ))}
            </ul>
          </aside>

          {/* مقالات */}
          <section className="md:w-3/4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-8 text-center md:text-right">
              آخرین مقالات گیمینگ
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
                >
                  <div className="relative h-40 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <h2 className="text-lg sm:text-xl font-bold text-white text-center px-4">
                      {post.title}
                    </h2>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {post.summary}
                    </p>
                    <span className="block text-xs text-gray-400 dark:text-gray-500 mt-3">
                      تاریخ انتشار: {post.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </section>
      </main>

    </>
  );
}
