const sales = [
  { product: "Laptop", quantity: 2, price: 1200 },
  { product: "Mouse", quantity: 10, price: 25 },
  { product: "Keyboard", quantity: 5, price: 75 },
  { product: "Monitor", quantity: 3, price: 300 },
  { product: "Laptop", quantity: 1, price: 1200 },
  { product: "Mouse", quantity: 2, price: 25 },
  { product: "Keyboard", quantity: 1, price: 75 },
  { product: "Monitor", quantity: 2, price: 300 },
];

// Solution-1
console.log("-----Solution-1-----");
const productSalesAnalysis = sales.reduce((acc, curr) => {
  if (!acc[curr.product]) {
    acc[curr.product] = {
      totalQuantity: curr.quantity,
      totalRevenue: curr.quantity * curr.price,
    };
  } else {
    acc[curr.product].totalQuantity += curr.quantity;
    acc[curr.product].totalRevenue += curr.quantity * curr.price;
  }
  return acc;
}, {});

console.log(productSalesAnalysis);

// Solution-2
console.log("-----Solution-2-----");
const productSalesAnalysis2 = sales.reduce((acc, curr) => {
  const { product, quantity, price } = curr;
  if (!acc[product]) {
    acc[product] = { totalQuantity: 0, totalRevenue: 0 };
  }
  acc[product].totalQuantity += quantity;
  acc[product].totalRevenue += quantity * price;
  return acc;
}, {});

console.log(productSalesAnalysis2);
