import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'


const AdminProtectedRoute = () => {
  const {RefreshAuth} = useAuth()

  useEffect(()=>{
     RefreshAuth()
  },[])

  
  return (
    <div>

        <Outlet/>
    </div>
  )
}

export default AdminProtectedRoute