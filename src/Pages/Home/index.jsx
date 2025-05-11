import React, { useState, useContext, useEffect } from "react";
import { CoinContext } from "../../Context/CoinContext";
import { IoMdSearch } from "react-icons/io";
import CoinItem from "../../Components/CoinItems";
import api from "../../Utils/api";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [coins, setCoins] = useState([allCoin]);

  useEffect(() => {
    setCoins(allCoin);
  }, [allCoin]);
  // render edilecek coin listesi için state

  // aranılan coin için api isteği atacak fonksiyon
  const searchCoin = (query) => {
    // api isteği at
    api
      .get(
        `/search-suggestions?referenceCurrencyUuid=${currency.id}&query=${query}`
      )
      .then((res) => {
        setCoins(res.data.data.coins);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sayfa yenileme engellendi

    // input içindeki değere eriş
    const query = e.target[0].value;
    searchCoin(query);
  };

  return (
    <div className="px-4">
      <div className="max-w-2xl mx-auto my-16 flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-3/4 text-[#e3e3e3] leading-7">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden"
        >
          <input
            className="flex-1 px-4 py-2 text-base text-black"
            type="search"
            placeholder="Search crypto..."
          />
          <button className="bg-[#7927ff] px-5 py-2 font-semibold hover:opacity-90">
            <IoMdSearch />
          </button>
        </form>
      </div>
      {/* list */}
      <div className="max-w-4xl mx-auto rounded-lg bg-[#443d3d] shadow-lg overflow-hidden mb-10">
        {/* info */}
        <div className="grid grid-cols-4 md:[0.5fr_2fr_1fr_1fr] max-md:grid-cols-3 p-4 bg-[#222] font-semibold">
          <p>#</p>
          <p>Coins</p>
          <p className="text-end">Price</p>
          <p className="hidden md:block text-end">24h Volume</p>
        </div>
        {/* coin */}
        {coins.map((item, key) => (
          <CoinItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
