import React from 'react'
import { Link } from 'react-router-dom'

const ListProduct = ({item}) => {
  return (
    <div className="flex overflow-hidden bg-white rounded-lg shadow-md">
  <div className="w-1/3 bg-cover" style={{backgroundImage: `url('${item.fImage}')`}} />
  <div className="w-2/3 p-4 md:p-4">
    <p className="mt-2 text-sm text-gray-600 ">{item.category.name}</p>
    <h1 className="text-xl font-bold text-gray-800 ">{item.title}</h1>
   
    <div className="flex justify-between mt-3 item-center">
      {/* <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1> */}
      <Link to={`/product/${item._id}`} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Read More</Link>
    </div>
  </div>
</div>

  )
}

export default ListProduct