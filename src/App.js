import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import PriceChart from "./components/PriceChart";
import RLTrainingPanel from "./components/RLTrainingPanel";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex min-h-screen bg-slate-100">

          {/* Sidebar */}
          <Sidebar />

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 p-10 overflow-y-auto">

            <Routes>

              {/* HOME PAGE (SHOW TITLE HERE) */}
              <Route
                path="/"
                element={
                  <>
                    {/* PAGE TITLE FIXED */}
                    <h1 className="text-4xl font-extrabold text-center mb-10 text-slate-800 tracking-wide">
                      Dynamic Pricing Strategy using Reinforcement Learning
                    </h1>

                    {/* DASHBOARD CONTENT */}
                    <Dashboard />
                  </>
                }
              />

              {/* RL AGENT PAGE */}
              <Route
                path="/rl-agent"
                element={
                  <>
                    <h1 className="text-4xl font-extrabold text-center mb-8 text-slate-800">
                      Reinforcement Learning Agent
                    </h1>
                    <RLTrainingPanel />
                  </>
                }
              />

              {/* PRICE ANALYTICS PAGE */}
              <Route
                path="/price-analytics"
                element={
                  <>
                    <h1 className="text-4xl font-extrabold text-center mb-8 text-slate-800">
                      Price & Profit Analytics
                    </h1>
                    <PriceChart />
                  </>
                }
              />

            </Routes>

          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
