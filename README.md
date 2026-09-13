# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive React web application where users can explore different technologies and build their own personalized development stack.

Technology data is loaded from a JSON file, and users can add or remove technologies from their stack with interactive feedback.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- Lucide React
- JSON
- Vite

## ✨ Features

### 1. Explore Technologies

Users can browse different technology cards containing the technology name, icon, category, description, difficulty level, and rating.

### 2. Build Your Own Stack

Users can add technologies to their personal stack. Duplicate technologies are prevented, and users can remove individual technologies or remove all technologies at once.

### 3. Responsive & Interactive UI

The website is fully responsive for desktop, tablet, and mobile devices. Toast notifications and loading states provide clear feedback for user actions.

## 🚀 Live Demo

[Live Site](https://dev-stack-five-sigma.vercel.app/)

## 📂 GitHub Repository

[GitHub Repository](https://github.com/mohosenat/dev-stack)

---

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to create and read.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component. In this project, I used it to manage the technologies list, selected stack, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects in a React component. I used it to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update the correct items when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show `No technologies selected.` when the stack is empty.

```jsx
{stack.length === 0 ? (
  <div className="empty-stack">No technologies selected.</div>
) : (
  <div className="stack-items">
    {/* selected technologies */}
  </div>
)}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**. To send something back, the parent can pass a **function as a prop**, and the child can call that function.

In this project, the `App` component passes `stack`, `onAdd`, and `onRemove` to child components through props.
