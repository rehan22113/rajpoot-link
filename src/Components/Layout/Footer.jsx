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
          <Link to="/#">
            <img className="w-auto h-32" src="/logo_rajpoot.png" alt={"logo"} />
          </Link>
          {/* <p className="max-w-sm mt-2 text-gray-500 text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p> */}
          <div className="flex mt-6 -mx-2">
            
            <Link to="https://www.facebook.com/profile.php?id=100063885562239&mibextid=ZbWKwL" target='_blank' className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400" aria-label="Facebook">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
              </svg>
            </Link>
           
            <Link to="https://www.linkedin.com/company/rajpoot-links-private-limited/" target='_blank' className="mr-5 hover:text-blue-400 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-current' height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

      </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:flex-1">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className=" uppercase text-white">Categories</h3>
            {filterCategory?.data?.map((item)=>(
            <Link key={item._id} to={`/category?id=${item._id}`} className="block mt-2 text-sm text-gray-400 hover:underline">{item.name}</Link>
            ))}
            
          </div>
          <div>
            <h3 className=" uppercasetext-white">Principals</h3>
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