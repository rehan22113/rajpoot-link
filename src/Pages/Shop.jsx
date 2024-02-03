import React,{ useState,useEffect, Fragment } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../Redux/Api/CategoryApi'
import { useGetAllPostQuery, useGetFilteredPostMutation } from '../Redux/Api/PostApi'
import { useSelector,useDispatch } from 'react-redux'
import { useGetIndustryQuery } from '../Redux/Api/IndustryApi'
import { useGetPrincipalQuery } from '../Redux/Api/PrincipalApi'
import BoxProduct from '../Components/shop-product/box-product'
import ListProduct from '../Components/shop-product/list-product'
import { updatefilter } from '../Redux/slice/productSlice'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  // { name: 'Price: Low to High', href: '#', current: false },
  // { name: 'Price: High to Low', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Shop() {

  const {data:category,isFetching} = useGetCategoryQuery()
  const {data:industry} = useGetIndustryQuery()
  const {data:principal} = useGetPrincipalQuery()
  const [fetchFilterPost,result] = useGetFilteredPostMutation()
  // const {data:allPost,isFetching:fetchPost} = useGetAllPostQuery()
  const [filterCategory,setFilterCategory] = useState([]);
  const [filterIndustry,setFilterIndustry] = useState([]);
  const [filterPrincipal,setFilterPrincipal] = useState([]);
  const [productFilter,setProductFilter] = useState({category: [],
    industry:[],
    principal:[]})
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [posts,setPosts] = useState([])
  const [productGridView,setProductGridView] = useState(false)
  // const [cat,setCat] = useState("")
  const dispatch = useDispatch()
  // const Navigate = useNavigate();
   const pFilter = useSelector(state=>state.productfilter)

   //fetch after filter update
   const filterFetching=async()=>{
    let cats =""
    // setCat((prevValue)=>prevValue+=`&category=${item}`)
    pFilter.category.map(item=>(
        cats+=`&category=${item}`
    ))
    // setCat((prevValue)=>prevValue+=`&industry=${item}`)
    pFilter.industry.map(item=>(
      cats+=`&industry=${item}`
    ))  
    // setCat((prevValue)=>prevValue+=`&principal=${item}`)
    pFilter.principal.map(item=>(
      cats+=`&principal=${item}`
    ))
    const postData = await fetchFilterPost(cats)

   postData.data?setPosts(postData.data.data):console.log("fetching with filtered posts")
   }
   useEffect(()=>{
    filterFetching()
   },[productFilter.category,productFilter.industry,productFilter.principal,pFilter])

   useEffect(()=>{
      category?setFilterCategory(category.data.map((item)=>({id:item.id,value:item.name,label:item.name,checked:false}))):console.log("fetching filter category")
      industry?setFilterIndustry(industry.data.map((item)=>({id:item.id,value:item.name,label:item.name,checked:false}))):console.log("fetching filter Industry")
      principal?setFilterPrincipal(principal.data.map((item)=>({id:item.id,value:item.name,label:item.name,checked:false}))):console.log("fetching filter principal")

      
   },[isFetching])
  // Get the values for the 'category' parameter as an array

  useEffect(()=>{
    dispatch(updatefilter(productFilter))
  },[productFilter])
  // Function to update search parameters with selected categories
  const handleCategoryFilter = (e,obj) => {
    obj.checked=e.target.checked
    filterCategory.map((item)=>{
      if(!productFilter.category.includes(item.value) && item.checked){
        setProductFilter({...productFilter,category:[...productFilter.category,item.value]})
      }else if(productFilter.category.includes(item.value) && !item.checked){
        setProductFilter({...productFilter,category:productFilter.category.filter(cat=>{
          return cat!=item.value})})
      }
    })
  };
  const handleIndustryFilter = (e,obj) => {
    obj.checked=e.target.checked
    filterIndustry.map((item)=>{
      if(!productFilter.industry.includes(item.value) && item.checked){
        setProductFilter({...productFilter,industry:[...productFilter.industry,item.value]})
      }else if(productFilter.industry.includes(item.value) && !item.checked){
        setProductFilter({...productFilter,industry:productFilter.industry.filter(cat=>{
          return cat!=item.value})})
      }
    })
    // dispatch(updatefilter()) 
  };
  const handlePrincipalFilter = (e,obj) => {
    obj.checked=e.target.checked
    filterPrincipal.map((item)=>{
      if(!productFilter.principal.includes(item.value) && item.checked){
        setProductFilter({...productFilter,principal:[...productFilter.principal,item.value]})
      }else if(productFilter.principal.includes(item.value) && !item.checked){
        setProductFilter({...productFilter,principal:productFilter.principal.filter(cat=>{
          return cat!=item.value})})
      }
    })
    // dispatch(updatefilter()) 
  };
  return (
    
    <div className="bg-white">
    {/* <MobileNavbar /> */}
    <div className="">
    {/* <button onClick={() => handleCheckboxChange('newCategory')}>
        Add New Category
      </button> */}
      <Navbar />
      </div>
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-10"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-10"
              >
                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-skin-primary">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {/* <ul role="list" className="font-medium text-skin-primary px-2 py-3">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    
                      <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-skin-primary">Category</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                              {filterCategory.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-category-${optionIdx}`}
                                      name={"category"}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 border-gray-300 rounded text-skin-secondary focus:ring-skin-secondaryLight"
                                    />
                                    <label
                                      htmlFor={`filter-category-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                             
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-skin-primary"> Products </h1>

            <div className="flex items-center ">
              <Menu as="div" className="inline-block text-left w-[80%]">
                <div className='container '>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-skin-primary">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-20 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-skin-primary' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button onClick={()=>setProductGridView(!productGridView)} type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {/* <ul role="list" className="text-sm font-medium text-skin-primary space-y-4 pb-6 border-b border-gray-200">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

               
                  <Disclosure as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-skin-primary">Category</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                          {filterCategory.map((option, optionIdx) => (
                              <div key={option._id} className="flex items-center">
                                <input
                                  id={`filter-category-${optionIdx}`}
                                  name="category"
                                  defaultValue={option.value}
                                  type="checkbox"
                                  onChange={(e)=>handleCategoryFilter(e,option)}
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-skin-secondary focus:ring-skin-secondaryLight"
                                />
                                <label
                                  htmlFor={`filter-category-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-skin-primary">Industry</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                          {filterIndustry.map((option, optionIdx) => (
                              <div key={option._id} className="flex items-center">
                                <input
                                  id={`filter-category-${optionIdx}`}
                                  name="category"
                                  defaultValue={option.value}
                                  type="checkbox"
                                  onChange={(e)=>handleIndustryFilter(e,option)}
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-skin-secondary focus:ring-skin-secondaryLight"
                                />
                                <label
                                  htmlFor={`filter-category-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-skin-primary">Principal</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                          {filterPrincipal.map((option, optionIdx) => (
                              <div key={option._id} className="flex items-center">
                                <input
                                  id={`filter-category-${optionIdx}`}
                                  name="category"
                                  defaultValue={option.value}
                                  type="checkbox"
                                  onChange={(e)=>handlePrincipalFilter(e,option)}
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-skin-secondary focus:ring-skin-secondaryLight"
                                />
                                <label
                                  htmlFor={`filter-category-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className={`grid gap-2 mt-6 ${!productGridView?'grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5':'md:grid-cols-1'}`}>

                {posts?.map((item)=>(
                  <Fragment key={item._id}>
              {productGridView?<ListProduct item={item} />:<BoxProduct item={item}/>}
                  </Fragment>
          ))}
          
                </div>
                {/* <div className='flex justify-center items-center py-4'>
                  <button className='border-1 p-2 rounded-md bg-slate-100 text-skin-primary'>Show More</button>
                </div> */}
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
    
  )
}