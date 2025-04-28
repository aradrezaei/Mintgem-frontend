'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ArticlesSlider() {
  const articles = [
    { title: "بهترین روش‌های خرید جم فری فایر", image: "/images/article1.jpg" },
    { title: "آپدیت‌های جدید کالاف موبایل", image: "/images/article2.jpg" },
    { title: "چطور در پابجی موبایل سریع پیشرفت کنیم", image: "/images/article3.jpg" },
    { title: "آموزش نکات حرفه‌ای موبایل لجند", image: "/images/article4.jpg" }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">جدیدترین مقالات دنیای گیمینگ</h2>
        <Swiper
          spaceBetween={20}
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
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{article.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
