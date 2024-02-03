import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import SingleProduct from './Pages/SingleProduct'
import Admin from './Pages/Admin'
import Dashboard from './Pages/Admin/Tabs/Dashboard'
import AllPost from './Pages/Admin/Tabs/AllPost'
import AddNewPost from './Pages/Admin/Tabs/AddNewPost'
import AllPrincipal from './Pages/Admin/Tabs/AllPrincipal'
import AllCategory from './Pages/Admin/Tabs/AllCategory'
import AllIndustry from './Pages/Admin/Tabs/AllIndustry'
import Setting from './Pages/Admin/Tabs/Setting'
import Login from './Pages/Admin/Login'
import AdminProtectedRoute from './Middleware/AdminProtectedRoute'
import PreventAfterLogin from './Middleware/PreventAfterLogin'
import Contact from './Pages/Contact'
import Industry from './Pages/Industry'
import Category from './Pages/Category'
import Principal from './Pages/Principal'
import Messages from './Pages/Admin/Tabs/Messages'
import ScrollToTop from './Components/ScrollToTop'
import About from './Pages/About'

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/product/:id" element={<SingleProduct/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route path='/industry' element={<Industry/>} />
      <Route path='/category/' element={<Category/>} />
      <Route path='/principal' element={<Principal/>} />
      <Route path='/about' element={<About/>} />

    <Route element={<AdminProtectedRoute/>}>
      <Route path='/myadmin-panel' element={<Admin/>}>
        <Route index element={<Dashboard/>} />
        <Route path='allpost' element={<AllPost/>} />
        <Route path='newpost' element={<AddNewPost/>} />
        <Route path='principals' element={<AllPrincipal/>} />
        <Route path='category' element={<AllCategory/>} />
        <Route path='industry' element={<AllIndustry/>} />
        <Route path='messages' element={<Messages/>} />
        <Route path='setting' element={<Setting/>} />
      </Route>
    </Route>
      
      <Route element={<PreventAfterLogin/>}>
       <Route path='/login' element={<Login/>} />
      </Route>
    <Route path='*' element={<>404 page not found</>} />
    </Routes>
    </>
  )
}

export default App