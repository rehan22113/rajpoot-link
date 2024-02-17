import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
const Partner = ({principal}) => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
 
  <div className="container px-6 py-16 mx-auto text-center">
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Principals</h1>
      {/* <p className="mt-6 text-gray-500 dark:text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
      </p> */}
      
    </div>
    <div className="container mx-auto px-2">
      <div className="grid mt-8">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
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
        modules={[Navigation]}
        className="mySwiper"
      >
        {principal.map((item)=>(

          <SwiperSlide key={item._id}>
          <div key={item._id} className="flex items-center flex-col justify-center">
          <img src={`${item.image}`} className=' rounded-xl min-w-[190px] max-w-[200px] !h-40 !object-fill' />
          <h2 className='text-gray-200 py-2'>
          <Link to={`/principal?id=${item._id}`}>
          {item.name}
  </Link>
          
          </h2>
        </div>
        </SwiperSlide>
         
        )
        )}
        </Swiper>
      {/* {principal.map((item)=>(
        <div key={item._id} className="flex items-center flex-col justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src={`${item.image}`} className='md:w-52 rounded-xl h-40 object-fit' />
          <h2 className='text-gray-200 py-2'>
          <Link to={`/principal?id=${item._id}`}>
          {item.name}
  </Link>
          
          </h2>
        </div>
      ))} */}
        
      </div>
    </div>
  </div>
</section>

</>
  )
}






export default Partner