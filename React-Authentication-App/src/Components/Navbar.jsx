import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const links = [
        {path: "/", title: "Home"},
        {path: "/contact", title: "Contact"},
        {path: "/about", title: "About"},
        {path: "/signup", title: "SignUp"}
    ]


    return(
        <>
        
            <div className="navbar-container">
                {
                    links.map((el, i) => (
                        <NavLink key={i} to={el.path} end>
                            {el.title}
                        </NavLink>
                    ))
                }
            </div>
        </>
    )
}