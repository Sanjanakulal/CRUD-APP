import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
import ManageUser from '../AComponents/Manageuser'
import ManageCategory from '../AComponents/ManageCategory'
import ManageProduct from '../AComponents/ManageProduct'
import AddCategory from '../AComponents/AddCategory'
import ViewUser from '../AComponents/ViewUser'
import ViewProduct from '../AComponents/ViewProduct'
import ViewCategory from '../AComponents/ViewCategory'
import UpdateCategory from '../AComponents/UpdateCategory'



export default function AdminRoute() {
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route path='/AHome' element={<AHome />} />
                <Route path='/ManageUser' element={<ManageUser />} />
                <Route path='/ManageCategory' element={<ManageCategory />} />
                <Route path='/ManageProduct' element={<ManageProduct />} />
                <Route path="/AddCategory" element={<AddCategory />} />
                <Route path="/ViewUser" element={<ViewUser />} />
                <Route path="/ViewProduct" element={<ViewProduct />} />
                <Route path="/ViewCategory" element={<ViewCategory />} />
                <Route path="/UpdateCategory/:rowid" element={<UpdateCategory />} />

            </Routes>
        </div>
    )
}
