import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
// import { getImageDimensions} from 'lightning-image';
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
  const [images,setImage] = useState()
  
  const getImageDimensions = (imageUrl)=>{
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      img.src = imageUrl;
    });
}

  useEffect(()=>{
    
    
    (async()=>{
      const imgs= slides?.map(async(item)=>{
       
        const dimension =await getImageDimensions(item)
        let width= dimension.width
        let height= dimension.height
        return await(
          {
            image:item,
            width:width,
            height:height
          }
          )
        })
        setImage(await Promise.all(imgs))
           
     } )();
},[slides])

  useEffect(()=>{
    lightbox.init(
    );
    return () => {
      lightbox.destroy();
    }
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
      {images?.map((item)=>(
        <SwiperSlide 
        >
        <a
        data-pswp-src={item.image}
        data-pswp-width={item.width}
        data-pswp-height={item.height}
        data-pswp-fit="contain" 
        target="_blank"
        className='in-slide cursor-pointer'
        >
          <img src={item.image} className="w-full min-h-[400px] max-h-[400px] !object-contain object-center rounded" />
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
         {images?.map((item)=>(
        <SwiperSlide>
          <img src={item.image} className=" w-full min-h-[100px] max-h-[100px] object-fit object-center rounded"/>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
