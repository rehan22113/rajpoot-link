import React, { useState,useEffect,Fragment } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
// import { useGetCategoryQuery } from '../Redux/Api/CategoryApi'
import BoxProduct from '../Components/ShopProduct/BoxProduct'
import { useGetPostByCategoryAndIndustryQuery } from '../Redux/Api/PostApi'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import Loading from '../Components/Loading'

const IndustryAndCategory = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [loading,setLoading] = useState(true)
  const iId = searchParams.get('iId');
  const cId = searchParams.get('cId');
  const {data:category,isFetching} = useGetPostByCategoryAndIndustryQuery({iId,cId})
  const [posts,setPosts] = useState([])


  useEffect(()=>{
    category?setPosts(category.data):console.log("fetching filter category")
    setLoading(false)
 },[isFetching,category])
  return (
    
    <div className='bg-white'>
    {loading && <Loading/>}
    <Navbar/>
    <section aria-labelledby="products-heading" className="pt-6 px-10 pb-24">
    <div className="z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-skin-primary"> {posts[0]?`Products By ${posts[0].category[0].name}`:"No Post has Found with this Category"} </h1>
            </div>

            <div className="">
             

              {/* Product grid */}
              <div className="">
                {/* Replace with your content */}
                <div className={`grid gap-2 mt-6 grid-cols-2 xl:grid-cols-5 md:grid-cols-1'}`}>

                {posts?.map((item)=>(
                  <Fragment key={item._id}>
                    <BoxProduct item={item}/>
                  </Fragment>
                ))}
          
                </div>
               
              </div>
            </div>
          </section>
    <Footer/>
    </div>
  )
}

export default IndustryAndCategory