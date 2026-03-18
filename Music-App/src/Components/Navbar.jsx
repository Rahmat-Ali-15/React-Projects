import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {removeToken} from "../Redux/Auth/actionTypes";

import '../App.css'

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
        <button onClick={() => dispatch(removeToken())}>Logout</button>
    </div>
  );
};
