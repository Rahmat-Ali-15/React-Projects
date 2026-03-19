import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import '../App.css'
import { RemoveToken } from "../Redux/Auth/actionTypes";

export const Navbar = () => {
  const dispatch = useDispatch();

  const nav = [
    {
      path: "/",
      element: "music",
    },
    {
      path: "/login",
      element: "login",
    },
  ];

  return (
    <div className="mainDiv">
      {nav &&
        nav.map((el, i) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "tomato" : "transparent" };
              }}
              to={el.path}
              className="navlink"
              end
              key={i}
            >
              {el.element}
            </NavLink>
          );
        })}
        <button onClick={() => dispatch(RemoveToken())}>Logout</button>
    </div>
  );
};
