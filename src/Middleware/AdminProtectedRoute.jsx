import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminProtectedRoute = () => {
  
  return (
    <div>

        <Outlet/>
    </div>
  )
}

export default AdminProtectedRoute