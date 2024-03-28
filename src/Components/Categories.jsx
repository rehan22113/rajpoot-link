import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'

const Categories = ({category}) => {
 
  return (
    <section className="my-8">
    <div className="container mx-auto px-2">
      
      <div className="grid mt-8">
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
        Navigation={true}
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
        {category?.data?.map((item)=>{
          
         if(item.parent ==null)  
         { return (
          <SwiperSlide key={item._id}>

        <div key={item._id} className="w-full h-64 rounded-md overflow-hidden bg-contain bg-black/90 bg-center" style={{backgroundImage: `url('${item.image}')`}}>
          <div className="bg-gray-900 bg-opacity-70 flex items-end pb-10 h-full">
            <div className="px-6 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">{item.name}</h2>
              <p className="mt-2 text-gray-200">{category.length} Products</p>
              <Link to={`/category?id=${item._id}&name=${item.name}`} className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Explore Now</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
        </SwiperSlide>
         )}
        })}
        </Swiper>
      </div>
      </div>
      </section>
  )
}

export default Categories