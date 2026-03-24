import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import Addproudct from '../UComponents/Addproduct'
import Products from '../UComponents/Products'
export default function UserRoute() {
  return (
    <div>
        <TopBar/>
      <Routes>
        <Route path='/UHome' element={<UHome/>}/>
        <Route path='/UAbout' element={<UAbout/>}/>
        <Route path='/' element={<Register/>} />
        <Route path='/Addproduct' element={<Addproudct/>} />
         <Route path='/Products' element={<Products/>} />
      </Routes>
    </div>
  )
}
