import React, {useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}
)
{
    const amountInputId = useId()

    return(
        <>
        <div class="w-full max-w-xl rounded-xl bg-white p-6 shadow-md">
  <div class="flex items-center justify-between text-gray-500">
    <label  htmlFor={amountInputId} class="text-base">{label}</label>
    <span class="text-base">Currency Type</span>
  </div>

  <div class="mt-3 flex items-center justify-between">
    <input
      id={amountInputId}
      type="number"
      min="0"
      
      class="w-1/2 bg-transparent text-lg font-medium text-gray-900 outline-none"
      placeholder="Amount"
      disabled={amountDisable}
      value={amount}
      onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    />

    <select
      class="rounded-lg bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-none cursor-pointer"
    value={selectedCurrency}
    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
    disabled={currencyDisable}
    >
        {currencyOption.map((currency) => (

      <option key={currency} value={currency}>{currency}</option>
        ))}
     
    </select>
  </div>
</div>
        </>
    )
}
export default InputBox