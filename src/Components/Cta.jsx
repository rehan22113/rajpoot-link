import React from 'react'

const Cta = () => {
  return (
   <section className=" lg:py-12 lg:flex lg:justify-center bg-white">
  <div className="overflow-hidden bg-gray-800 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl" data-aos="flip-down">
  <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight xl:text-3xl text-white">
            Bring your Business to the <span class="text-[#155984]">next level.</span>
        </h2>

        <p class="max-w-4xl mt-6 text-lg text-center text-white">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
            explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
        </p>

        <div class="flex w-full mt-6 sm:w-auto gap-2">
        <input type="email" id="email" name="email" className="w-[70%] lg:w-2/3 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-[#f9dd6f] text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='example@gmail.com' />

            <a href="#" class="text-sm md:text-sm inline-flex items-center justify-center w-[30%] lg:w-1/3 px-4 py-2 text-black font-bold duration-300 bg-[#155984] rounded-lg hover:bg-[#ffb302] focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Sign Up
            </a>
        </div>
    </div>
  </div>
</section>

  )
}

export default Cta