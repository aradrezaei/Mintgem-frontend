'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function GamesSlider() {
  const games = [
    { name: "Free Fire", image: "https://www.cdnlogo.com/logos/f/51/freefire-1.svg" },
    { name: "Call of Duty Mobile", image: "/https://www.citypng.com/public/uploads/preview/hd-call-of-duty-mobile-codm-game-official-logo-png-7017516947877289uky0ombog.png" },
    { name: "Mobile Legends", image: "/images/mlbb-logo.png" },
    { name: "Clash of Clans", image: "/images/clash-logo.png" },
    { name: "Zepto", image: "/images/zepto-logo.png" },
    { name: "Roblox", image: "/images/roblox-logo.png" },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {games.map((game, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 flex justify-center items-center bg-transparent">
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-20 object-contain transition hover:scale-110 duration-300 drop-shadow-md dark:drop-shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
