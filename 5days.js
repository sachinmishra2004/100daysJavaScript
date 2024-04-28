//write a function to sort an array of numbers in an ascending order

//todo requirementss
//the function should take an array of numbers as input
//it should return a new aaray with numbers soretd in asecnding order
//the original array should remain unchanged
//you are not allowed to use the bulit on sort() method.

const sortAscending = (arr) => {
  //   return arr.sort();
  //return arr.sort((a, b) => a - b);//[ 1, 3, 5, 8 ]
  return arr.sort((a, b) => b - a); //[ 8, 5, 3, 1 ]
};

console.log(sortAscending([5, 3, 1, 8])); //output :[1, 3,, 5, 8];
