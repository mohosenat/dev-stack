# Dev Stack Builder

A clean, responsive React website for exploring development technologies and building a personal technology stack.

## Technologies

- React.js
- Vite
- JavaScript ES6+
- CSS3
- React-Toastify
- JSON
- Lucide React icons

## Features

1. Loads 12 technologies from `public/technologies.json`.
2. Add, remove, and remove all technologies with duplicate protection.
3. Responsive navbar, hero section, technology cards, stack sidebar, and footer.
4. Toast notifications for add, duplicate, remove, and remove all actions.
5. Loading state while the JSON file is fetched.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## React questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses it to describe what the screen should look like.

### 2. What is the difference between props and state?
Props are data passed from a parent to a child. State is data managed inside a component that can change over time.

### 3. What does useState do, and where was it used?
`useState` stores changing data in a component. Here it stores the loaded technologies, selected stack, mobile menu state, and loading state.

### 4. What does useEffect do, and why was it needed?
`useEffect` runs side effects after rendering. It was used to fetch `technologies.json` when the app loads.

### 5. Why does every map item need a unique key?
React uses the key to identify each item efficiently when the list changes.

### 6. What is conditional rendering?
Conditional rendering means showing different UI based on a condition. This project shows an empty-stack message when the stack length is zero.

### 7. How does parent-child data passing work?
A parent passes data through props. A child can send information back by calling a function passed through props, such as the add or remove handlers.


## Local images
Place your existing `logo-text.png` and `banner-stack.png` inside `src/assets/`. They are imported by `Logo.jsx and Hero.jsx respectively. No visual design changes were made.
