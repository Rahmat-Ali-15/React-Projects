import { useDispatch, useSelector } from "react-redux";

import { FaCircleUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


import { getLoginRequest, getLoginSuccess } from "../Actions/AuthActions/AuthAction";
import { Navigate } from "react-router-dom";


export const LoginPage = () => {
  const {isError, isLoading, isAuth} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(getLoginRequest());

    dispatch(getLoginSuccess())
    
  };

  if (isAuth) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <>
      {
        isLoading ? <h1>Loading...</h1> : null
      }
      {
        isError ? <h1>Login Credential not matched !!!</h1> : null
      }
      <div className="loginPage-container">
        <div className="loginPage-card">
          <div>
            <FaCircleUser className="user_icon" />
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-email">
              <MdEmail className="icon" />
              <input
                type="email"
                placeholder="Email ID"
                autoComplete="email"
                required
              />
            </div>
            <div className="login-password">
              <RiLockPasswordFill className="icon" />
              <input
                type="password"
                placeholder="Password" autoComplete="current-password" required
              />
            </div>
            <button type="submit" className="login-btn">LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
};
