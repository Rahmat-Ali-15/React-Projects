import {Route, Routes} from "react-router-dom"


import { Home } from "../Pages/Home"
import { OurCourse } from "../Pages/OurCourse"
import { Placement } from "../Pages/Placement"
import { About } from "../Pages/About"
import { Contact } from "../Pages/Contact"
import { PgaeNotFound } from './../Pages/PageNotFound';


export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element = {<Home />}></Route>
                <Route path="/ourcourse" element = {<OurCourse />}></Route>
                <Route path="/placement" element = {<Placement />}></Route>
                <Route path="/about" element = {<About />}></Route>
                <Route path="/contact" element = {<Contact />}></Route>
                <Route path="/*" element = {<PgaeNotFound />}></Route>
            </Routes>
        </>
    )
}