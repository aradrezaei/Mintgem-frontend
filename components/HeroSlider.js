'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// ONLY FOR VERSION 8
SwiperCore.use([Autoplay, Pagination, Navigation]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function HeroSlider() {
  const slides = [
    {
      title: "آغاز تجربه‌ای جدید",
      subtitle: "خرید سریع پول بازی‌های محبوب",
      image: "/slider-1.png",
    },
    {
      title: "بازی های محبوب",
      subtitle: "همه در یکجا، با بهترین قیمت",
      image: "/slider-2.png",
    },
    {
      title: "چنل تلگرامی مینت جم",
      subtitle: "اخبار روزانه، آفرهای ویژه",
      image: "/tel-banner.png",
    },
  ];

  return (
    <section className="mt-24 px-2 md:px-0">
      <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full flex flex-col justify-center items-center text-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl max-w-md mx-auto">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold">{slide.title}</h2>
                  <p className="mt-3 text-gray-100 text-sm sm:text-base md:text-lg">{slide.subtitle}</p>
                  <button className="mt-5 px-6 py-2 text-sm sm:text-base bg-primary text-white font-bold rounded-full hover:bg-secondary transition-all">
                    شروع خرید
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
