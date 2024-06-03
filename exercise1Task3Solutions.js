let people = [
  { firstname: "John", lastname: "Smith", age: 16 },
  { firstname: "David", lastname: "Bowie", age: 23 },
  { firstname: "Bryan", lastname: "Molko", age: 18 },
  { firstname: "Britney", lastname: "Spears", age: 17 },
  { firstname: "Aimme", lastname: "Winehouse", age: 27 },
  { firstname: "Kurt", lastname: "Cobain", age: 21 },
  { firstname: "Justin", lastname: "Bieber", age: 12 },
];

function onlyAdults(array) {
  return array.filter((arr) => arr.age >= 18);
}

console.log(onlyAdults(people));
