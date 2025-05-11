import React, { useContext } from "react";

import { CoinContext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

const CoinItem = ({ item }) => {
  // context e abone ol
  const { currency } = useContext(CoinContext);

  return (
    <Link
      to={`/coin/${item.uuid}`}
      className="grid grid-cols-4  max-md:grid-cols-3 p-4 border-b border-[#757373] hover:bg-[#323232] transition duration-300 cursor-pointer"
    >
      {/* market_cap_rank */}
      <p>{item.rank}</p>
      {/* Name & symbol */}
      <div className="flex items-center gap-2">
        <img className="size-6" src={item.iconUrl} alt={item.name} />
        <span className="font-semibold">{item.name}</span>
      </div>
      {/* current_price */}
      <p className="text-end">
        {currency.symbol} {Number(item.price).toFixed(2)}
      </p>
      {/* price_change_24h */}
      <p
        className={`hidden md:block text-end ${
          item.change > 0 ? "text-green-500" : "text-red-400"
        }`}
      >
        {item.change} %
      </p>
    </Link>
  );
};

export default CoinItem;
