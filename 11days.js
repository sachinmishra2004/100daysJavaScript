//write the function that takes a number as input and retunrs the sum of digits
const sumofDigits = (num) => {
  let arr = Array.from(String(num), Number); // that number converted into number into string into Number;
  console.log(arr);
  return arr.reduce((accum, curElem) => (accum += curElem), 0);
};

console.log(sumofDigits(1234)); // output -10
console.log(sumofDigits(4321)); //output - 10
console.log(sumofDigits(123456)); //output:21
