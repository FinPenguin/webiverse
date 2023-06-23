// eslint-disable-next-line no-unused-vars
import React, { Suspense } from 'react'
import { Spin } from 'antd'
import {
    BrowserRouter,
    Routes as RouterRoutes,
    Route
} from "react-router-dom"

import GuestLayout from '../layouts/GuestLayout/GuestLayout'
import Login from '../views/auth/Login/Login'

const Navigations = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<GuestLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div></GuestLayout>}>
                <RouterRoutes>

                    <Route path="/login" element={<GuestLayout><Login /></GuestLayout>} />

                </RouterRoutes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigations
