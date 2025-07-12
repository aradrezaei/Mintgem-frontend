'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const games = [
  { name: "Free Fire", image: "/freefire-b.webp" },
  { name: "Call of Duty Mobile", image: "/COD-b.webp" },
  { name: "Mobile Legends", image: "/mobilelegends-b.webp" },
  { name: "Fortnite", image: "/fortnite-b.webp" },
  { name: "Clash of Clans", image: "/clash-b.webp" }
];

export default function GamesList() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
          محبوب‌ترین بازی‌ها
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {games.map((game, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden   transition-transform transform hover:scale-[1.04] duration-300">
                <div className="relative w-full h-52 sm:h-60 md:h-64">
                  <Image
                    src={game.image}
                    alt={`آیکون بازی ${game.name} - خرید سریع و ارزان`}
                    fill
                    className="object-cover"
                    priority // Load immediately for first paint
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {game.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}













