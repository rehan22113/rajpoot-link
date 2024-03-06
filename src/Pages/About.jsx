import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import Cta from '../Components/Cta'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <Navbar />
   <section className=" bg-[white]">
  <div className="container px-16 py-16 mx-auto text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-black lg:text-4xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out">Who are we?</h1>
      <p className="mt-6 text-black text-lg" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">RAJPOOT LINKS PRIVATE LIMITED is working with cement, steel, mining and education & research sector of Pakistan for last 12 years. Providing with the equipment, spares and materials they need to thrive.
Cement sector is our largest client with over 300 installations across the sector. </p>

    </div>
    <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-easing="ease-in">
      <img className=" w-full h-60 rounded-xl" src="/about_hero.jpg" />
    </div>
  </div>
</section>

   <section className="">
  <div className="lg:flex container px-6 md:w-[95%] w-[95%] py-16 mx-auto text-left">
    <div className="flex items-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
      <div className="max-w-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out">
        <h2 className="text-3xl font-semibold text-black lg:text-4xl">What do we  <span className="text-[#155984]">offer?</span></h2>
        <p className="mt-4 text-sm text-black lg:text-lg">With a deep understanding of the industrial landscape and a commitment to customer services, we've built a reputation for reliability, expertise, and unwavering dedication to customer satisfaction. As industrial trading & engineering partner, we leverage our extensive network and seasoned team to source the perfect solutions, ensuring your operations run smoothly and efficiently.</p>
<p className="mt-4 text-sm text-black lg:text-lg">
Incorporated in 2011, we started as trading company mostly dealing with general order supplies to the government sector organizations but we quickly shifted our focus on specialized fields. Starting with sampling & sample preparation equipment now we have our collaborations around the globe specializing in the field of Xray equipment, coal testing equipment, chemical testing lab equipment, physical testing equipment, online material analysis, heating, insulations, refractory anchors, refractories, grinding aids, mechanical & electrical drives and gears.
</p>
        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
          <Link href="/contact" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-[#155984] rounded-md hover:bg-gray-700">Contact Now</Link>
        </div>
      </div>
    </div>
    <div className="w-full h-64 lg:w-1/2 lg:h-auto relative z-20">
      <div className="w-full h-full bg-contain" style={{backgroundImage: 'url(/about1.jpg)'}} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">
        <div className="w-full h-full bg-black opacity-25" />
      </div>
    </div>
  </div>
  <svg id="sw-js-blob-svg" className='md:block z-0 absolute hidden w-[24em] top-[50rem] right-[0rem]' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>                            <stop id="stop1" stopColor="rgba(255, 222, 90, 1)" offset="0%" />                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />                      </linearGradient>                  </defs>                <path fill="url(#sw-gradient)" d="M20.5,-23.4C27.9,-18.2,36.2,-13,38.8,-5.7C41.4,1.6,38.4,11,33.4,18.9C28.4,26.9,21.4,33.3,13.9,34.6C6.3,35.8,-1.9,31.9,-10.8,29C-19.7,26.1,-29.2,24.2,-34.5,18.3C-39.8,12.5,-40.8,2.5,-38.4,-6C-36,-14.5,-30,-21.6,-23.1,-26.9C-16.1,-32.3,-8,-35.8,-0.8,-34.9C6.5,-34,13.1,-28.7,20.5,-23.4Z" width="100%" height="100%" transform="translate(50 50)" style={{transition: 'all 0.3s ease 0s'}} strokeWidth={0} />            </svg>
</section>

<section className="bg-gray-900">
  <div className="lg:flex container px-6 md:w-[95%] w-[95%] py-16 mx-auto text-left">
    <div className="lg:-mx-6 lg:flex lg:items-center">
      <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://dummyimage.com/400x300" alt />
      <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
        <p className="text-5xl font-semibold text-blue-500 ">“</p>
        <h1 className="text-2xl font-semibold text-white lg:text-3xl lg:w-96">
        Zafar Farooq
        </h1>
        <h2 className="text-md py-2 font-semibold text-white lg:text-lg lg:w-96">
        Chief Executive Officer
        </h2>
        <p className="max-w-lg mt-2 text-md text-gray-400 ">
        He is a business graduate with masters in project management. With his vision, enthusiasm & dedication he played the key role to transform the company as a reliable trading & services partner for the industry. He took over the charge of the company from his father in 2018. Under his leadership Rajpoot Links is a growing company, expanding the field of expertise & the scale of business.  
        </p>
        
       
      </div>
    </div>
  </div>
</section>

{/* <section className="bg-[white]">
  
  <div className="container md:w-[80%] w-[90%] px-6 py-24 mx-auto ">
    <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-black">Who's behind Rajpoot Link ?</h1>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
    {AboutVariable.team.member.map((item,index)=>{
      return 
      <div className="flex col-span-2 flex-col justify-center items-center p-4 border sm:p-6 rounded-xl border-gray-700" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay='1200' data-aos-easing="ease-out">
        <img className="object-cover w-full rounded-xl aspect-[3/2]" src="https://dummyimage.com/400x400" alt
        data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay='1800' data-aos-easing="ease-out" />
        <h1 className="mt-4 text-xl font-semibold capitalize text-black">Zafar Farooq</h1>
        <p className="mt-2 text-black text-md text-center">Chief Executive Officer</p>
        <div className="flex mt-3 -mx-2">
        <p className="mt-2 text-black text-md capitalize">He is a business graduate with masters in project management. With his vision, enthusiasm & dedication he played the key role to transform the company as a reliable trading & services partner for the industry. He took over the charge of the company from his father in 2018. Under his leadership Rajpoot Links is a growing company, expanding the field of expertise & the scale of business.</p>
        </div>
      </div>
     })}

    </div>
  </div>
  
</section> */}
<Cta />
    <Footer />
    </>
  )
}

export default About