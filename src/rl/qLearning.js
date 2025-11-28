export function trainAgent() {
  // Fake reward for demo
  return Math.random() * 10;
}

export function getDynamicPrice(demand, inventory, oldPrice) {
  let newPrice = oldPrice + demand * 1.2 - inventory * 0.5;

  if (newPrice < 10) newPrice = 10;
  if (newPrice > 5000) newPrice = 5000;

  return newPrice;
}
