import { Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { SignUpPage } from "../Pages/SignUpPage";
import { New } from "../Pages/New";
import { Men } from "../Pages/Men";
import { Women } from "../Pages/Women";
import { Sports } from "../Pages/Sports";
import { MotorSport } from "../Pages/MotorSports";
import { LifeStyle } from "../Pages/LifeStyle";
import { Kids } from "../Pages/Kids";
import { Sale } from "../Pages/Sale";

export const AllRoutes = ({ fields }) => {
  console.log("🚀 ~ fields:allroutes", fields);
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/new"
          element={<New />}
        ></Route>
        <Route
          path="/men"
          element={<Men />}
        ></Route>
        <Route path="/women" element = {<Women />}></Route>
        <Route path="/sports" element = {<Sports />}></Route>
        <Route path="/motorsport" element={<MotorSport />}></Route>
        <Route path="/lifestyle" element = {<LifeStyle />}></Route>
        <Route path="/kids" element = {<Kids />}></Route>
        <Route path="/sale" element = {<Sale />}></Route>
        <Route
          path="/signup"
          element={<SignUpPage data={fields} />}
        ></Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        ></Route>
      </Routes>
    </>
  );
};
