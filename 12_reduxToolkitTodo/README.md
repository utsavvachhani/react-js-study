# 12_reduxToolkitTodo

## 📝 Project Overview

This project implements a To-Do application using **Redux Toolkit** to manage state efficiently. Learn the core concepts of Redux Toolkit like `createSlice`, `configureStore`, and integrating the store into a React application.

---


## 🏗️ How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/utsavvachhani/react-js-study.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd 12_reduxToolkitTodo
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to view the application.

---

## 🔑 Key Features

### State Management
- **Redux Toolkit** for centralized state management.
- Efficient and modular reducer using `createSlice`.

### Components
- **TodoList**: Displays the list of to-dos.
- **AddTodo**: Allows users to add new to-dos.
- **TodoItem**: Manages individual to-do functionality, like removing to-dos.

---

## 🛠️ Core Files

### `store.js`
The global store setup with the to-do reducer:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: todoReducer,
});
```

### `todoSlice.js`
Defining actions and reducers for the To-Do application:
```javascript
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello world' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

---

---

## 📄 Additional Documentation

Explore detailed documentation, screenshots, and more in the **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.ygtkfgobqqqg)**. 📑

GitHub Repository for this project: **[12_reduxToolkitTodo on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/12_reduxToolkitTodo)** 🔗

---
---