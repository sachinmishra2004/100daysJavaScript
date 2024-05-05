//write a function findmax that takes an array of numbers as input and returns the maximum number in the array

// const findmax = (arr) => {
//   const max = INT_MIN;
//   const f1 = arr[0];
//   for (let i = 0; i < arr.size(); i++) {
//     if (arr[i] > f1) {
//       max = arr[i];
//       f1 = arr[i];
//     }
//   }
//   return max;
// };

const findmax = (arr) => {
  console.log(...arr);
  return Math.max(...arr);
};

//example usage
console.log(findmax([1, 5, 3, 9, 2])); // output = 9
console.log(findmax([-10, -5, -3, -9, -2])); // output = -2
console.log(findmax([5])); // output = 5

//another function to achive this using js
//Math.max(1, 2, 34, 5); //output is = 34;
