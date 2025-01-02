# 03_CounterProject : React Hooks in Action 📈

This project dives into the basics of **React Hooks**, focusing on how to manage and update state using the `useState` hook. The application is a simple counter that demonstrates state management and conditional rendering in React. 🚀

---

## 📚 Project Structure

```
03_counterProject/
├── 📁node_modules/
├── 📁public/
├── 📁src/
│   ├── 🖍 App.css
│   ├── 🖍 App.jsx
│   ├── 🖍 index.css
│   ├── 🖍 main.jsx
├── 🖍 .gitignore
├── 🖍 eslint.config.js
├── 🖍 index.html
├── 🖍 package-lock.json
├── 🖍 package.json
├── 🖍 README.md
├── 🖍 vite.config.js
```

---

## 🔎 Study Objective

- Understand the **basic functionality of React Hooks**.
- Learn how to use `useState` to handle state in React components.

---

## ⚙️ Key Code Snippets

### 💡 Using `useState` to Manage Counter and Condition
```javascript
let [counter, setCounter] = useState(0); // Initialize counter state
let [condition, setCondition] = useState(''); // Initialize condition message
```

### ➕ Adding Value
```javascript
const addValue = () => {
  if (counter + 1 <= 20) {
    setCounter(counter + 1);
    console.log("Added Value:", counter);
    setCondition('');
  } else {
    console.log('Count Cannot Be Increased Further.');
    setCondition('Count Cannot Be Increased Further.');
  }
};
```

### ➖ Removing Value
```javascript
const removeValue = () => {
  if (counter - 1 >= 0) {
    setCounter(counter - 1);
    console.log("Removed Value:", counter);
    setCondition('');
  } else {
    console.log('Count Cannot Be Decreased Further.');
    setCondition('Count Cannot Be Decreased Further.');
  }
};
```

---

## 📺 Output Preview

The app includes a **counter** that allows:
1. Incrementing values up to a maximum of **20**.
2. Decrementing values down to a minimum of **0**.
3. Displaying a message when limits are reached. ✨

---

## 🔖 Reference

For a deeper dive into React Hooks, check out the **[Facebook React GitHub Repository](https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js)**. 💡

---

## 🔍 Detailed Documentation

Explore detailed documentation, output screenshots, and more in **[Google Docs](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.126ne1v9oglg)**. 📁
GitHub Repository for this project: **[03_CounterProject on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/03_counterProject)** 🔗

---

## ⚡️ How to Run

1. Clone the repository:
   ```bash
   npm create vite@latest
   ```
2. Navigate to the project directory:
   ```bash
   cd 03_counterProject
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173`. 🌐

---

🎉 **Enjoy experimenting with React Hooks!** 🚀

