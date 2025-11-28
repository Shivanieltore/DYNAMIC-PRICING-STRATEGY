import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { trainAgent } from "../rl/qLearning"; // RL LOGIC FILE

function RLTrainingPanel() {
  const {
    trainingSessions, setTrainingSessions,
    lastReward, setLastReward
  } = useContext(AppContext);

  const handleTrain = () => {
    const reward = trainAgent(); // returns random reward
    setLastReward(reward);
    setTrainingSessions(trainingSessions + 1);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl">
      <h2 className="text-3xl font-extrabold mb-6 text-slate-800">Reinforcement Learning Agent</h2>

      <button
        onClick={handleTrain}
        className="px-6 py-3 bg-purple-700 text-white rounded-lg text-lg font-semibold hover:bg-purple-800"
      >
        Train Agent
      </button>

      <div className="mt-6 text-lg">
        <p><b>Total Training Sessions:</b> {trainingSessions}</p>

        {lastReward !== null && (
          <p className="text-green-600 text-xl font-semibold mt-2">
            Latest Reward: {lastReward.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default RLTrainingPanel;
