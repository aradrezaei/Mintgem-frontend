'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSlider() {
  const slides = [
    {
      title: "آغاز تجربه‌ای جدید",
      subtitle: "خرید سریع پول بازی‌های محبوب",
      image: "/images/slide1.jpg"
    },
    {
      title: "فری فایر، کالاف، پابجی",
      subtitle: "همه در یکجا، با بهترین قیمت",
      image: "/images/slide2.jpg"
    },
    {
      title: "امنیت، سرعت، پشتیبانی",
      subtitle: "مینت جم انتخاب اول گیمرها",
      image: "/images/slide3.jpg"
    }
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white backdrop-blur-sm bg-black/40 p-4 rounded-lg">{slide.title}</h2>
              <p className="text-lg md:text-2xl text-gray-200 mt-4 backdrop-blur-sm bg-black/30 px-6 py-2 rounded">{slide.subtitle}</p>
              <button className="mt-8 px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition font-bold">
                شروع خرید
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
