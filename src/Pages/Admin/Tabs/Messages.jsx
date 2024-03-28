import React, { useState,Fragment, useEffect } from 'react'
import TopNav from '../../../Components/Admin/TopNav'
import { useNavigate } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { useGetContactQuery } from '../../../Redux/Api/ContactApi'

const Messages = () => {
  const Navigate = useNavigate()
  const {data,isLoading,isFetching,refetch} = useGetContactQuery()
  const [contactData,setContactData] = useState([])
  const [isOpen, setIsOpen] = useState(false)


  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  useEffect(()=>{
    data?setContactData(data.data):console.log("fetching",isFetching)
  },[isFetching,isLoading])
  
  return (
    <>
    <TopNav/>
    <section className="container px-2 mx-auto py-2">
  <div className="sm:flex sm:items-center sm:justify-between">
    <div>
      <div className="flex items-center gap-x-3">
        <h2 className="text-xl text-gray-800 font-bold">All Messages</h2>
       
      </div>
      
    </div>
    
  </div>
  <div className="mt-6 md:flex md:items-center md:justify-between">
   
    <div className="relative flex items-center mt-4 md:mt-0">
      <span className="absolute">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </span>
      <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5  border rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
  </div>
  <div className="flex flex-col mt-6 dark">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
              <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400">
                  Name
                </th>
                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-400">
                  <button className="flex items-center gap-x-3 focus:outline-none">
                    <span>Email</span>
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
                  Message
                </th>
                
                <th scope="col" className="relative py-3.5 px-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-700 bg-gray-900">
            {contactData && contactData.map((item)=>(
              <tr key={item._id}>
              <td className="px-4 py-4 text-sm whitespace-nowrap text-white">
                {item.name}
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <div>
                    <h2 className="font-medium text-white ">{item.email}</h2>
                    {/* <p className="text-sm font-normal text-gray-600 dark:text-gray-400">catalogapp.io</p> */}
                  </div>
                </td>
                {/* <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                  <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    Customer
                  </div>
                </td> */}
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                <textarea disabled className="text-sm font-normal p-1 text-white">
                {item.message}
                </textarea>
                </td>
                
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <button className="px-1 py-1 transition-colors duration-200 rounded-lg text-gray-300 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                  </button>
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
      <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm  capitalize transition-colors duration-200  border rounded-md sm:w-auto gap-x-2 bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <span>
          previous
        </span>
      </a>
      <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm  capitalize transition-colors duration-200 border rounded-md sm:w-auto gap-x-2 bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800">
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
                    Add New Category
                  </Dialog.Title>
                  
<form>
  <div className="my-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name of Principal</label>
    <input type="text" onChange={(e)=>{setCategory({...category,name:e.target.value})}} id="name" className=" border text-gray-100 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Women Cloths etc." required />
  </div>
  <div className="mb-6">
    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">Thumbnail Image</label>
    <input onChange={(e)=>{setCategory({...category,file:e.target.files[0]})}} type="file" id="file" className=" border text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-100 focus:ring-blue-500 focus:border-blue-500" required />
  </div>
 

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      // onClick={SubmitModal}
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

export default Messages