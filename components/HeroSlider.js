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
      image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-5144-61f7-8b1b-80144f1184a1/raw?se=2025-05-05T09%3A11%3A11Z&sp=r&sv=2024-08-04&sr=b&scid=881826ba-6caf-553d-8d9f-95d2cf6bccc9&skoid=cbbaa726-4a2e-4147-932c-56e6e553f073&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-05T05%3A23%3A37Z&ske=2025-05-06T05%3A23%3A37Z&sks=b&skv=2024-08-04&sig=KpDsCvX5zwbF6L%2B/FJNG/1IwD0NYHqwNnwtGFtesvs8%3D"
    }, 
    {
      title: "فری فایر، کالاف، پابجی",
      subtitle: "همه در یکجا، با بهترین قیمت",
      image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-c7b0-61f7-a571-b9db4c478bb8/raw?se=2025-05-05T09%3A13%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=5a34d0a6-7d39-51bd-abe8-5cb72a248c4e&skoid=cbbaa726-4a2e-4147-932c-56e6e553f073&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-04T19%3A44%3A58Z&ske=2025-05-05T19%3A44%3A58Z&sks=b&skv=2024-08-04&sig=9YpfdkyPiFfOq%2BwO4%2BU8VvoEwR/%2BCUtrL1joG4tdcOs%3D"
    },
    {
      title: " چنل تلگرامی مینت جم",
      subtitle: "اخبار روزانه,افر های ویژه",
      image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-a454-61f7-bd0a-7a6cca2e0f05/raw?se=2025-05-05T09%3A15%3A04Z&sp=r&sv=2024-08-04&sr=b&scid=19b888b1-5473-557f-840b-ad4acce2c8af&skoid=cbbaa726-4a2e-4147-932c-56e6e553f073&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-04T21%3A47%3A53Z&ske=2025-05-05T21%3A47%3A53Z&sks=b&skv=2024-08-04&sig=9AhTT3cUW6qVU1uislQjAenQQUVZxsOntPadQmuOffg%3D"
    }
  ];

  return (
<div className="relative w-full max-w-7xl mx-auto mt-24 rounded-3xl overflow-hidden shadow-lg h-[500px] sm:h-[400px] md:h-[500px]">
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
          className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white backdrop-blur-sm bg-black/50 px-6 py-2 rounded-xl">
            {slide.title}
          </h2>
          <p className="text-md md:text-xl text-gray-200 mt-3 backdrop-blur-sm bg-black/30 px-4 py-1 rounded">
            {slide.subtitle}
          </p>
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition font-bold">
            شروع خرید
          </button>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
