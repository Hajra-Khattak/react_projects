import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}) // Fixed: serData → setData
  
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("API Response:", res);
        setData(res[currency]); // Fixed: now using setData correctly
      })
      .catch((err) => console.error("API Error:", err));
  }, [currency]);

  return data
}

export default useCurrencyInfo