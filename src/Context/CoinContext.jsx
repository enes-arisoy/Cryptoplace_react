import React, { createContext, useEffect, useState } from "react";
import api from "../Utils/api";

// context oluştur
const CoinContext = createContext();
const CoinContextProvider = ({ children }) => {
  // verileri alacağımız pariteyi belirlemek için state oluşturduk
  const [currency, setCurrency] = useState({
    id: "yhjMzLPhuIDl",
    symbol: "$",
  });

  const [allCoin, setAllCoin] = useState([]);
  const [error, setError] = useState(null);

  // api den verileri alacak fonk.
  const fetchAllCoin = () => {
    api
      .get(
        `/coins?referenceCurrencyUuid=${currency.id}&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`
      )
      .then((res) => setAllCoin(res.data.data.coins))

      .catch((err) => setError(err.message));
  };

  // sayfa yüklendiğinde api isteği atacak
  useEffect(() => {
    fetchAllCoin();
  }, [currency]);
  return (
    <CoinContext.Provider value={{ currency, setCurrency, allCoin, error }}>
      {children}
    </CoinContext.Provider>
  );
};

export { CoinContext, CoinContextProvider };
