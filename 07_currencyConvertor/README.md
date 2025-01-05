# 🔐 Currency Converter

This project demonstrates building a **currency converter** in React.js, focusing on creating a **custom React hook** for fetching currency data. This project is a continuation of studying React hooks like **useState**, **useEffect**, and **custom hooks**. 👨‍💻✨✨✨

---

## 🔑 Key Features

- Real-time currency conversion using a public API.
- Swap functionality to switch between `from` and `to` currencies.
- Clean and modular structure with reusable components.

---

## 🐶 Additional Resources

- **useState Documentation**: [React useState Documentation](https://react.dev/reference/react/useState)
- **useEffect Documentation**: [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- **Currency API**: [Currency API Documentation](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/use.json)

---

## 📜 Code Highlights

### 🛠️ Custom Hook: Fetch Currency Information

The `useCurrencyInfo` hook fetches exchange rates for the selected currency:

```javascript
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
```

- **useEffect**: Fetches data whenever the `currency` value changes.
- **useState**: Maintains the fetched exchange rates.

---

### 🧠 App Component

The main component manages the state and UI for the currency converter:

```javascript
const [amount, setAmount] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [convertedAmount, setConvertedAmount] = useState(0);

const currencyInfo = useCurrencyInfo(from);
const options = Object.keys(currencyInfo);

const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
};

const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
};
```

---

### 🌐 File Structure

```
07_currencyConvertor/
│
├── node_modules/
├── public/
├── src/
│   ├── Components/
│   │   ├── index.js
│   │   └── InputBox.jsx
│   ├── hooks/
│   │   └── useCurrencyInfo.js
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

## 🛠️ How to Run the Project

1. 📥 Clone or download this repository. 🚀🚀🚀

   ```bash
   git clone https://github.com/utsavvachhani/react-js-study.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 07_currencyConvertor
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

## 📄 Additional Documentation

Explore detailed documentation, output screenshots, and more in the **[Google Docs Link](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.5yj6x3tores4)**. 📑

GitHub Repository for this project: **[07_currencyConvertor on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/07_currencyConvertor)** 🔗

---
---

🎉 Enjoy exploring custom hooks and creating a dynamic currency converter! 🔑✨✨✨

