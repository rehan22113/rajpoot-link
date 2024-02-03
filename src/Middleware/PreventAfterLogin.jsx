import React from 'react'
import { Outlet } from 'react-router-dom'

const PreventAfterLogin = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PreventAfterLogin