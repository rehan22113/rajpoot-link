import React from 'react'

const Partner = ({principal}) => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
 
  <div className="container px-6 py-16 mx-auto text-center">
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Principals</h1>
      {/* <p className="mt-6 text-gray-500 dark:text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
      </p> */}
      
    </div>
    <div className="max-w-screen-xl flex justify-center mx-auto mt-20">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-6 w-full">
      {principal.map((item)=>(
        <div key={item._id} className="flex items-center flex-col justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src={`${item.image}`} className='md:w-52 rounded-xl h-40 object-fit' />
          <h2 className='text-gray-200 py-2'>{item.name}</h2>
        </div>
      ))}
        
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default Partner