// write the function called checkTringleType that takes three parametres repsenting the lengths of the sides of a tringle. the function shold be return a string indicating the type of tringle: "equilateral" , "isosceles->sumduibahu" , or scalene -> bhishum kaod bala".

//todo
//if all three sides are of equal length , return "equilateral",
//if all two sides are of equal length , return "isosceles",
//if all two sides are of equal length , return " scalene",

const checkTringleType = (a, b, c) => {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

console.log(checkTringleType(3, 3, 5)); //equilateral
console.log(checkTringleType(3, 4, 3)); //isosceles
console.log(checkTringleType(5, 8, 6)); // scalene
