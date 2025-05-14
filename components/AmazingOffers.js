'use client';

import { Gift } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function AmazingOffers() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="text-pink-600 p-4 rounded-full shadow-lg bg-pink-100 dark:bg-gray-800">
            <Gift size={40} />
          </div>
        </div>
        <h2 className="text-4xl font-extrabold mb-4">آفرهای شگفت‌انگیز</h2>
        <p className="text-lg opacity-80 mb-8">
          بهترین تخفیف‌ها و پیشنهادات ویژه را در 
          <span className='font-simbold '>
             مینت جم
          </span>
            تجربه کنید. فرصت را از دست ندهید!
        </p>

        <Swiper
          modules={[, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="pb-12"
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
                <img
                  src="/offer-sample.png"
                  alt="Offer"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="font-bold text-lg mb-2">بسته ویژه #{index}</h3>
                <p className="text-sm opacity-70 mb-4">تخفیف استثنایی برای شما!</p>
                <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition">
                  خرید این بسته
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
