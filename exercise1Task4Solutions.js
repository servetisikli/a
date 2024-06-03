let groceries = [
  { item: "tomatoes", price: 1.5 },
  { item: "milk", price: 0.9 },
  { item: "cheese", price: 3.2 },
  { item: "potatoes", price: 2.1 },
  { item: "pasta", price: 0.7 },
  { item: "bread", price: 1.8 },
];
function totalCost(array) {
  return array.reduce((acc, curr) => acc + curr.price, 0);
}

console.log(totalCost(groceries));
