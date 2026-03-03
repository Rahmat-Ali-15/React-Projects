# 📘 React Props Practice – Course Card Component

## 📌 Project Overview

This project demonstrates how to use **props in React** by building a reusable **CourseCard** component.

The goal is to:

* Create a reusable component
* Pass dynamic data using props
* Render multiple course cards with different data
* Follow clean component structure and best practices

---

## 🧩 Features

* Reusable `CourseCard` component
* Props destructuring
* Dynamic rendering of course details
* Multiple component reuse
* Styled card layout
* “Enroll Now” button inside each card

---

## 📁 Project Structure

```
src/
 ├── App.jsx
 ├── CourseCard.jsx
 ├── App.css (optional)
```

---

## 🛠 Step 1: Create `CourseCard.jsx`

The component receives the following props:

* `title`
* `price`
* `duration`
* `trainer`
* `placement`
* `rating`

All values must come from props (no hardcoded data).

### Example Structure:

```jsx
export const CourseCard = ({
  title,
  price,
  duration,
  trainer,
  placement,
  rating
}) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <p><strong>Title:</strong> {title}</p>
        <p>Price: {price}</p>
        <p>Duration: {duration}</p>
        <p>Trainer: {trainer}</p>
        <p><strong>Placement:</strong> {placement}</p>
        <p><strong>Rating:</strong> ⭐ {rating}</p>
        <button>Enroll Now</button>
      </div>
    </div>
  );
};
```

---

## 🛠 Step 2: Use Component in `App.jsx`

Import and reuse the `CourseCard` component multiple times with different props.

### Example Usage:

```jsx
import { CourseCard } from "./CourseCard";

function App() {
  return (
    <>
      <CourseCard
        title="Full Stack Web Development"
        price="₹4999"
        duration="6 Months"
        trainer="Rahul Sharma"
        placement="100%"
        rating="4.8"
      />

      <CourseCard
        title="DevOps + AWS"
        price="₹6999"
        duration="4 Months"
        trainer="Amit Verma"
        placement="95%"
        rating="4.6"
      />

      <CourseCard
        title="Linux + Networking"
        price="₹3999"
        duration="3 Months"
        trainer="Ankit Singh"
        placement="90%"
        rating="4.5"
      />
    </>
  );
}

export default App;
```

---

## 🧠 Concepts Practiced

* What are Props in React
* Parent to Child data flow
* Props destructuring
* Reusable components
* Clean component architecture

---

## 🚀 Learning Outcome

After completing this task, you should be able to:

* Create reusable React components
* Pass and receive props correctly
* Avoid hardcoding inside components
* Structure small React projects properly

---

## 📌 Future Improvements

* Add conditional styling for placement percentage
* Use `.map()` with an array of course objects
* Add rating stars UI
* Improve styling with Tailwind CSS or custom CSS
* Make cards responsive

---

## 🏁 Conclusion

This project strengthens your understanding of React props and component reusability — which are fundamental concepts in modern React development.

---

**Author:** Rahmat Ali
**Tech Stack:** React.js
