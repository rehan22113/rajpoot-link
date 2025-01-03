import React from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
const Partner = ({principal}) => {
  return (
    <>
    <section className="bg-gray-900">
 
  <div className="container px-6 py-16 mx-auto text-center">
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-white lg:text-4xl">Principals</h1>
      {/* <p className="mt-6 text-gray-500 text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
      </p> */}
      
    </div>
    <div className="container mx-auto px-2">
      <div className="grid mt-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
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
                slidesPerView: 6,
                spaceBetweenSlides: 20
            }
            }}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        {principal.map((item)=>(

          <SwiperSlide key={item._id}>
          <div key={item._id} className="flex items-center flex-col justify-center">
          <img src={`${item.image}`} className=' rounded-xl min-w-[190px] max-w-[200px] !h-40 !object-contain' />
          <h2 className='text-gray-200 py-2'>
          <Link to={`/principal?id=${item.url}&name=${item.name}`}>
          {item.name}
  </Link>
          
          </h2>
        </div>
        </SwiperSlide>
         
        )
        )}
        </Swiper>
    
        
      </div>
    </div>
  </div>
</section>

</>
  )
}






export default Partner