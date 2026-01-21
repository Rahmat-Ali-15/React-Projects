import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Reducer/authReducer";

export const Authentication = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  console.log("🚀 ~ user:", user);
  console.log("🚀 ~ isLoggedIn:", isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
        name: "Rahmat Ali",
        email: "silentknight9262@gmail.com"
    }
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Click here to Login</button>
        </>
      )}
    </>
  );
};
