const numOne = [4, 46, 32, 112, 54, 5];
const numTwo = [12, 33, 46, 98, 66, 101];
const numThree = [76, 7, 53, 90, 20, 78];
const numFour = [1, 88, 102, 122, 42, 2];

console.log("-----A-----");
function smallestToBigger(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(smallestToBigger(numOne));
console.log(smallestToBigger(numTwo));
console.log(smallestToBigger(numThree));
console.log(smallestToBigger(numFour));

console.log("-----B-----");
function biggerNumber(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
console.log(biggerNumber(numOne));
console.log(biggerNumber(numTwo));
console.log(biggerNumber(numThree));
console.log(biggerNumber(numFour));

console.log("-----C-----");
function sumNummber(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumNummber(numOne));
console.log(sumNummber(numTwo));
console.log(sumNummber(numThree));
console.log(sumNummber(numFour));
