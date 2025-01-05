import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountdisable = false,
  currencyDisble = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-black p-5 rounded-lg text-sm flex flex-col text-white ${className}`}>
      <div className="w-full mb-3">
        <label htmlFor={amountInputId} className="text-gray-400 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-800 py-2 px-3 rounded-md text-white"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) => {
            const value = e.target.value.replace(/^0+(?!$)/, ""); 
            onAmountChange && onAmountChange(Number(value));
          }}
        />
      </div>
      <div className="w-full">
        <label className="text-gray-400 mb-2 inline-block">Currency Type</label>
        <select
          className="w-full rounded-md px-3 py-2 bg-gray-800 cursor-pointer outline-none text-white"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisble}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;