import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen flex flex-col justify-between shadow-xl">

      <div>
        <div className="px-6 py-6 border-b border-slate-700">
          <h1 className="text-2xl font-extrabold tracking-wide">Dynamic Pricing AI</h1>
        </div>

        <div className="mt-6 px-4">
          <NavLink to="/" className="block px-4 py-3 rounded-lg mb-2 hover:bg-slate-800 font-semibold">
            📊 Dashboard
          </NavLink>

          <NavLink to="/price-analytics" className="block px-4 py-3 rounded-lg mb-2 hover:bg-slate-800 font-semibold">
            📈 Price Analytics
          </NavLink>

          <NavLink to="/rl-agent" className="block px-4 py-3 rounded-lg mb-2 hover:bg-slate-800 font-semibold">
            🤖 RL Agent
          </NavLink>
        </div>
      </div>

      <div className="px-6 py-4 text-xs text-slate-500 border-t border-slate-700">
        Project: RL Dynamic Pricing
      </div>
    </div>
  );
}

export default Sidebar;
