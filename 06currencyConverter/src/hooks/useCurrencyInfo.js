import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res) => res.json())
    .then((resData) => setData(resData[currency]));
    console.table(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;