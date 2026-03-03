import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
import ManageUser from '../AComponents/Manageuser'
import ManageCategory from '../AComponents/ManageCategory'
import ManageProduct from '../AComponents/ManageProduct'
import AddCategory from '../AComponents/AddCategory'



export default function AdminRoute() {
    return (
        <div>
            <Sidebar/>
            <Routes>
                <Route path='/AHome' element={<AHome/>} />
                <Route path='/ManageUser' element={<ManageUser/>} />
                 <Route path='/ManageCategory' element={<ManageCategory/>} />
                 <Route path='/ManageProduct' element={<ManageProduct/>} />
                 <Route path="/Admin/AddCategory" element={<AddCategory />} />
                 

            </Routes>
        </div>
    )
}
