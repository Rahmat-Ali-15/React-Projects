import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotify } from "../Redux/Action";

export const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email.length <= 0 || form.password.length <= 0) {
      dispatch(addNotify("Please fill all the field", "warning"));
    } else if (
      form.email === "mdrahmatali9262@gmail.com" &&
      form.password === "Rahmat@123"
    ) {
      dispatch(addNotify("Login", "Success"));
    } else {
      dispatch(addNotify("Login Failed", "Error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "100px auto",
        gap: "1rem",
        textTransform: "capitalize",
      }}
    >
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
};
