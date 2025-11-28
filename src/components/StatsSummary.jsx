import React, { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

function StatsSummary() {
  const { chartData } = useContext(AppContext);

  const stats = useMemo(() => {
    if (!chartData || chartData.length === 0) {
      return { lastPrice: 0, lastProfit: 0, updates: 0, maxProfit: 0 };
    }

    const last = chartData[chartData.length - 1];
    const updates = chartData.length - 1;

    const maxProfit = Math.max(...chartData.map((d) => d.profit || 0));

    return {
      lastPrice: last.price,
      lastProfit: last.profit || 0,
      updates,
      maxProfit,
    };
  }, [chartData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

      {/* Current Price */}
      <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
        <p className="text-sm text-slate-600 font-semibold">Current Price</p>
        <p className="text-3xl font-extrabold text-slate-800 mt-2">
          ₹{stats.lastPrice.toFixed(2)}
        </p>
      </div>

      {/* Last Profit */}
      <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
        <p className="text-sm text-slate-600 font-semibold">Last Total Profit</p>
        <p className="text-3xl font-extrabold text-green-600 mt-2">
          ₹{stats.lastProfit.toFixed(2)}
        </p>
      </div>

      {/* Price Updates */}
      <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
        <p className="text-sm text-slate-600 font-semibold">Price Updates</p>
        <p className="text-3xl font-extrabold text-slate-800 mt-2">
          {stats.updates}
        </p>
      </div>

      {/* Max Profit */}
      <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
        <p className="text-sm text-slate-600 font-semibold">Max Profit Achieved</p>
        <p className="text-3xl font-extrabold text-orange-500 mt-2">
          ₹{stats.maxProfit.toFixed(2)}
        </p>
      </div>

    </div>
  );
}

export default StatsSummary;
