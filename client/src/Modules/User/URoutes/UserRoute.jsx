import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import Addproudct from '../UComponents/Addproduct'
export default function UserRoute() {
  return (
    <div>
        <TopBar/>
      <Routes>
        <Route path='/UHome' element={<UHome/>}/>
        <Route path='/UAbout' element={<UAbout/>}/>
        <Route path='/Register' element={<Register/>} />
        <Route path='/' element={<Addproudct/>} />
      </Routes>
    </div>
  )
}
