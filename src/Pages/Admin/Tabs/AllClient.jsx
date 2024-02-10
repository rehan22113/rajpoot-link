import React, { useState,Fragment, useEffect } from 'react'
import TopNav from '../../../Components/Admin/TopNav'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { useDeleteClientMutation, useGetClientQuery, usePostClientMutation } from '../../../Redux/Api/ClientApi'

const AllClient = () => {
  const Navigate = useNavigate()
  const {data,isLoading,isFetching,refetch} = useGetClientQuery()
  const [AddNewPost,result] = usePostClientMutation()
  const [deleteCat] = useDeleteClientMutation()

  const [isOpen, setIsOpen] = useState(false)
  const [addClient,setAddClient] = useState({
    name:"",
    featured:false,
    image:""
  })
  const [client,setClient] = useState([])
  const deleteClient=(id)=>{
    deleteCat(id)
    refetch()

  }
  useEffect(()=>{
    data?setClient(data.data):console.log("fetching",isFetching)
  },[isFetching,isLoading])

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  const SubmitModal=async()=>{
    try{
      let ind = new FormData()
      if(addClient.name && addClient.image){
        ind.append("name",addClient.name)
        ind.append("fImage",addClient.image)
        ind.append("featured",addClient.featured)
        AddNewPost(ind)
        // console.log("Data send",result)
        // await refetch()
        setAddClient({name:"",fImage:"",featured:false})
        setIsOpen(false)
      }else{
        alert("Some Fields are empty")
      }
    }catch(err){
      console.log("Got error in submit indsutry",err)
    }
  }
  return (
    <>
    <TopNav/>
    <section className="container px-2 mx-auto py-2">
  <div className="sm:flex sm:items-center sm:justify-between">
    <div>
      <div className="flex items-center gap-x-3">
        <h2 className="text-xl text-gray-800 font-bold">All Client</h2>
        {/* <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 vendors</span> */}
      </div>
      {/* <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p> */}
    </div>
    <div className="flex items-center mt-4 gap-x-3">
      
      <button onClick={openModal} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200  rounded-lg shrink-0 sm:w-auto gap-x-2  hover:bg-blue-500 bg-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Add New Client</span>
      </button>
    </div>
  </div>
  <div className="mt-6 md:flex md:items-center md:justify-between">
   
    <div className="relative flex items-center mt-4 md:mt-0">
      <span className="absolute">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </span>
      <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
  </div>
  <div className="flex flex-col mt-6">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className=" bg-gray-800">
              <tr>
                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-400">
                  <button className="flex items-center gap-x-3 focus:outline-none">
                    <span>Name</span>
                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                      <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                      <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                    </svg>
                  </button>
                </th>
                {/* <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  Parent
                </th> */}
                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400">
                  Thumbnail
                </th>
                
                <th scope="col" className="relative py-3.5 px-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-900">
              {client?.map((item)=>(

              <tr key={item._id}> 
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <div>
                    <h2 className="font-medium text-white ">{item.name}</h2>
                   
                  </div>
                </td>
               
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <img src={item.image} className='w-16 h-16' 
                    />
                  </div>
                </td>
                
                <td className="px-4 py-4 text-sm whitespace-nowrap">

<Menu as="div" className="relative inline-block text-left">
<div>
<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
<button className="px-1 py-1 transition-colors duration-200 rounded-lg text-gray-300 hover:bg-gray-100">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
  </button>
</Menu.Button>
</div>
<Transition
as={Fragment}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>
<Menu.Items className="absolute z-50 right-10 -top-16 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
<div className="px-1 py-1 ">
<Menu.Item>
{({ active }) => (
  <button
    className={`${
      active ? 'bg-violet-500 text-white' : 'text-gray-900'
    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
  >
   
    Edit
  </button>
)}
</Menu.Item>
<Menu.Item>
{({ active }) => (
  <Link
  target='_blank'
  to={`/client?id=${item._id}`}
    className={`${
      active ? 'bg-violet-500 text-white' : 'text-gray-900'
    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
  >
    
    View
  </Link>
)}
</Menu.Item>
</div>
<div className="px-1 py-1">
<Menu.Item>
  <button
    onClick={()=>deleteClient(item._id)}
    className={` group flex bg-red-500 w-full items-center rounded-md px-2 py-2 text-sm`}
  >
    
    Delete
  </button>

</Menu.Item>
</div>
</Menu.Items>
</Transition>
</Menu>
 
</td>
              </tr>
            ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
    <div className="text-sm text-gray-400">
      Page <span className="font-medium text-gray-700">1 of 10</span> 
    </div>
    <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
      <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 text-gray-200 border-gray-700 hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <span>
          previous
        </span>
      </a>
      <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm capitalize transition-colors duration-200 border rounded-md sm:w-auto gap-x-2 bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800">
        <span>
          Next
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </a>
    </div>
  </div>
</section>

<Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Client
                  </Dialog.Title>
                  
<form>
  <div className="my-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name of Client</label>
    <input type="text" onChange={(e)=>{setAddClient({...addClient,name:e.target.value})}} id="name" value={addClient.name} className="border text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="eg. steel Client" required />
  </div>
  <div className="my-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Featured</label>
    <select type="text" onChange={(e)=>{setAddClient({...addClient,featured:e.target.value})}} id="name" defaultValue={addClient.featured} className="border text-gray-100 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Women Cloths etc." required >
      <option value={true}>Yes</option>
      <option value={false}>No</option>
    </select>
  </div>
  <div className="mb-6">
    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">Thumbnail Image</label>
    <input onChange={(e)=>{setAddClient({...addClient,image:e.target.files[0]})}} type="file" id="file" className=" border text-gray-100 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-100 focus:ring-blue-500 focus:border-blue-500" required />
  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={SubmitModal}
                    >
                      Create New
                    </button>
                  </div>
</form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
</>
  )
}

export default AllClient