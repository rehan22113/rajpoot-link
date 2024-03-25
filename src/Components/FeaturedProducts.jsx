import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './FP.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

export default function FeaturedProducts({post}) {

  const Navigate = useNavigate()
  return (
    <>
    <div className="">
  <main className="my-8">
    <div className="container mx-auto px-6">
    
      <div className="mt-1 py-10">
        <hr className='h-0.5'/>
      <div className=' -mt-6 w-full flex justify-center '>
        <h3 className="text-gray-600 px-10 text-2xl bg-[#eee] inline-block font-medium p-1">Featured Products</h3>
      </div>
        <div className="grid gap-2 mt-6">
    
       
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
            400: {
                slidesPerView: 2,
                spaceBetweenSlides: 1
            },
            999: {
                slidesPerView: 4,
                spaceBetweenSlides: 40
            }
            }}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
      {
        post.map((item)=>(       
        <SwiperSlide key={item._id}>
        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{backgroundImage: `url('${item.fImage[0]}')`}}>
            <button onClick={()=>Navigate(`/product/${item._id}`)} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 text-white fill-current hover:scale-110' height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

              </button>
            </div>
            <div className="px-2 py-3">
           <div className=" rounded-lg text-center">
  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
  {item.category.name}
  </h3>
  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
  <Link to={`/product/${item._id}`}>
  {item.title}
  </Link>

  </h2>
 
</div>

            </div>
          </div>
        </SwiperSlide>
        ))
      }   
      </Swiper>
      </div>
      </div>
      
    </div>
  </main>
</div>
    </>
  );
}
