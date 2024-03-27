import React,{useState,useEffect} from 'react'
import { useGetIndustryQuery } from '../../Redux/Api/IndustryApi'
import { useGetPrincipalQuery } from '../../Redux/Api/PrincipalApi'
import { useGetCategoryQuery } from '../../Redux/Api/CategoryApi'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {data:category,isFetching} = useGetCategoryQuery()
  const {data:industry} = useGetIndustryQuery()
  const {data:principal} = useGetPrincipalQuery()
  const [filterCategory,setFilterCategory] = useState({data:[]})


  const FilterParentCategory=()=>{
    const filteredCategories = category?.data?.filter((item) =>item.parent ===null);
    setFilterCategory({data:filteredCategories})
  }

  useEffect(()=>{
    FilterParentCategory()
  },[category])

  return (
 <footer className="bg-gray-900">
  <div className="container p-6 px-6 mx-auto">
    <div className="lg:flex">
      <div className="w-full -mx-6 lg:w-2/5">
        <div className="px-6">
          <Link to="/#" className='text-center'>
            <img className="w-auto h-32" src="/logo_rajpoot.png" alt={"logo"} />
          </Link>
          <span className="inline-flex text-white py-4">
          <Link to="https://wa.me/+923455534476" target='_blank' className="mx-2 text-white transition-colors duration-300 hover:text-blue-500 ">
          <svg  className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>


      </Link>
          <Link to="https://www.facebook.com/profile.php?id=100063885562239&mibextid=ZbWKwL" target='_blank' className="mx-2 text-white transition-colors duration-300 hover:text-blue-500 " aria-label="Facebook">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
              </svg>
            </Link>
           
            <Link to="https://www.linkedin.com/company/rajpoot-links-private-limited/" target='_blank' className="mx-2 text-white transition-colors duration-300 hover:text-blue-500 ">
      <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-current' height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

      </Link>
          </span>
          
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:flex-1">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className=" uppercase text-white">Categories</h3>
            {filterCategory?.data?.map((item)=>(
            <Link key={item._id} to={`/category?id=${item._id}`} className="block mt-2 text-sm text-gray-400 hover:underline">{item.name}</Link>
            ))}
            
          </div>
          <div>
            <h3 className=" uppercase text-white">Principals</h3>
            {principal?.data?.map((item)=>(
            <Link key={item._id} to={`/principal?id=${item._id}`} className="block mt-2 text-sm text-gray-400 hover:underline">{item.name}</Link>
            ))}
          </div>
          <div>
            <h3 className="uppercase text-white">Industries</h3>
            {industry?.data?.map((item)=>(
            <Link key={item._id} to={`/industry?id=${item._id}`} className="block mt-2 text-sm text-gray-400 hover:underline">{item.name}</Link>
            ))}
          </div>
          <div>
            <h3 className=" uppercase text-white">Contact</h3>
            <span className="block mt-2 text-sm text-gray-400 hover:underline">(+92) 51 512 4820 - 21</span>
            <span className="block mt-2 text-sm text-gray-400 hover:underline"> info@rajpootlinks.com</span>
            <span className="block mt-2 text-sm text-gray-400 hover:underline"> (+92) 345 5534476</span>
          </div>
        </div>
      </div>
    </div>
    <hr className="h-px my-6 border-none bg-gray-700" />
    <div>
      <p className="text-center text-gray-400">© RajpootLink  2024 - All rights reserved</p>
    </div>
  </div>
</footer>

  )
}

export default Footer