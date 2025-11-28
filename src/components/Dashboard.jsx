import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const {
    price, setPrice,
    demand, setDemand,
    inventory, setInventory,
    competitorPrice, setCompetitorPrice,
    baseCost, setBaseCost,
    seasonalMode, setSeasonalMode,
    setChartData,
    priceUpdates, setPriceUpdates,
    totalProfit, setTotalProfit,
    maxProfit, setMaxProfit
  } = useContext(AppContext);

  const updatePrice = () => {
    let newPrice = baseCost + demand * 2 - inventory * 0.5;

    if (seasonalMode === "Festival") newPrice += 20;
    if (seasonalMode === "Off-Season") newPrice -= 15;

    if (competitorPrice < newPrice) newPrice -= 5;
    if (newPrice < baseCost) newPrice = baseCost + 2;

    const profit = newPrice - baseCost;

    setPrice(newPrice);
    setPriceUpdates(priceUpdates + 1);
    setTotalProfit(totalProfit + profit);
    if (profit > maxProfit) setMaxProfit(profit);

    setChartData((prev) => [
      ...prev,
      {
        time: `T${prev.length}`,
        price: newPrice,
        demand,
        inventory,
        profit,
      },
    ]);
  };

  return (
    <div className="p-8">

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-600 text-lg font-semibold">Current Price</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">
            ₹{price.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-600 text-lg font-semibold">Last Total Profit</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">
            ₹{totalProfit.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-600 text-lg font-semibold">Price Updates</h3>
          <p className="text-3xl font-bold mt-2 text-indigo-600">
            {priceUpdates}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-600 text-lg font-semibold">Max Profit Achieved</h3>
          <p className="text-3xl font-bold mt-2 text-orange-600">
            ₹{maxProfit.toFixed(2)}
          </p>
        </div>
      </div>

      {/* AI PRICE CONTROL PANEL */}
      {/* AI PRICE CONTROL PANEL */}
<div className="bg-white p-8 rounded-xl shadow-lg">
  <h2 className="text-3xl font-extrabold mb-6">AI Price Control Panel</h2>

  <p className="text-xl font-semibold">
    Current AI Suggested Price:{" "}
    <span className="text-green-600 text-3xl font-extrabold">
      ₹{price.toFixed(2)}
    </span>
  </p>

  <p className="text-gray-600 text-sm mb-6 mt-2">
    Adjust demand, inventory, competitor price and seasonal mode, then click 
    <span className="font-semibold"> Update Price </span> 
    to see how the AI reacts.
  </p>


        {/* Demand */}
        <label className="font-semibold text-lg">
          Demand Level: {demand}
        </label>
        <input
          type="range"
          min={1}
          max={10}
          value={demand}
          onChange={(e) => setDemand(Number(e.target.value))}
          className="w-full mt-2 mb-6"
        />

        {/* Inventory */}
        <label className="font-semibold text-lg">
          Inventory Level: {inventory}
        </label>
        <input
          type="range"
          min={1}
          max={20}
          value={inventory}
          onChange={(e) => setInventory(Number(e.target.value))}
          className="w-full mt-2 mb-6"
        />

        {/* Base Cost + Competitor Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold text-lg">Base Cost per Unit (₹)</label>
            <input
              type="number"
              value={baseCost}
              onChange={(e) => setBaseCost(Number(e.target.value))}
              className="w-full p-3 rounded border mt-2"
            />
          </div>

          <div>
            <label className="font-semibold text-lg">Competitor Price (₹)</label>
            <input
              type="number"
              value={competitorPrice}
              onChange={(e) => setCompetitorPrice(Number(e.target.value))}
              className="w-full p-3 rounded border mt-2"
            />
          </div>
        </div>

        {/* Seasonal Mode */}
        <div className="mt-6">
          <label className="font-semibold text-lg">Seasonal Pricing Mode</label>
          <select
            value={seasonalMode}
            onChange={(e) => setSeasonalMode(e.target.value)}
            className="w-full p-3 rounded border mt-2"
          >
            <option>Normal</option>
            <option>Festival</option>
            <option>Off-Season</option>
          </select>
        </div>

        <button
          onClick={updatePrice}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700"
        >
          Update Price
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
