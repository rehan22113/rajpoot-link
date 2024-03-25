import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { updatefilter } from '../../Redux/slice/productSlice'

export default function DropDownMenu({name,data}) { 
const history = useNavigate()
  const dispatch = useDispatch()
  let productFilter = {
    category: [],
    industry:[],
    principal:[]
  }

  const HandleCatFilter =(item)=>{
    let nname= name.toLowerCase();
    productFilter={...productFilter,[nname]:[...productFilter[nname],item]}
    dispatch(updatefilter(productFilter))
    // history("/shop")
  }
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {name}
            <svg className="-mr-1 h-5 w-5 hover:text-[#155984]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>
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
          <Menu.Items className="absolute z-20 -right-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
            {data?.data?.map((item)=>(

              <Menu.Item key={item._id}>
                {({ active }) => (
               <Link onClick={()=>{HandleCatFilter(item.name)}} to={`/${name.toLowerCase()}?id=${item._id}&name=${item.name}`} className={`${active ? 'bg-[#155984] text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   {item.name}
                  </Link>
                )}
              </Menu.Item>

              ))}
              
            </div>
           
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

