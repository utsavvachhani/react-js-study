# Basic Vite App

This project demonstrates the creation of a basic Vite app using `create-vite` and shows how to integrate additional components into the application. 🛠️

## 🚀 Setup and Running the Application

### Commands Used:

1. **✨ Initialize a Vite App**:

   ```bash
   npm create vite@latest
   ```

   This scaffolds the project and installs the necessary dependencies. 🏗️

2. **📂 Navigate to the Project Directory**:

   ```bash
   cd 01_basic-vite-app
   ```

3. **📦 Install Dependencies**:

   ```bash
   npm install
   ```

4. **▶️ Start the Development Server**:

   ```bash
   npm run dev
   ```

   This launches the application on `http://localhost:5173`. 🌐

### 🖇️ First File Execution

The first file executed is `main.jsx`, located in the `src` folder. It renders the `App` component into the root DOM element defined in `public/index.html`. 🪄

## 📂 Folder Structure

### 📋 Initial Folder Structure:

```
01_basic-vite-app/
├── 📁node_modules/
├── 📁public/
│   ├── 📝index.html
├── 📁src/
│   ├── 📝App.jsx
│   ├── 📝main.jsx
├── 📝.gitignore
├── 📝eslint.config.js
├── 📝index.html
├── 📝package-lock.json
├── 📝package.json
├── 📝README.md
├── 📝vite.config.js
```

### 🧹 After Deleting Unused Files:

Unnecessary files were removed to simplify the structure. 🗑️

```
01_basic-vite-app/
├── 📁node_modules/
├── 📁public/
│   ├── 📝index.html
├── 📁src/
│   ├── 📝App.jsx
│   ├── 📝main.jsx
├── 📝package.json
├── 📝vite.config.js
```

## ➕ Adding an Extra Component

### 📄 File Changes

#### `App.jsx`

```
01_basic-vite-app/
├── 📁node_modules/
├── 📁public/
│   ├── 📝index.html
├── 📁src/
│   ├── 📝App.jsx
│   ├── 📝main.jsx
│   ├── 📝Extra.jsx
├── 📝package.json
├── 📝vite.config.js
```

```javascript
import Extra from './Extra';

function App() {
  return (
    <>
      <h1>
        <p>Utsav Vachhani Vite Project</p>
      </h1>
      <Extra />
    </>
  );
}

export default App;
```

#### `Extra.jsx`

```javascript
function Extra() {
  return (
    <h1>I will Call You From the extra.js File</h1>
  );
}

export default Extra;
```

### 🖥️ Output

When the app runs, the browser displays:

```
Utsav Vachhani Vite Project
I will Call You From the extra.js File
```

## 🔍 How it Works

1. `main.jsx` is the entry point and renders the `App` component. ⚡
2. The `App` component is defined in `App.jsx` and includes the `Extra` component.
3. The `Extra` component, located in `Extra.jsx`, returns a simple heading. 🖼️
4. The Vite development server updates the browser in real-time when changes are made. 🔄

## 🛠️ How to Run the Project

1. Clone or download this repository. 📥
2. Navigate to the project directory:
   ```bash
   cd 01_basic-vite-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser to see the output. 🌟

---

---
## 📄 Documentation with Additional Output and Screenshots

For detailed documentation, including output photos and more, refer to **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.9ih10cvyqofv)**. 📑

GitHub Repository for this project: **[01_basic-vit-app on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/01_basic-vit-app)**


---
---
🎉 Enjoy exploring Vite! 🚀

