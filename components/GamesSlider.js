'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function GamesSlider() {
  const games = [
    { name: "Free Fire", image: "/freefire-logo.png" },
    { name: "Call of Duty Mobile", image: "https://www.citypng.com/public/uploads/preview/hd-call-of-duty-mobile-codm-game-official-logo-png-7017516947877289uky0ombog.png" },
    { name: "Mobile Legends", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Mobile-legends-logo.svg/2560px-Mobile-legends-logo.svg.png" },
    { name: "Clash of Clans", image: "https://1000logos.net/wp-content/uploads/2021/02/Clash-of-Clans-logo.png" },
    { name: "Zepto", image: "https://cdn.freelogovectors.net/wp-content/uploads/2023/01/zepeto-logo-freelogovectors.net_.png" },
    { name: "Roblox", image: "https://toppng.com/uploads/preview/high-quality-roblox-logo-png-with-white-symbol-design-11678493401b89selal9p.webp" }
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
