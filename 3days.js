//Count Occurrences of Character

//write the function called countChar that takes two parameters: a string and a charcter to count.the function should return the number of times the specifed character appres in the string

//todo Contraints
//the function should be case-sensitive
//the function should be handle both lowercase and uppercase charcter

//the character parameter can be any printable ascii charcter (the function should be accept any charcter that is part of the ascii charcetr set and its printable;)
const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  totalCount = word.split("").reduce((accum, curChar) => {
    if (curChar === char) {
      accum++;
    }
    return accum;
  }, 0); //starting main uski value zero dedi
  return totalCount;
};

console.log(countChar("MissIsippI", "I"));
