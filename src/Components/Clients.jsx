import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Autoplay,Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'



const Clients = ({client}) => {
 
  return (
    <section className="my-8">
    <div className="container mx-auto px-2">
      
      <div className="grid mt-8">
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        // centeredSlides={true}
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
                slidesPerView: 7,
                spaceBetweenSlides: 20
            }
            }}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        {client.map((item)=>(

          <SwiperSlide key={item._id}>

          <div key={item._id} className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 min-w-[120px] max-w-[130px]">
       <img src={`${item.image}`} className=' object-cover' />
       </div>
        </SwiperSlide>
         
        )
        )}
        </Swiper>
      </div>
      </div>
      </section>
  )
}

export default Clients