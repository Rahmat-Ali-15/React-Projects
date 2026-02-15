import "./App.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";

export function App() {
  const field = [
    {
      name: "firstName",
      type: "text",
      placeholder: "Enter your first name",
      label: "firstname",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Enter your last name",
      label: "lastname",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Create your password",
      label: "firstname",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Enter confirm password",
      label: "confirmpassword",
      required: true,
    },
  ];

  return (
    <>
      <Navbar />
      <AllRoutes fields={field} />
      <Footer />
    </>
  );
}
