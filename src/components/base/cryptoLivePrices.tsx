import React from "react";

const CryptoCard = ({ coin }: any) => (
  <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-600 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-white font-bold text-lg">{coin.symbol}</h3>
        <p className="text-gray-500 text-sm">{coin.name}</p>
      </div>
      <div
        className={`p-2 rounded-lg ${coin.isUp ? "bg-green-900/20" : "bg-red-900/20"}`}
      >
        {/* Simple arrow icon placeholder */}
        <span className={coin.isUp ? "text-green-500" : "text-red-500"}>
          {coin.isUp ? "↗" : "↘"}
        </span>
      </div>
    </div>

    <div className="flex justify-between items-end">
      <span className="text-white text-xl font-semibold">₺{coin.price}</span>
      <span
        className={`text-sm font-medium ${coin.isUp ? "text-green-500" : "text-red-500"}`}
      >
        {coin.change}
      </span>
    </div>
  </div>
);

const CryptoLivePrice = () => {
  const cryptoData = [
    {
      id: 1,
      symbol: "BTC",
      name: "Bitcoin",
      price: "2.440.055,52",
      change: "+2.45%",
      isUp: true,
    },
    {
      id: 2,
      symbol: "ETH",
      name: "Ethereum",
      price: "144.773,75",
      change: "-1.23%",
      isUp: false,
    },
    {
      id: 3,
      symbol: "BNB",
      name: "Binance Coin",
      price: "18.502,12",
      change: "+3.67%",
      isUp: true,
    },
    {
      id: 4,
      symbol: "SOL",
      name: "Solana",
      price: "5.784,88",
      change: "-2.89%",
      isUp: false,
    },
    {
      id: 5,
      symbol: "XRP",
      name: "XRP",
      price: "18,79",
      change: "+1.45%",
      isUp: true,
    },
    {
      id: 6,
      symbol: "DOT",
      name: "Polkadot",
      price: "319,58",
      change: "-0.87%",
      isUp: false,
    },
    {
      id: 7,
      symbol: "SOL",
      name: "Solana",
      price: "5.784,88",
      change: "-2.89%",
      isUp: false,
    },
    {
      id: 8,
      symbol: "XRP",
      name: "XRP",
      price: "18,79",
      change: "+1.45%",
      isUp: true,
    },
    {
      id: 9,
      symbol: "DOT",
      name: "Polkadot",
      price: "319,58",
      change: "-0.87%",
      isUp: false,
    },
  ];
  return (
    <div className="bg-black mt-14!">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cryptoData.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoLivePrice;
