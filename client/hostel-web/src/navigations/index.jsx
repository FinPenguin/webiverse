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
import UserLogin from '../views/auth/Login/UserLogin/UserLogin'
import StudentLayout from '../layouts/StudentLayout/StudentLayout'
import StudentMe from '../views/studentScreens/StudentMe/StudentMe'

const Navigations = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<GuestLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div></GuestLayout>}>
                <RouterRoutes>

                    <Route path="/" element={<GuestLayout><Login /></GuestLayout>} />
                    <Route path="/login/student" element={<GuestLayout><UserLogin /></GuestLayout>} />
                    <Route path="/student/me" element={<StudentLayout><StudentMe /></StudentLayout>}/>
                    <Route path="/student/leaves" element={<StudentLayout>Meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</StudentLayout>}/>
                    <Route path="/student/complaints" element={<StudentLayout>sdfs</StudentLayout>}/>
                    <Route path="/student/room" element={<StudentLayout>2342</StudentLayout>}/>
                    <Route path="/student/mess" element={<StudentLayout>Meeeeeeeeeeeeeeeeeeeeeeeesdfsdeeeeeeeeeeeeeeeeeeeeeeeeee</StudentLayout>}/>
                    <Route path="/student/coures" element={<StudentLayout>Meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</StudentLayout>}/>
                    <Route path="/student/event" element={<StudentLayout>fsdf</StudentLayout>}/>



                </RouterRoutes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigations
