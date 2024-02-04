import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginAminMutation } from '../../Redux/Api/AuthApi'
import useAuth from '../../Hooks/useAuth'

const Login = () => {
  const {LoggedInUser:LoggedIn} = useAuth()
  const [loginUserData,result] = useLoginAminMutation()
  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  })
  const Navigate = useNavigate()
  const HandleData=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  const HandleLogin=async()=>{
if(loginData.email && loginData.password){
  const data =await loginUserData(loginData)
  // console.log("login datas",data.data)
  if(data.data.msg=="Login Successfull"){
    LoggedIn("/myadmin-panel")
    // Navigate()
  }else{
    alert("Wrong Crediential")
  }
  }else{
    alert("Field Empty")
  }
}

  return (
    <div className="w-full flex flex-col h-screen items-center justify-around">
    <div className='w-full max-w-sm mx-auto overflow-hidden mt-20 rounded-lg shadow-md bg-gray-800'>
   

  <div className="px-6 py-4">
    <div className="flex justify-center items-center mx-auto">
      <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt />
    </div>
    <h3 className="mt-3 text-xl font-medium text-center text-gray-200">Welcome To Rajpoot Links</h3>
    {/* <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p> */}
    <form>
      <div className="w-full mt-4">
        <input onChange={HandleData} value={loginData.email} name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
      </div>
      <div className="w-full mt-4">
        <input onChange={HandleData} value={loginData.password} name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
      </div>
      {/* <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>
        <button onClick={HandleLogin} className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Sign In
        </button>
      </div> */}
    </form>
  </div>
  <div className='flex py-4 items-center justify-center'>
  <button onClick={HandleLogin} className="px-16 w-[90%] py-2 focus:outline-none mt-4 text-white bg-blue-600 rounded-lg md:mt-0 md:mx-1 hover:bg-blue-500">
        <div className="flex items-center justify-center -mx-1">
          
          <span className="mx-1 text-sm capitalize">Login as Admin</span>
        </div>
      </button>
  </div>
  <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
    <span className="text-sm text-gray-600 dark:text-gray-200">Forget Password? </span>
    <a href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Click here</a>
  </div>
</div>
<div>
  <Link className='text-gray-400 ' to="/">{"<-"} Back To Home</Link>
</div>
</div>

  )
}

export default Login