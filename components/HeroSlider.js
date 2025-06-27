'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSlider() {
  const slides = [
    {
      title: "آغاز تجربه‌ای جدید",
      subtitle: "خرید سریع پول بازی‌های محبوب",
      image: "/slider-1.webp",
    },
    {
      title: "بازی های محبوب",
      subtitle: "همه در یکجا، با بهترین قیمت",
      image: "/slider-2.webp",
    },
    {
      title: "چنل تلگرامی مینت جم",
      subtitle: "اخبار روزانه، آفرهای ویژه",
      image: "/tel-banner.webp",
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
            <SwiperSlide key={index} className="relative w-full h-full">
              {/* Optimized Image with Next/Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority // to load immediately for first contentful paint
              />
              {/* Overlay and text */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="mt-3 text-gray-100 text-sm sm:text-base md:text-lg drop-shadow-sm">
                  {slide.subtitle}
                </p>
                <button className="mt-5 px-6 py-2 text-sm sm:text-base bg-primary text-white font-bold rounded-full hover:bg-secondary transition-all shadow-md">
                  شروع خرید
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
