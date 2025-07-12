'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Image from 'next/image';

// Lazy load Swiper
const SwiperCore = dynamic(() =>
  import('swiper/react').then((mod) => mod.Swiper), { ssr: false }
);
const SwiperSlide = dynamic(() =>
  import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false }
);

import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function HeroSlider() {
  const slides = useMemo(() => [
    {
      title: "آغاز تجربه‌ای جدید",
      subtitle: "خرید سریع پول بازی‌های محبوب",
      image: "/slider-1.webp",
      alt: "خرید سریع جم بازی",
    },
    {
      title: "بازی های محبوب",
      subtitle: "همه در یکجا، با بهترین قیمت",
      image: "/slider-2.webp",
      alt: "بازی های محبوب",
    },
    {
      title: "چنل تلگرامی مینت جم",
      subtitle: "اخبار روزانه، آفرهای ویژه",
      image: "/tel-banner.webp",
      alt: "کانال تلگرام مینت جم",
    },
  ], []);

  return (
    <section className="mt-24 px-2 md:px-0">
      <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        <SwiperCore
          spaceBetween={10}
          centeredSlides
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          modules={[Autoplay, Pagination]}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`hero-slide-${index}`}>
              <div
                className="w-full h-full flex flex-col justify-center items-center text-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Preload image for better LCP */}
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  className="hidden"
                  width={1}
                  height={1}
                  priority={index === 0}
                />
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
        </SwiperCore>
      </div>
    </section>
  );
}
