# 04_TailwindProps Project 🌈

This project explores the integration and use of **Tailwind CSS** within a React application. It demonstrates the setup process, basic configurations, and a practical example of building UI components with Tailwind CSS. 🚀

---

## Project Structure 🗂️

```
04_TailwindProps/
├── 📁node_modules/
├── 📁public/
├── 📁src/
│   ├── 📝App.css
│   ├── 📝App.jsx
│   ├── 📝Components/
│   │   ├── 📝Card.jsx
│   ├── 📝index.css
│   ├── 📝main.jsx
├── 📝.gitignore
├── 📝eslint.config.js
├── 📝index.html
├── 📝package-lock.json
├── 📝package.json
├── 📝README.md
├── 📝vite.config.js
```

---

## How to Set Up Tailwind CSS 🎨

Follow these steps to add Tailwind CSS to your project:

1. Install Tailwind CSS and its dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. Update the `tailwind.config.js` file:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. Add Tailwind's base styles to your `index.css` file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Code Examples 📄

### App Component

```javascript
import { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <>
      <div className='bg-green-400 text-3xl font-bold p-7 rounded m-4 text-center'>
        <h1 className="text-3xl font-bold underline ">
          Hello world !!!!
        </h1>
      </div>

      <Card Title="Card" btnText='Visit'/>
      <Card Title="Utsav" />
    </>
  );
}

export default App;
```

### Card Component

```javascript
import React from 'react';
import Files from './files.jpg';

function Card({ Title = "Card Title", btnText = "Click" }) {
  return (
    <div className="m-3 max-w-sm rounded overflow-hidden shadow-lg relative">
      <div className="h-40">
        <img className="w-full blur-sm" src={Files} alt="Card Image" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <div className="bg-white bg-opacity-50 p-2 rounded-md text-center">
            <div className="font-bold text-xl">{Title}</div>
            <p className="text-black text-base">
              This is a description of the card. It can be about anything you want.
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-52 font-bold py-2 px-8 rounded">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
```

---

## Output 🎥

The app features:

1. **Styled Header**: A responsive, bold-styled header using Tailwind classes.
2. **Reusable Card Components**: Multiple card components showcasing dynamic properties like title and button text.

---

## 🔍 Detailed Documentation

For more information, including screenshots and further explanations, refer to **[Google Docs](https://docs.google.com/document/d/1ctpcrVYxu4TZ7CLbSXjdULtTosYhxsgeqypGkwC-bQY/edit?tab=t.dxwyycatrzn)**. 📑

GitHub Repository for this project: **[04_TailwindProps on GitHub](https://github.com/utsavvachhani/react-js-study/tree/main/04_tailwind-props)** 🔗

---

Enjoy designing beautiful UIs with Tailwind CSS! 🎉

