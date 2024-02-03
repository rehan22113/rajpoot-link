import React from 'react'
import { Link } from 'react-router-dom'

const BoxProduct = ({item}) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer">
                <Link to={`/product/${item._id}`}>
            <div className="flex items-end justify-end h-52 w-full bg-cover" style={{backgroundImage: `url('${item.fImage}')`}}>
            
            </div>
                </Link>
            <div className="px-2 py-3">
           <div className=" rounded-lg text-center">
  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.category?.name}</h3>
  <Link to={`/product/${item._id}`}>
  <h2 className="text-lg hover:underline text-gray-900 font-medium title-font mb-4">{item.title}</h2>
  </Link>
 
</div>

            </div>
          </div>
  )
}

export default BoxProduct