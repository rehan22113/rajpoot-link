import React, { useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import { usePostContactMutation } from '../Redux/Api/ContactApi'

const Contact = () => {
  const [SubmitContact,result] = usePostContactMutation()
  const [data,setData] = useState({
    name:"",
    email:"",
    message:""
  })
  const HandleData=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const HandleSubmit=async()=>{
    const res =await SubmitContact(data)
    // console.log(res)
    if(res.data.msg == 'Contact Form Submitted'){
      alert("Thanks for contacting us! We Will Contact You Soon")
    }else{
      alert("Something went wrong! Try Again")
    }
  }
  return (
    <>
  <Navbar/>

  <div className='bg-white 2xl:py-2'>
  <div className="my-4 h-96 bg-gray-300">
  <iframe width="100%" height="100%" style={{filter: 'grayscale(1) contrast(1.2) opacity(1)'}} frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" />
</div>
 <section className="bg-white ">
  <div className="container px-6 pt-14 mx-auto relative z-20">
    <div className="text-center ">
      <p className="font-medium text-blue-700">Contact us</p>
      <h1 className="mt-2 text-2xl font-semibold md:text-3xl text-black">We’d love to hear from you</h1>
      <p className="mt-3 text-gray-800">Chat to our friendly team.</p>
    </div>
   
  </div>
</section>

<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={HandleData} value={data.name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={HandleData} value={data.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea onChange={HandleData} value={data.message} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={HandleSubmit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact us</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          Email: <a href='mailto://info@rajpootlinks.com ' className="text-indigo-500"> info@rajpootlinks.com </a>
          Telephone:<a href='tell://+9251512482021' className="text-indigo-500"> (+92) 51 512 4820 - 21 </a>
          <p className="leading-normal my-5">Rajpoot Links (SMC.) Private Limited 
First Floor 279/2,
            <br /> Main Peshawar Road, Opps. Anwar Hospital, Rawalpindi Cantt –Pakistan.
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


    <Footer />
    </div>
    </>
  )
}

export default Contact