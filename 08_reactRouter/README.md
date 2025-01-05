# 🔀 React Router

This project focuses on implementing routing in React applications using **React Router**. Learn how to declare and use routes effectively, as well as understand hooks like **useLoaderData**. 🧭

## 📹 Video Demonstration

**[Watch Here](https://drive.google.com/file/d/1qU7niVh1ocmN7DI4Xcryv1dxO_mmntfA/view?usp=drive_link)**

---

## 🔑 Key Features

- Declare routes using two different methods.
- Use dynamic routes for user-specific content.
- Learn hooks like **useLoaderData** for efficient data loading.

---

## 🛠️ Routes Declaration

### Method 1: Inline Declaration

```javascript
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);
```

### Method 2: Using `createRoutesFromElements`

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);
```

---

## 📜 Hooks and Commands

### Hooks

- **useLoaderData**: [React Router useLoaderData Documentation](https://reactrouter.com/docs/en/main/hooks/use-loader-data)

### Commands

To install React Router:

```bash
npm install react-router-dom
```

---

## 📂 File Structure

```
08_reactRouter/
├── 📁node_modules/
├── 📁public/
├── 📁src/
│   ├── 📁assets/
│   ├── 📁components/
│   │   ├── 📁About/
│   │   ├── 📁Contact/
│   │   ├── 📁Footer/
│   │   ├── 📁Github/
│   │   ├── 📁Header/
│   │   ├── 📁Home/
│   │   ├── 📁User/
│   ├── 📝App.jsx
│   ├── 📝index.css
│   ├── 📝Layout.jsx
│   └── 📝main.jsx
├── 📝.gitignore
├── 📝eslint.config.js
├── 📝index.html
├── 📝package-lock.json
├── 📝package.json
├── 📝postcss.config.js
├── 📝README.md
├── 📝tailwind.config.js
└── 📝vite.config.js
```

---

## 🏗️ How to Run the Project

1. 📥 Clone or download this repository:

   ```bash
   git clone https://github.com/utsavvachhani/react-js-study.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 08_reactRouter
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
---

## 📄 Additional Documentation

Explore detailed documentation, output screenshots, and more in the **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.ar30iqaw6kn5)**. 📑

GitHub Repository for this project: **[08_reactRouter on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/08_reactRouter)** 🔗

---
--- 

🎉 Explore React Router and implement dynamic routing in your projects! 🚀

