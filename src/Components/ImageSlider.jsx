import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Imageslider.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ImageSlider({slides}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
      {slides?.map((item)=>(
        <SwiperSlide>
          <img src={item} className=" w-full min-h-[400px] object-fit object-center rounded" />
        </SwiperSlide>
      ))}
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4} 
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
      >
         {slides?.map((item)=>(
        <SwiperSlide>
          <img src={item} className=" w-full min-h-[100px] object-fit object-center rounded"/>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
