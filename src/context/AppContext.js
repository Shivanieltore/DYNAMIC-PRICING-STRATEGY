import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Pricing States
  const [price, setPrice] = useState(100);
  const [demand, setDemand] = useState(5);
  const [inventory, setInventory] = useState(10);
  const [competitorPrice, setCompetitorPrice] = useState(95);
  const [baseCost, setBaseCost] = useState(60);
  const [seasonalMode, setSeasonalMode] = useState("Normal");

  // Chart Data
  const [chartData, setChartData] = useState([
    { time: "T0", price: 100, demand: 5, inventory: 10, profit: 40 }
  ]);

  // Profit Metrics
  const [priceUpdates, setPriceUpdates] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [maxProfit, setMaxProfit] = useState(0);

  // RL Agent States
  const [trainingSessions, setTrainingSessions] = useState(0);
  const [lastReward, setLastReward] = useState(null);

  return (
    <AppContext.Provider
      value={{
        // Pricing
        price, setPrice,
        demand, setDemand,
        inventory, setInventory,
        competitorPrice, setCompetitorPrice,
        baseCost, setBaseCost,
        seasonalMode, setSeasonalMode,

        // Chart
        chartData, setChartData,

        // Profits
        priceUpdates, setPriceUpdates,
        totalProfit, setTotalProfit,
        maxProfit, setMaxProfit,

        // RL agent
        trainingSessions, setTrainingSessions,
        lastReward, setLastReward,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
