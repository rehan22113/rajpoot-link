import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import { useGetIndustryByLimitQuery, useGetIndustryQuery } from '../../Redux/Api/IndustryApi'
import { useGetPrincipalByLimitQuery, useGetPrincipalQuery } from '../../Redux/Api/PrincipalApi'
import { useGetCategoryByLimitQuery, useGetCategoryQuery } from '../../Redux/Api/CategoryApi'


const Navbar = () => {
  const {data:category,isFetching} = useGetCategoryByLimitQuery(6)
  const {data:industry} = useGetIndustryByLimitQuery(6)
  const {data:principal} = useGetPrincipalByLimitQuery(6)
  const [filterCategory,setFilterCategory] = useState({data:[]})

  const FilterParentCategory=()=>{
    const filteredCategories = category?.data?.filter((item) =>item.parent ===null);
    setFilterCategory({data:filteredCategories})
  }

  useEffect(()=>{
    FilterParentCategory()
  },[category])
  
  return (
    <>

<header className="text-white bg-[#155984] body-font">
  <div className="container mx-auto flex flex-wrap px-6 py-2 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="#" className="mr-5 hover:text-white cursor-pointer">Call us: (+92) 515124820-21</Link>
      {/* <Link to="#" className="mr-5 hover:text-gray-900">News</Link> */}
      <Link to="#" className="mr-5 hover:text-gray-900 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className='fill-current' height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>

      </Link>
      <Link to="#" className="mr-5 hover:text-gray-900 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className='fill-current' height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

      </Link>
    </nav>
   
  </div>
</header>

   <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-1 px-6 shadow flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
      <img src='/logo_rajpoot.png' className='object-contain w-auto h-24' alt='logo' />
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/#" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
      <Link to="/#" className="mr-1 hover:text-gray-900 cursor-pointer">
      <DropDownMenu name={"Principal"} data={principal}/> </Link>
      <Link to="/#" className="mr-1 hover:text-gray-900 cursor-pointer"><DropDownMenu name={"Category"} data={filterCategory}/></Link>
      <Link to="/#" className="mr-1 hover:text-gray-900 cursor-pointer"><DropDownMenu name={"Industry"} data={industry}/></Link>
      <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
      {/* <Link to="#" className="mr-5 hover:text-gray-900 cursor-pointer"></Link> */}
    </nav>
    <Link to="/contact" className="inline-flex items-center bg-[#155984] border-0 py-2 px-3 focus:outline-none text-white hover:bg-gray-200 text-base mt-4 md:mt-0">Contact us
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</header>
</>

  )
}

export default Navbar