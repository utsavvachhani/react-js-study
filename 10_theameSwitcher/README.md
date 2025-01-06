# Theme Switcher Project

This project demonstrates a dynamic **Theme Switcher** built using the **React Context API**. It allows users to toggle between light and dark modes seamlessly. 🌗

---

## 📜 Code Highlights

### 🌟 Theme Context

The `ThemeContext` provides and manages theme-related state and actions:

```jsx
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
```

## 📂 File Structure

```
10_themeSwitcher/
├── 📁node_modules/
├── 📁public/
├── 📁src/
│   ├── 📁assets/
│   ├── 📁components/
│   │   ├── 📝Card.jsx
│   │   └── 📝ThemeButton.jsx
│   ├── 📁context/
│   │   └── 📝theme.js
│   ├── 📝App.css
│   ├── 📝App.jsx
│   ├── 📝index.css
│   └── 📝main.jsx
├── 📝.gitignore
├── 📝eslint.config.js
├── 📝index.html
├── 📝package-lock.json
├── 📝package.json
├── 📝postcss.config.js
├── 📝README.md
├── 📝tailwind.config.js
├── 📝UV_logo.png
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
   cd 10_themeSwitcher
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

Explore detailed documentation, output screenshots, and more in the **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.4tbo2ckmv16c)**. 📑

GitHub Repository for this project: **[10\_themeSwitcher on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/10_themeSwitcher)** 🔗

---

🎉 Enhance your app with dynamic theme switching using React Context API! 🚀

