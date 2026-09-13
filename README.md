# 🧱 Dev Stack Builder

## 📖 About the Project

Dev Stack Builder is a web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies, view their details, add technologies to their stack, and remove them when needed.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

### 1. 🔍 Explore Technologies
Users can explore different technologies with their name, description, category, difficulty level, rating, and badge.

### 2. 🧱 Build Your Own Stack
Users can add their favorite technologies to their personal development stack and see the selected technologies in the stack section.

### 3. 🗑️ Manage Your Stack
Users can remove individual technologies or remove all selected technologies at once. Toast notifications provide feedback for different actions.

---

# ❓ React Questions & Answers

## 1. What is the difference between components and props in React?

**Components** are reusable building blocks of a React application. They are used to create the user interface.

**Props** are used to pass data from one component to another. Props are read-only and help make components reusable and dynamic.

For example, a component can receive a technology's name, description, or icon through props.

---

## 2. What is the useState hook, and how does it work?

`useState` is a React Hook that allows us to add and manage state inside a functional component.

It returns two things:

- The current state value
- A function to update that state

When the state is updated, React re-renders the component so the UI can display the updated information.

In this project, `useState` is used to keep track of the technologies selected in the user's stack.

---

## 3. What is the purpose of the useEffect hook in React?

`useEffect` is a React Hook used to perform side effects in a component.

Side effects can include:

- Fetching data from an API
- Updating the document title
- Setting up timers
- Working with browser APIs

It runs after the component renders, depending on the dependency array provided to it.

---

## 4. What is the purpose of the useContext hook in React?

`useContext` is used to access shared data without passing props through every component manually.

It is useful when many components need access to the same data, such as:

- User information
- Theme settings
- Authentication data
- Application settings

It helps avoid **prop drilling**, where data has to be passed through multiple levels of components.

---

## 5. What is the difference between state and props?

**State** is data managed inside a component. It can change over time, and when it changes, React re-renders the component.

**Props** are data passed from a parent component to a child component. Props are read-only and cannot be directly modified by the child.

### Main difference:

- **State:** Managed inside the component and can change.
- **Props:** Passed from parent to child and are read-only.

In this project, the selected technologies are stored in state, while technology information is passed to components through props.

---

## 6. What is a custom hook in React?

A custom hook is a reusable JavaScript/TypeScript function that uses React Hooks.

Custom hooks allow us to extract and reuse logic between different components.

A custom hook usually starts with the word `use`, such as:

- `useFetch`
- `useAuth`
- `useLocalStorage`

They help keep components clean and make reusable logic easier to maintain.

---

## 7. How do you handle events in React?

React handles events using event handler functions such as:

- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter`

For example, when a user clicks the **Add to Stack** button in this project, an event handler updates the selected technologies state and displays a toast notification.

React event handling uses camelCase event names, such as `onClick`, instead of HTML-style names like `onclick`.

