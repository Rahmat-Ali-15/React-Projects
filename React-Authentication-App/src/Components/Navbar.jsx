import { NavLink } from "react-router-dom"

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci"
import { SiPuma } from "react-icons/si"
import { Search } from "./Seacrch"

export const Navbar = () => {
    const links = [
        {path: "/", title: "Home"},
        {path: "/new", title: "New"},
        {path: "/men", title: "Men"},
        {path: "/women", title: "Women"},
        {path: "/sports", title: "Sports"},
        {path: "/motorsport", title: "Motorsport"},
        {path: "/lifestyle", title: "Lifestyle"},
        {path: "/kids", title: "Kids"},
        {path: "/sale", title: "Sale"},
        // {path: "/signup", title: "Sign Up"},
    ]


    return(
        <>
            <div className="flex justify-between items-center w-full mt-4 px-8 h-20 bg-black">
                <div className="flex items-center gap-10">
                    <div className="logo">
                        <SiPuma className="text-white text-[32px] font-semibold" />
                    </div>
                    <div className="w-full flex items-center gap-9">
                        {
                        links.map((el, i) => (
                            <NavLink className="relative text-white font-semibold no-underline before:content-[''] before:absolute before:-bottom-2.5 before:left-0 before:w-0 before:h-0.5 before:bg-[#b78240] before:transition-all before:duration-500 before:ease-in-out hover:before:w-full " key={i} to={el.path} end>
                                {el.title}
                            </NavLink>
                        ))
                    }
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <Search />
                    <div className="flex items-center justify-center cursor-pointer p-1.5 hover:bg-[#504f4f] rounded-full">
                        <CiHeart className="text-white text-[25px] font-semibold" />
                    </div>
                    <div className="flex items-center justify-center cursor-pointer rounded-full p-1.5 hover:bg-[#504f4f]">
                        <CiShoppingCart className="text-white text-[25px] font-semibold" />
                    </div>
                    <div className="flex items-center justify-center p-1.5 cursor-pointer rounded-full hover:bg-[#504f4f]">
                        <CiUser className="text-white text-[25px] font-semibold" />
                    </div>
                </div>

            </div>
        </>
    )
}