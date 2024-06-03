const employees = [
  {
    name: "Max Müller",
    city: "Berlin",
    position: "Software Engineer",
    salary: 60000,
  },
  {
    name: "Anna Meier",
    city: "Munich",
    position: "Project Manager",
    salary: 90000,
  },
  {
    name: "Lukas Schmidt",
    city: "Hamburg",
    position: "Designer",
    salary: 75000,
  },
  {
    name: "Sophie Schneider",
    city: "Cologne",
    position: "Developer",
    salary: 55000,
  },
  {
    name: "Emma Fischer",
    city: "Berlin",
    position: "Product Owner",
    salary: 95000,
  },
  {
    name: "Paul Weber",
    city: "Frankfurt",
    position: "Scrum Master",
    salary: 80000,
  },
];

console.log("-----1-----");
const result = employees.filter((employee) => employee.city === "Berlin");
console.log(result);

console.log("-----2-----");
const employeeNames = employees.map((employee) => employee.name.toUpperCase());
console.log(employeeNames);

console.log("-----3-----");
const sumOfSalary = employees.reduce(
  (acc, employee) => acc + employee.salary,
  0
);
const averageSalary = sumOfSalary / employees.length;
console.log(averageSalary.toFixed(2));

console.log("-----4-----");
const sortedBySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log(sortedBySalary);
