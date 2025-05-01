'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function GamesSlider() {
  const games = [
    { name: "Free Fire", image: "https://www.cdnlogo.com/logos/f/51/freefire-1.svg" },
    { name: "Call of Duty Mobile", image: "https://www.citypng.com/public/uploads/preview/hd-call-of-duty-mobile-codm-game-official-logo-png-7017516947877289uky0ombog.png" },
    { name: "Mobile Legends", image: "https://upload.wikimedia.org/wikipedia/en/9/91/Mobile_Legends_Bang_Bang_logo.png" },
    { name: "Clash of Clans", image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Clash_of_Clans_logo.png" },
    { name: "Zepto", image: "https://seeklogo.com/images/Z/zepto-logo-E4A76E26A5-seeklogo.com.png" },
    { name: "Roblox", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_Studio_Icon_2022.png" }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {games.map((game, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 flex justify-center items-center">
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-20 w-auto object-contain transition hover:scale-110 duration-300 drop-shadow dark:drop-shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
