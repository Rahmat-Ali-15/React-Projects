import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigage = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  console.log("🚀 ~ location:", location);

  const [user, setUser] = useState({
    email: "eve.holt@greqres.in",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user)).then(() =>
      navigage(location.state.from || "/", {
        replace: true,
      }),
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          defaultValue={user.password}
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
