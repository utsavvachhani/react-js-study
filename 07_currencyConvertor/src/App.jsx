import React, { useState } from "react";
import { InputBox } from "./Components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import uv from "../UV_logo.png";

function App() {
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

  return (
    <div className="w-full h-screen flex bg-black">
      <div className="relative w-1/2 h-full flex items-center justify-center">
        <div
            className="absolute inset-0 bg-cover bg-center blur-md"
            style={{ backgroundImage: `url('${uv}')` }}
        ></div>
        <div className="relative z-10 text-center text-white backdrop-blur-sm bg-black/50 p-5 rounded-lg">
            <h1 className="text-4xl font-bold">Currency Converter</h1>
            <p className="text-lg mt-2">Convert currencies effortlessly!</p>
        </div>
      </div>


      <div className="w-1/2 h-full flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(value) => setAmount(value)}
              selectCurrency={from}
            />
            <button
              type="button" 
              className="my-3 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-900"
              onClick={swap}
            >
              Swap
            </button>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountdisable
            />
            <button
              type="submit"
              className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-900"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
