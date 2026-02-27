import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
export default function AdminRoute() {
    return (
        <div>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<AHome/>} />

            </Routes>
        </div>
    )
}
