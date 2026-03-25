import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { notificationError, notificationSuccess } from "../Redux/Action";

export const Form = () => {
    // const data = useSelector(state => {
    //     console.log("🚀 ~ state:", state);;
    // })
    const {isAuth} = useSelector(state=> state)
    console.log("🚀 ~ isAuth:", isAuth);
    const dispatch = useDispatch()
    
    const [user, setUser] = useState({
        email: "rahmatali9262@gmail.com",
        password: "Rahmat@123"
    })
    
    const handleForm = (e) => {
        e.preventDefault()
        dispatch(notificationError())
        dispatch(notificationSuccess())
    }

  return (
    <>
      <div>
        <div>
          <label>Email</label>
          <input type="email" defaultValue={user.email} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" defaultValue={user.password} />
        </div>
        <button onClick={handleForm}>Submit</button>
        {
            isAuth ? <h1>Sucess</h1> : <h1>Failed</h1>
        }
      </div>
    </>
  );
};
