'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ArticlesSlider() {
  const articles = [
    { title: "بهترین روش‌های خرید جم فری فایر", image: "/images/article1.jpg" },
    { title: "آپدیت‌های جدید کالاف موبایل", image: "/images/article2.jpg" },
    { title: "چطور در پابجی موبایل سریع پیشرفت کنیم", image: "/images/article3.jpg" },
    { title: "آموزش نکات حرفه‌ای موبایل لجند", image: "/images/article4.jpg" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-10 text-center">
          جدیدترین مقالات دنیای گیمینگ
        </h2>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    مقاله‌ای تخصصی برای گیمرهای حرفه‌ای
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
