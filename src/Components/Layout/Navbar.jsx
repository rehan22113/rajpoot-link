import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import { useGetIndustryByLimitQuery, useGetIndustryQuery } from '../../Redux/Api/IndustryApi'
import { useGetPrincipalByLimitQuery, useGetPrincipalQuery } from '../../Redux/Api/PrincipalApi'
import { useGetCategoryByLimitQuery, useGetCategoryQuery } from '../../Redux/Api/CategoryApi'


const Navbar = () => {
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
    <>

<header className="text-white bg-[#155984] body-font">
  <div className="container mx-auto flex flex-wrap px-6 py-2 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="tel://+9251512482021" className="mr-5 hover:text-white cursor-pointer">Call us: (+92) 51 512 4820 - 21</Link>
      {/* <Link to="#" className="mr-5 hover:text-gray-900">News</Link> */}
      <Link to="https://www.facebook.com/profile.php?id=100063885562239&mibextid=ZbWKwL" target='_blank' className="mr-5 hover:text-gray-900 text-white">
      <svg className="fill-current text-white" viewBox="0 0 24 24" fill="none" height="1.2em" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
              </svg>

      </Link>
      <Link to="https://www.linkedin.com/company/rajpoot-links-private-limited/" target='_blank' className="mr-5 hover:text-gray-900 text-white">
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
      <div className="mr-1 hover:text-gray-900 cursor-pointer">
      <DropDownMenu name={"Principal"} data={principal}/> </div>
      <div className="mr-1 hover:text-gray-900 cursor-pointer"><DropDownMenu name={"Category"} data={filterCategory}/></div>
      <div className="mr-1 hover:text-gray-900 cursor-pointer"><DropDownMenu name={"Industry"} data={industry}/></div>
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