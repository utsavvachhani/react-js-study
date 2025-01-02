# 02_CustomReact Project 🌟

This project demonstrates the creation of a custom React-like implementation using basic JavaScript and React, while integrating anchor tags. 🚀

## Project Structure 🗂️

```
02_CustomReact/
├── 📁html&js/
│   ├── 📝customreact.js
│   ├── 📝index.html
├── 📝README.md
├── 📁vite-extraFunction/
│   ├── 📁node_modules/
│   ├── 📁public/
│   ├── 📁src/
├── 📝main.jsx
├── 📝.gitignore
├── 📝eslint.config.js
├── 📝index.html
├── 📝package-lock.json
├── 📝package.json
├── 📝README.md
├── 📝vite.config.js
```

## How It Works ⚙️

The project includes the following key components:

### File: `main.jsx` 📄

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
```

### Features ✨

1. **Custom React-Like Element**: Demonstrates creating a React-like element using `React.createElement`. 🛠️
2. **Nested Elements**: Includes anchor tags as nested elements for better understanding. 🔗
3. **Direct DOM Manipulation**: Renders directly to the DOM using `ReactDOM.createRoot`. 🌐

## How to Run 🏃‍♂️

1. Clone or download this repository. 📥
2. Navigate to the project directory:
   ```bash
   cd 02_CustomReact
   ```
3. Open `index.html` in your browser or use a live server. 🌟

## Contexts Studied 📘

- Learned about React element creation.
- Studied rendering techniques using `ReactDOM.createRoot`.
- Experimented with JSX and manual React-like implementation.

---

Enjoy exploring Custom React! 🎉

