import {Route, Routes} from "react-router-dom"
import { Home } from "../Pages/Home"
import { Cart } from "../Pages/Cart"
import { Checkout } from "../Pages/Checkout"
import { NotFound } from "../Pages/NotFound"
import { Navbar } from "../Components/Navbar"
import { LoginPage } from "../Pages/LoginPage"
import { PrivateRoute } from "../Components/PrivateRoute"

export const AllRoutes = () => {
    return(
        <>
        <Navbar />
            <Routes>
                <Route path="/" element = {<Home />}></Route>
                <Route path="/cart" element = {<PrivateRoute><Cart /></PrivateRoute>}></Route>
                <Route path="/checkout" element = {<Checkout />}></Route>
                <Route path="/login" element = {<LoginPage />}></Route>
                <Route path="*" element = {<NotFound />}></Route>
            </Routes>
        </>
    )
}