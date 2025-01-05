# 🔒 Password Generator

This project demonstrates creating a secure password generator using React.js, while studying three key React hooks: **useState**, **useCallback**, and **useRef**. 🧑‍💻✨✨✨

---

## 🔑 Key Features

- Generate passwords of customizable lengths.
- Optionally include numbers and special characters.
- Copy the generated password to the clipboard with a single click.

---

## 📜 Code Highlights

### 🛠️ React Hooks and State Management

#### Initial State Setup

```javascript
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");

// useRef hook
const passwordRef = useRef(null);
```

✨✨✨

### 🧠 Password Generator Function

The `passwordGenerator` function dynamically builds a password based on user preferences:

```javascript
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);
```

✨✨✨

### 📋 Copy to Clipboard

Using the `useRef` hook to enable seamless copying:

```javascript
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password);
}, [password]);
```

✨✨✨

### 🔄 Automatically Generate Passwords on State Change

The `useEffect` hook ensures passwords are updated when user preferences change:

```javascript
useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed, passwordGenerator]);
```

---

## 🖥️ Output

1. **Password Generation:**
   - Default password is 8 characters long.
   - Options to include numbers and special characters.
2. **Copy to Clipboard:**
   - Copies the generated password instantly when clicked.

🎉🎉🎉

---

## 🌟 Props Documentation

- **useState:** [React useState Documentation](https://reactjs.org/docs/hooks-state.html)
- **useCallback:** [React useCallback Documentation](https://reactjs.org/docs/hooks-reference.html#usecallback)
- **useRef:** [React useRef Documentation](https://reactjs.org/docs/hooks-reference.html#useref)

---

## 📂 File Structure

```
06_password-generator/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── UV_logo.png
└── vite.config.js

```

---

## 🏗️ How to Run the Project

1. 📥 Clone or download this repository. 🚀🚀🚀
   ```bash
   git clone https://github.com/utsavvachhani/react-js-study.git
   ```

2. Navigate to the project directory:
   ```bash
   cd 06_password-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to view the application. 🌐🌐🌐


---
---

## 📄 Additional Documentation

Explore detailed documentation, output screenshots, and more in the **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.ne1qnz4nxs8f)**. 📑

GitHub Repository for this project: **[06_password-generator on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/06_password-generator)** 🔗

---
---

🎉 Enjoy experimenting with React hooks while creating secure passwords! 🔑✨✨✨

