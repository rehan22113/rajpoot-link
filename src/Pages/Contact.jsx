import React, { useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import { usePostContactMutation } from '../Redux/Api/ContactApi'
import { Link } from 'react-router-dom'

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
  <iframe width="100%" height="100%" style={{filter: 'grayscale(1) contrast(1.2) opacity(1)'}} frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.1791893828818!2d73.03515497569722!3d33.600654873330434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM2JzAyLjQiTiA3M8KwMDInMTUuOCJF!5e0!3m2!1sen!2s!4v1708188479244!5m2!1sen!2s" />
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
          <span className="inline-flex text-black">
          <Link to="https://www.facebook.com/profile.php?id=100063885562239&mibextid=ZbWKwL" target='_blank' className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 " aria-label="Facebook">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
              </svg>
            </Link>
           
            <Link to="https://www.linkedin.com/company/rajpoot-links-private-limited/" target='_blank' className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 ">
      <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-current' height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

      </Link>
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