# 🅱️asic 🌱React 🎨 App

This 📜project demonstrates the 🛠️creation of a basic 🌱React app using `create-react-app` and shows how to 🤝integrate additional 🧩components into the application.

## ⚙️Setup and 🏃‍♂️Running the Application

### 🛠️Commands Used:

1. **🔧Initialize a 🌱React App**:

   ```bash
   npx create-react-app 01_basic-react-app
   ```

   This 🏗️sets up the initial 🗂️folder structure and installs the 📦necessary dependencies. 🚀

2. **🚶‍♂️Navigate to the 🗂️Project Directory**:

   ```bash
   cd 01_basic-react-app
   ```

3. **🏁Start the 🖥️Development Server**:

   ```bash
   npm start
   ```

   This 🔗launches the 🖥️application on `http://localhost:3000`. 🌐

### 📂Initial File Execution

The first 📝file executed is `index.js`, located in the `src` 🗂️folder. It 🧩renders the `App` component into the 🌐root DOM 🏷️element defined in `public/index.html`. 📂

## 🗂️Folder Structure

### 📂Initial Folder Structure:

```
01_basic-react-app/
├── 📁node_modules/
├── 📁public/
│   ├── 📝index.html
│   └── ...
├── 📁src/
│   ├── 🎨App.css
│   ├── 📝App.js
│   ├── 🧪App.test.js
│   ├── 🎨index.css
│   ├── 📝index.js
│   └── ...
```

### 🧹After 🗑️Deleting Some Files:

Unnecessary 🗃️files like `App.test.js`, 🎨logo files, and some 🎨CSS files were removed to simplify the structure. 🧹

```
01_basic-react-app/
├── 📁node_modules/
├── 📁public/
│   ├── 📝index.html
│   └── ...
├── 📁src/
│   ├── 📝App.js
│   ├── 📝index.js
│   └── ...
```

## ➕Adding an Extra Component

### 📝File Changes

```
01_basic-react-app/
├── 📁node_modules/
├── 📁public/
│   ├── 📝index.html
│   └── ...
├── 📁src/
│   ├── 📝App.js
│   ├── 📝extraf.js
│   ├── 📝index.js
│   └── ...
```

#### `📝App.js`

```javascript
import Extra from "./extra";

function App() {
  return (
    <>
      <div className="App">
        <p>Utsav Vachhani</p>
      </div>
      <Extra />
    </>
  );
}

export default App;
```

#### `📝extra.js`

```javascript
function Extra() {
  return (
    <h1>I will Call You From the extra.js File</h1>
  );
}

export default Extra;
```

### 🔍Output

When the app 🏃‍♂️runs, the 🖥️browser displays:

```
Utsav Vachhani
I will Call You From the extra.js File
```

## 🤔How it Works

1. `📝index.js` is the 🔑entry point and renders the `App` 🧩component. ⚡
2. The `App` 🧩component is defined in `📝App.js` and includes the `Extra` 🧩component.
3. The `Extra` 🧩component, located in `📝extra.js`, returns a simple heading. 🖼️
4. The 🌱React 🖥️development server updates the browser in real-time when changes are made. 🔄

## 🏗️How to 🏃‍♂️Run the Project

1. 📥Clone or 📦download this 🗂️repository. 📥
2. 🚶‍♂️Navigate to the 🗂️project directory:
   ```bash
   cd 01_basic-react-app
   ```
3. 📦Install dependencies:
   ```bash
   npm install
   ```
4. 🏁Start the 🖥️development server:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000` in your 🌐browser to see the 🖼️output. 🌟

---
---
## 📄 Documentation with Additional Output and Screenshots

For detailed documentation, including output photos and more, refer to **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.9rao6dso1lco)**. 📑

GitHub Repository for this project: **[01_basic-react-app on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/01_basic-react-app)**


---
---

🎉Enjoy exploring 🌱React! 🎨

