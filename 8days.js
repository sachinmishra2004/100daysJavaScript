//write a function factorial that takes a non-negative integer num as input and returns its factorial. the factorial of non-negtaive n denoted as n! is the product of all postive integer less than or eaqaul to n the factorial of 0 is defined as 1;
const fact = (num) => {
  if (num == 0 || num == 1) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    //console.log(i);
    fact = fact * i;
  }
  return fact;
};

console.log(fact(5));
console.log(fact(3));
