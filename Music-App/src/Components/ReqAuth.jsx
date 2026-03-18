import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);
  console.log("🚀 ~ isAuth:", isAuth);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
