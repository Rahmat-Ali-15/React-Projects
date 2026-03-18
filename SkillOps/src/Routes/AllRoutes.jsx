import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { OurCourse } from '../Pages/OurCourse'
import { Placement } from '../Pages/Placement'
import { PageNotFound } from '../Pages/PageNotFound'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/SignUp'
// import { Signup } from '../Pages/Signup'
// import { Signup } from '../Pages/Signup'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<OurCourse />} />
        <Route path="/placement" element={<Placement />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}