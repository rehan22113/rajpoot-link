import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Imageslider.css';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: '.in-slide',
  pswpModule: () => import('photoswipe')
});

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ImageSlider({slides}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(()=>{
lightbox.init();
  },[])

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
        id='my-gallery'
      >
      {slides?.map((item)=>(
        <SwiperSlide 
        >
        <a
        data-pswp-src={item}
        data-pswp-width="2069" 
    data-pswp-height="2069" 
    data-pswp-objectFit="contain"
    target="_blank"
        className='in-slide cursor-pointer'
        >
          <img src={item} className="w-full min-h-[400px] max-h-[400px] !object-contain object-center rounded" />
        </a>
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
          <img src={item} className=" w-full min-h-[100px] max-h-[100px] object-fit object-center rounded"/>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
