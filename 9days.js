//Calcualte the average

//write the function called calculateAverage that takes an array of numbers as input ans returns the average of those numbers

//your function

//accept an array of numbers as input
//calculate the sum of all the numbers in array
//divide the sum by the total number od elements in the array to find the average
//return the calculated average

const calculateAverage = (arr) => {
  let total = arr.reduce((accum, curElem) => accum + curElem, 0); //reduce method used for adding numbers in array.
  //console.log(total);
  return total / arr.length; // 6.25
};

console.log(calculateAverage([5, 10, 2, 8])); //output = 6;
