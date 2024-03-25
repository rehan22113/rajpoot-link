import React,{useState,useEffect} from 'react'
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import { useGetCategoryQuery } from '../../Redux/Api/CategoryApi'
import { useGetIndustryQuery } from '../../Redux/Api/IndustryApi'
import { useGetPrincipalQuery } from '../../Redux/Api/PrincipalApi'

const MobileNavbar = ({event}) => {
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

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
return (
  <header className='md:hidden block text-white bg-[#090019]'>
    <div className="flex items-center justify-between px-8 py-8 sticky top-0 z-40">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
      <Link to="/" className='flex title-font font-extrabold maintext items-center text-white text-3xl md:mb-0'>
      <img src='/logo_rajpoot.png' className='object-contain w-auto h-20' alt='logo' />

      </Link>
        <div className="md:hidden text-white">
          <button onClick={toggleDrawer} className="flex items-center px-3 py-2 rounded border-black hover:text-black text-black hover:border-red-600">
            <svg className="fill-current h-6 w-6 text-white" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </div>
      
    </div>

    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='!h-full w-full !bg-[white] overflow-hidden'
  >
  <div className="z-40 p-4 h-screen bg-[#090019] fixed overflow-y-auto w-full text-white">
    <button onClick={toggleDrawer} type="button" className="text-white bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white">
      <svg aria-hidden="true" className="w-15 h-5 fill-current " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      <span className="sr-only">Close menu</span>
    </button>
    <div className="py-2 gap-10 overflow-y-auto flex-col flex justify-start items-center h-full">

      <ul >
      <div className='flex justify-center py-10'>
      <Link to="/" className='flex title-font font-extrabold maintext items-center text-white text-3xl md:mb-0'>
      <img src='/logo_rajpoot.png' className='object-contain w-auto h-20' alt='logo' />

      </Link>
      </div>
      <nav className="space-y-6 font-bold text-xl flex flex-col justify-center items-start">
     
     
      {/* <Link to="/#milestone" className="mr-5 hover:text-gray-200 hover:scale-105 transition-all">Milestone</Link> */}
      <Link to="/#" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
      <div className="mr-1 hover:text-gray-900 cursor-pointer">
      <DropDownMenu name={"Principal"} data={principal}/> </div>
      <div className="mr-1 hover:text-gray-900 cursor-pointer"><DropDownMenu name={"Category"} data={filterCategory}/></div>
      <div className="mr-1 hover:text-gray-900 cursor-pointer"><DropDownMenu name={"Industry"} data={industry}/></div>
      <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
     
    </nav>
        
    <Link to="/contact" className="inline-flex items-center text-white hover:text-black bg-[#1976d2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact us
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
      </ul>
    </div>
     
  </div>
  </Drawer>
  </header>
  )
}

export default MobileNavbar