import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import { useParams } from 'react-router-dom'
import { useGetSinglePostQuery } from '../Redux/Api/PostApi'
import ImageSlider from '../Components/ImageSlider'

const SingleProduct = () => {
  const {id} = useParams()
  const {data,isFetching} = useGetSinglePostQuery(id)
  const [singlePost,setSinglePost] = useState([])

  useEffect(()=>{
    data?setSinglePost(data.data):console.log("fetching single post")
  },[isFetching])
  
  return (
    <>
    <Navbar/>
   <section className="overflow-hidden">
  <div className="container px-5 py-6 mx-auto">
    <div className="container px-2 mx-auto flex flex-wrap items-start">
    <div className='lg:w-1/3 w-[98%]'>
      <ImageSlider slides={singlePost.fImage}/>
      {/* <img alt="ecommerce" className=" w-full min-h-[500px] object-fit object-center rounded" src={singlePost.fImage[0]}  /> */}
    </div>
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font pb-4 text-gray-500 tracking-widest">Home/{singlePost?.category?.name}/{singlePost?.title}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{singlePost?.title}</h1>
        <div className='w-20 bg-[#d4d4d4] h-1 mb-3' />
       
        {/* <p className="leading-relaxed">
        {singlePost?.content}
        </p> */}
        <article dangerouslySetInnerHTML={{__html:singlePost.content}}>
    </article>
        <div className="flex flex-col mt-6 items-start gap-5 pb-5 border-b-2 border-gray-100 mb-5">
        <p className="leading-relaxed text-md">
        <span className='font-bold'>Categories:</span>
        {singlePost.category?singlePost?.category.map((cc,cIndex)=>
             (cc.name+" , ")):"unCategorized"}
        </p>
        <p className="leading-relaxed text-md">
        <span className='font-bold'>Industry:</span>
        {singlePost.industry?singlePost?.industry.map((cc,cIndex)=>
             (cc.name+" , ")):"industry"}
        </p>
        <p className="leading-relaxed text-md">
        <span className='font-bold'>Principal:</span>
        {" "+singlePost?.principal?.name}
        </p>
        <p className="leading-relaxed text-md">
        <span className='font-bold'>Tags:</span>
        {" "+singlePost?.tags}
        </p>
          {/* <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div> */}
          <div className=''>
          <span className="flex py-2 gap-4">
            <a href={singlePost?.fb} className="text-gray-500 rounded-full bg-gray-300 p-2">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href={singlePost?.tw} className="text-gray-500 rounded-full bg-gray-300 p-2">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href={singlePost?.insta} className="text-gray-500 rounded-full bg-gray-300 p-2">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
          </div>
        </div>
        <div className="flex">
          {/* <span className="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
          <a href={singlePost?.weburl} className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Read More</a>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default SingleProduct