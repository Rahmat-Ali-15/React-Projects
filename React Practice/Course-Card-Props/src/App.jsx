import { CourseCard } from "./Components/CourseCard"
import "./App.css"

export const App = () => {
  return(
    <>
      <h1 style={{textAlign: "center"}}>Props Practice</h1>
      <div className="parent-container">
        <CourseCard title = "Full Stack Web Development" price = "₹4999" duration = "4 Months" trainer = "Mehfooz Khan" placement = "100%" rating = "4.8" />
        <CourseCard title = "DevOps + AWS" price = "₹6999" duration = "6 Months" trainer = "Inzmam Sir" placement = "95%" rating = "4.6" />
        <CourseCard title = "Linux + Networking" price = "₹3999" duration = "3 Months" trainer = "Ankit Singh" placement = "90%" rating = "4.5" />
      </div>
    </>
  )
}