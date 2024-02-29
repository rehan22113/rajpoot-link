import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './MainSlider.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function MainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/1.jpg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/2.jpg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/3.jpg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/4.jpg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/5.jpeg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/6.jpeg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/7.jpg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-full rounded-lg" src="/slider/8.jpg" alt="Catalogue-pana.svg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
