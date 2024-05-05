//write the function arrayAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal(i.e contain the same elements in the same order and false otherwise);
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((curVal, index) => curVal === arr2[index]); //check the each every charcter
};

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // output: true;
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));
//output : false;
console.log(arraysAreEqual([], [])); //output : true;
