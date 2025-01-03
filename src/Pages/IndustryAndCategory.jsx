import React, { useState,useEffect,Fragment } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
// import { useGetCategoryQuery } from '../Redux/Api/CategoryApi'
import BoxProduct from '../Components/ShopProduct/BoxProduct'
import { useGetPostByCategoryAndIndustryQuery } from '../Redux/Api/PostApi'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import MobileNavbar from '../Components/Layout/MobileNavbar'

const IndustryAndCategory = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [loading,setLoading] = useState(true)
  const iId = searchParams.get('iId');
  const cId = searchParams.get('cId');
  const iName = searchParams.get('iName');
  const cName = searchParams.get('cName');
  const {data:category,isFetching} = useGetPostByCategoryAndIndustryQuery({iId,cId})
  const [posts,setPosts] = useState([])
  const [cat,setCat] = useState([])


  useEffect(()=>{
    if(category){
      category.msg=="post"?setPosts(category.data):category.msg=="category"?setCat(category.data):console.log("fetching filter category")
    }
    setLoading(false)
 },[isFetching,category])
  return (
    
    <div className='bg-white'>
    {loading && <Loading/>}
    <Navbar/>
    <MobileNavbar/>
    <section aria-labelledby="products-heading" className="pt-6 px-10 pb-24">
    <div className="z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
    <h1 className="text-4xl font-extrabold tracking-tight text-skin-primary"> { category?.msg=="post" && posts?.length>0?`Explore ${posts && posts[0]?.category[0]?.name} products`:category?.msg=="category"?` Explore ${cName} Products`:""} </h1>
            </div>

            <div className="">
             

              {/* Product grid */}
              <div className="">
                {/* Replace with your content */}
                <div className={`grid gap-2 mt-6 grid-cols-2 xl:grid-cols-5 md:grid-cols-1'}`}>
                {category?.msg=="post"?(
                posts?.map((item)=>(
                        <Fragment key={item._id}>
                          <BoxProduct item={item}/>
                        </Fragment>
                        
                      ))
                )
                :(
                  cat?.map((item)=>(
                    <Fragment key={item._id}>
                  <div key={item._id} className="w-full h-64 rounded-md overflow-hidden bg-contain bg-black/90 bg-center" style={{backgroundImage: `url('${item.image}')`}}>
          <div className="bg-gray-900 bg-opacity-70 flex items-end pb-10 h-full">
            <div className="px-6 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">{item.name}</h2>
              {/* <p className="mt-2 text-gray-200">{posts.length} Products</p> */}
              <Link to={`/industry/category?iId=${iId}&cId=${item.url}/?iName=${iName}&cName=${item.name}`} className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Explore Now</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
                  </Fragment>
                  ))
                  )}
          
                </div>
               
              </div>
            </div>
          </section>
    <Footer/>
    </div>
  )
}

export default IndustryAndCategory