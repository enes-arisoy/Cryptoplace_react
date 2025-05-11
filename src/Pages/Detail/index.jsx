import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Utils/api";
import { CoinContext } from "../../Context/CoinContext";
import Info from "../../Components/Info";


import LineChart from "../../Components/Chart";
import millify from "millify";

const Detail = () => {
  // Context'e abone ol
  const { currency } = useContext(CoinContext);

  // url' deki coin id'sine eriş
  const { coinId } = useParams();

  // coin in geçmiş verileri için stateler
  const [historicalData, setHistoricalData] = useState([]);
  const [coinData, setCoinData] = useState([]);

  const getHistoricalData = () => {
    
    api
      .get(
        `/coin/${coinId}/history?referenceCurrencyUuid=${currency.id}&timePeriod=24h`
      )
      .then((res) => setHistoricalData(res.data.data.history))
      .catch((err) => console.log(err.message));
  };
  // coin in detay verisini alan fonksiyon
  const getCoinData = () => {
    api
      .get(
        `/coin/${coinId}?referenceCurrencyUuid=${currency.id}&timePeriod=24h`
      )
      .then((res) => setCoinData(res.data.data.coin))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getCoinData();
    getHistoricalData();
  }, []);

 
  

  // coin in fiyat geçmişi ve detay verileri için api'a istek at

  return (
    <div className="bg-[#0d0e2b] px-5 min-h-screen">
      {/* image & name */}
      <div className="flex flex-col items-center gap-5 py-24 mx-auto">
        <img className="size-30" src={coinData.iconUrl} alt="" />
        <p className="text-4xl font-bold text-[#ffcc00]">
          {coinData.name} ({coinData.symbol})
        </p>
      </div>
      {/* chart */}
      <div className="max-w-[700px] mx-auto">
        <LineChart historicalData={historicalData} />
      </div>

      {/* info */}
      <div className="max-w-[700px] mx-auto my-12 flex flex-col p-6 rounded-lg shadow-md bg-[#29294d]">
        <Info label="Piyasa Sıralaması" value={coinData.rank} />
        <Info
          label="Güncel Fiyat"
          value={`${currency.symbol} ${Number(coinData.price).toFixed(4)}`}
        />
        <Info
          label="Değişim"
          value={(coinData.change) + " %"}
        />
        <Info
          label="Market Değeri"
          value={`${currency.symbol} ${millify(parseInt(coinData.marketCap))}`}
        />
      </div>
    </div>
  );
};

export default Detail;
