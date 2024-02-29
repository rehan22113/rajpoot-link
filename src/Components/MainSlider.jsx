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
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function MainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[30rem] !bg-contain bg-center' src="https://lh3.google.com/u/0/d/1sXu7S_UbaNXiO1dQ45CcrTk83UpMjbWi=w2560-h1276-iv1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[30rem] !bg-contain bg-center' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[30rem] !bg-contain bg-center' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[30rem] !bg-contain bg-center' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
