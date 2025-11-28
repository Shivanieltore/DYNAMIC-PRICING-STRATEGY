🚀 Dynamic Pricing Strategy Using Reinforcement Learning

An AI-powered dynamic pricing engine that adjusts product prices in real time based on demand, inventory, competitor pricing, and seasonal trends.

📌 Overview

This project demonstrates how Reinforcement Learning (RL) can be used to build a self-learning, intelligent dynamic pricing system. The RL agent interacts with a simulated market environment and learns to optimize price based on profitability.

1.A React-based dashboard visualizes:

2.AI-generated dynamic price

3.Profit calculations

4.Price trend charts

5.RL training rewards

6.Real-time demand & inventory adjustments


📌 Features
🔹 AI-Powered Dynamic Pricing

Uses Reinforcement Learning to learn pricing strategies.

Adjusts price automatically based on demand, inventory, and competitor prices.

🔹 Interactive Dashboard

View current AI-generated price suggestions.

Monitor profit, max profit, number of price updates, and training sessions.

🔹 Price Analytics Visualization

Line chart displaying price and demand trends.

Auto-updates as market conditions change.

🔹 Reinforcement Learning Agent Panel

Train the RL agent using trial-and-error learning.

View training rewards and session count.

🔹 Real-Time Market Inputs

Dynamic sliders for demand and inventory.

Editable competitor pricing and base cost.

Seasonal mode selection (Normal, Festival, Off-Season).

🏗️ Tech Stack
Frontend

React.js

Tailwind CSS

Chart.js / React Chart.js

JavaScript (ES6+)

AI / Reinforcement Learning

Custom RL Environment

Q-Learning / DQN-based logic

Reward-based training loop

State Management

React Context API

🧠 How It Works

The RL agent observes the environment (demand, stock, competitor price).

It adjusts the price and receives a reward based on profit and behavior.

Through training, it learns the optimal pricing strategy.

The dashboard displays:

AI suggested price

Training results

Price trends

Real-time analytics

📊 Model Metrics (Summary)

Average Reward: ~6.8 / 10

Profit Improvement vs Static Pricing: +45%

Stable convergence after ~15–20 training sessions

Accurate response to demand, inventory, and competitor price changes

⚠️ Limitations

Uses simulated market data

Works for a single product only

No real-time API integration

Basic RL model (can be improved with advanced algorithms)

🔮 Scope for Future Work

Multi-product dynamic pricing

Integration with real e-commerce APIs

Advanced RL models (PPO, A3C, DDPG)

User authentication and cloud backend

More realistic customer behavior modeling
<img width="1841" height="879" alt="Screenshot 2025-11-28 153007" src="https://github.com/user-attachments/assets/a1aaf4b9-7cc1-4306-b3a7-66667fd913fb" />
<img width="1833" height="872" alt="Screenshot 2025-11-28 153016" src="https://github.com/user-attachments/assets/2dd1475c-f39e-4c55-87e4-9d7f8ab50d97" />
<img width="1839" height="878" alt="Screenshot 2025-11-28 153034" src="https://github.com/user-attachments/assets/8597e934-c0c3-4736-be67-83539d19e286" />
<img width="1861" height="873" alt="Screenshot 2025-11-28 153048" src="https://github.com/user-attachments/assets/d529b2e7-93d3-4b64-90da-4ffb3600e185" />

📁 Project Structure
frontend/
│── src/
│   ├── components/
│   ├── context/
│   ├── rl/
│   ├── utils/
│   ├── App.js
│   └── index.js
│── public/
│── package.json
│── tailwind.config.js

▶️ How to Run the Project Locally
cd frontend
npm install
npm start

👩‍💻 Author

Shivani Eltore
AI/ML & Full-Stack Developer

📝 License
MIT License © 2025 Shivani Eltore
