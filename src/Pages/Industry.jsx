import React, { useState,useEffect,Fragment } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import BoxProduct from '../Components/shop-product/box-product'
import { useGetPostByIndustryQuery } from '../Redux/Api/PostApi'
import { useLocation, useParams } from 'react-router-dom'

const Industry = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const {data:category,isFetching} = useGetPostByIndustryQuery(id)
  const [posts,setPosts] = useState([])


  useEffect(()=>{
    category?setPosts(category.data):console.log("fetching filter industry")
 },[isFetching])
  return (
    <div className='bg-white'>
    <Navbar/>
    <section aria-labelledby="products-heading" className="pt-6 px-10 pb-24">
    <div className="z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-skin-primary"> {posts[0]?`Products By ${posts[0].category[0].name}`:"No Post has Found with this Industry"} </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
             

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className={`grid gap-2 mt-6 grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-1'}`}>

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

export default Industry