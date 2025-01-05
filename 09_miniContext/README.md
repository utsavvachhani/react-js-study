# 🧩 Mini Context API Project

This project demonstrates the use of React's **Context API** to manage and share state across components without prop drilling. 🚀

---

## 🔑 Key Features

- Centralized state management using `useContext` and a custom context provider.
- Simple and modular setup for scalable applications.
- Easy access and updates to shared state across the component tree.

---

## 📜 Code Highlights

### 🛠️ Context Provider

The `UserContextProvider` component initializes and provides user state across the application:

```javascript
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

### 🧠 Using Context in the Application

The `UserContextProvider` wraps the application, allowing components like `Login` and `Profile` to access shared state:

```jsx
import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const MainApp = () => (
  <UserContextProvider>
    <h1>Context API Project</h1>
    <Login />
    <Profile />
  </UserContextProvider>
);

export default MainApp;
```

###

---

## 📂 File Structure

```
09_miniContext/
├── 📁node_modules/
├── 📁public/
├── 📁src/
│   ├── 📁assets/
│   ├── 📁components/
│   │   ├── 📝Login.jsx
│   │   └── 📝Profile.jsx
│   ├── 📁context/
│   │   ├── 📝UserContext.jsx
│   │   └── 📝UserContextProvider.jsx
│   ├── 📝App.css
│   ├── 📝App.jsx
│   ├── 📝index.css
│   └── 📝main.jsx
├── 📝.gitignore
├── 📝eslint.config.js
├── 📝index.html
├── 📝package-lock.json
├── 📝package.json
├── 📝README.md
├── 📝vite.config.js
```

---

## 🏗️ How to Run the Project

1. 📥 Clone or download this repository:

   ```bash
   git clone https://github.com/utsavvachhani/react-js-study.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 09_miniContext
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to view the application. 🌐

---

## 📄 Additional Documentation

Explore detailed documentation, output screenshots, and more in the **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.5ywqsnjj3f6r)**. 📑

GitHub Repository for this project: **[09\_miniContext on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/09_miniContext)** 🔗

---

🎉 Simplify state management with Context API and React! 🚀

