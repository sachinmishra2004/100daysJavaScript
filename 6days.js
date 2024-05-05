//write the function to determinte wheather a given string is a palindrome or not. A palindrome is a word ,pharse, number or others sequence of charchters that reads the same forward and backward, ignoring spaces punctuation and capitalization.

const isPalindrome = (str) => {
  str = str.toLowerCase();
  let r_str = str.split("").reverse().join("");
  console.log(r_str);

  return str === r_str ? true : false;
};

console.log(isPalindrome("naman")); //true
console.log(isPalindrome("racecar")); //Output true
console.log(isPalindrome("hello")); // output: false;
