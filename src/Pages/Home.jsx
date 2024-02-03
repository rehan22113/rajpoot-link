import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Partner from '../Components/Partner'
import Products from '../Components/FeaturedProducts'
import Footer from '../Components/Layout/Footer'
import Categories from '../Components/Categories'
// import {LoginUser} from '../Redux/slice/LoginSlice'
// import { useGetTestQuery } from '../Redux/Api/MainApi'
import { useGetCategoryByLimitQuery } from '../Redux/Api/CategoryApi'
import { useGetPostByLimitQuery } from '../Redux/Api/PostApi'
import { Link } from 'react-router-dom'
import { useGetPrincipalByLimitQuery } from '../Redux/Api/PrincipalApi'
import { useGetIndustryByLimitQuery } from '../Redux/Api/IndustryApi'
const Home = () => {
  const {data:CategoryByLimit,isFetching} = useGetCategoryByLimitQuery(8)
  const {data:PrincipalByLimit,isFetching:fetchPrincipal} = useGetPrincipalByLimitQuery(6)
  const {data:IndustryByLimit,isFetching:fetchIndustry} = useGetIndustryByLimitQuery(6)
  // const {data,error,isLoading} = useGetTestQuery()
  const {data:LimitedPost,isFetching:fetchPost} = useGetPostByLimitQuery(8)
  const [categoryLimited,setCategoryLimited] = useState([])
  const [limitedPost,setLimitedPost] = useState([])
  const [principalLimited,setPrincipalLimited] = useState([])
  const [industryLimited,setIndustryLimited] = useState([])
  

  useEffect(()=>{
    CategoryByLimit?setCategoryLimited(CategoryByLimit.data):console.log("Fetching Categoires")
    LimitedPost?setLimitedPost(LimitedPost.data):console.log("fetching limited post")
    PrincipalByLimit?setPrincipalLimited(PrincipalByLimit.data):console.log("Fetching Principal")
    IndustryByLimit?setIndustryLimited(IndustryByLimit.data):console.log("Fetching Industry")
  },[isFetching,fetchPost,fetchPrincipal,fetchIndustry])
  return (
    <div>
    <Navbar/>
   <header className="bg-[#162436]">
   <div style={{background:"url('https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto,w_1800/v1706797510/Background_2toneBlue-home')"}} className=' bg-contain bg-center'>

  <div className="container px-6 py-16 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg gap-2 flex flex-col">
          <h1 className="text-3xl font-semibold leading-loose text-gray-100 lg:text-5xl">Quality Partner for <span className="text-[#155984] font-semibold">Quality Deliverables </span></h1>
          <p className="mt-4 text-gray-100">RAJPOOT LINKS PRIVATE LIMITED is working with cement, steel, mining and education & research sector of Pakistan for last 12 years.</p>
          <div className='py-8'>

          <Link to="/shop" className="w-full px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#155984] lg:w-auto hover:bg-[#155984] focus:outline-none focus:bg-[#155984]">Explore Now</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
        {/* <div className='absolute w-1/2 h-full top-0 left-0 bg-[#155984]'></div> */}
        <img className="w-full h-full rounded-lg lg:max-w-xl" src="/hero.jpeg" alt="Catalogue-pana.svg" />
      </div>
    </div>
  </div>
  </div>

</header>

    <Categories category={categoryLimited}/>
    {/* <MainSlider/> */}
    <Products post={limitedPost} />
    <Partner principal={principalLimited}/>
    
    {/* About us */}
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-xl text-lg mb-4 font-medium text-gray-900">RAJPOOT LINKS PRIVATE LIMITED is working with cement, steel, mining and education & research sector of Pakistan for last 12 years.
      </h1>
      <p className="mb-8 leading-relaxed">With a deep understanding of the industrial landscape and a commitment to customer services, we've built a reputation for reliability, expertise, and unwavering dedication to customer satisfaction. As industrial trading & engineering partner, we leverage our extensive network and seasoned team to source the perfect solutions, ensuring your operations run smoothly and efficiently.</p>
      <div className="flex justify-center">
        <Link to="/about" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</Link>
        <Link to="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact us</Link>
      </div>
    </div>
  </div>
</section>
    <section className="bg-white">
 
 <div className="container px-6 py-16 mx-auto text-center">
   <div className="max-w-lg mx-auto">
     <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Our Clients</h1>
     {/* <p className="mt-6 text-gray-500">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
     </p> */}
     
   </div>
   <div className="max-w-screen-xl mx-auto mt-10">
     <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
     {industryLimited.map((item)=>(

       <div key={item._id} className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
       <img src={`${item.image}`} className=' w-20 h-20 object-cover' />
       </div>
     ))}
     </div>
   </div>
 </div>
</section>
    <Footer/>
    </div>
  )
}

export default Home