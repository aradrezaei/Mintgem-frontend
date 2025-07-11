"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { id: 1, title: "مدیریت استرس در زندگی روزمره", summary: "راهکارهایی کاربردی برای کاهش استرس.", date: "۱۴۰۴/۰۱/۰۵" },
  { id: 2, title: "ارتباط موثر با فرزندان", summary: "چگونه ارتباط سالمی با فرزندان برقرار کنیم؟", date: "۱۴۰۴/۰۱/۰۲" },
  { id: 3, title: "مقابله با اضطراب اجتماعی", summary: "روش‌های عملی برای مقابله با اضطراب اجتماعی.", date: "۱۴۰۳/۱۲/۲۷" },
];

const categories = [
  "مشاوره خانواده",
  "مشاوره روانشناسی",
  "روانشناسی بالینی",
  "مشاوره تحصیلی/شغلی",
  "روانسنجی",
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>وبلاگ | مرکز روانشناسی هدف</title>
      </Head>

      <Navbar />

      <main className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-24 px-4 md:px-20">
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* دسته‌بندی‌ها */}
          <aside className="md:w-1/4 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6">دسته‌بندی‌ها</h3>
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 cursor-pointer transition-all"
                >
                  {category}
                </motion.li>
              ))}
            </ul>
          </aside>

          {/* آخرین مقالات */}
          <section className="md:w-3/4">
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-300 mb-10">
              آخرین مقالات
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden group"
                >
                  <div className="relative h-52 bg-gradient-to-r from-green-400 to-green-600 group-hover:from-green-500 group-hover:to-green-700 transition-all">
                    <motion.div
                      className="absolute inset-0 flex justify-center items-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <h2 className="text-2xl font-bold text-white">
                        {post.title}
                      </h2>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-2">
                      {post.summary}
                    </p>
                    <span className="block text-sm text-gray-400 dark:text-gray-500 mt-4">
                      تاریخ انتشار: {post.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
