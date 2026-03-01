import "./App.css";
import { Navbar } from "./Components/Navbar"
import { AllRoutes } from "./Routes/AllRoutes";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )
}