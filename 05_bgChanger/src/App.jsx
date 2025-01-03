import { useState } from "react";

function App() {
    const [ color , setColor] = useState("Black");
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}} 
      >
        <div className="flex bottom-12 fixed flex-wrap justify-center inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-200 px-3 py-2 rounded-full ">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() => setColor("Orange")}
            className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"
            style={{backgroundColor: "Orange"}}
            >Orange</button>
            <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Green"}}
            >Green</button>
            <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"
            style={{backgroundColor: "Yellow"}}
            >Yellow</button>
            <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Blue"}}
            >Blue</button>
            <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"
            style={{backgroundColor: "Pink"}}
            >Pink</button>
            <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Purple"}}
            >Purple</button>
            <button
            onClick={() => setColor("White")}
            className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"
            style={{backgroundColor: "White"}}
            >White</button>
            <button
            onClick={() => setColor("Gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Gray"}}
            >Gray</button>
            <button
            onClick={() => setColor("Gold")}
            className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"
            style={{backgroundColor: "Gold"}}
            >Gold</button>
            <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Black"}}
            >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
