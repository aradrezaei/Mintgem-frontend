'use client';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample game data
const games = [
  { name: "Free Fire", image: "https://www.cdnlogo.com/logos/f/51/freefire-1.svg" },
  { name: "Call of Duty Mobile", image: "/Futuristic Soldier in Call of Duty.png" },
  { name: "Mobile Legends", image: "/Mobile Legends_ Hero in Action(1).png" },
  { name: "Fortnite", image: "https://1000logos.net/wp-content/uploads/2021/11/Fortnite-Logo-2017.png" },
  { name: "Clash of Clans", image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Clash_of_Clans_logo.png" }
];

export default function GamesList() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12">محبوب‌ترین بازی‌ها</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {games.map((game, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.03]">
                <div className="aspect-w-16 aspect-h-10 w-full bg-white dark:bg-gray-700">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{game.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
