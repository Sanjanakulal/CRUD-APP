import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import Addproudct from '../UComponents/Addproduct'
import Products from '../UComponents/Products'
import ProductDetails from '../UComponents/ProductDetails'
import Faq from '../UComponents/Faq'
import Login from '../UComponents/Login'

function AppContent(){
  const location = useLocation()
  const hidetopbar = ["/Register"]
  return(
    <div>
      {!hidetopbar.includes(location.pathname) && <TopBar/>}
      <Routes>
        <Route path='/UHome' element={<UHome/>}/>
        <Route path='/UAbout' element={<UAbout/>}/>
        <Route path='/Register' element={<Register/>} />
        <Route path='/Addproduct' element={<Addproudct/>} />
         <Route path='/' element={<Products/>} />
         <Route path='/product/:id' element={<ProductDetails/>} />
         <Route path='/faq' element={<Faq/>} />
         <Route path='/Login' element={<Login/>} />

      </Routes>
    </div>
  )
}
export default function UserRoute() {
  return (
    <div>
     <AppContent/>  
    </div>
  )
}
