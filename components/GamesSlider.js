'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function GamesSlider() {
  const games = [
    { name: "Free Fire", image: "/images/freefire.jpg" },
    { name: "Call of Duty Mobile", image: "/images/codm.jpg" },
    { name: "PUBG Mobile", image: "/images/pubgm.jpg" },
    { name: "Mobile Legends", image: "/images/mlbb.jpg" },
    { name: "Fortnite", image: "/images/fortnite.jpg" },
    { name: "Clash of Clans", image: "/images/clash.jpg" }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">پول این بازی‌ها را با بهترین قیمت تهیه کنید</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {games.map((game, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
                <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-center font-bold text-gray-800">{game.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
