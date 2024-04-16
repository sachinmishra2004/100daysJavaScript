//write the function of the find largestword that takes a string as input and retunrs the longest word in string if there as multiple largest word return the first one -encountered---

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    //remove the white space from the given string
    return false;
  }

  words = str.split(" "); // it conveted into string to array with inverted code " " like this
  words = words.sort((a, b) => a.length - b.length); //camparison function or length ke hisab se sort kar dega ok
  console.log(words);
  return words.at(-1); //je revrese se string ko uthega ok
  //return words[0];

  //   return (
  //     words.reduce((accum, curWord) =>
  //       curWord.length > accum.length ? curWord : accum
  //     ),
  //     ""
};

console.log(
  findLongestWord(
    "watch Thapa Tecnhical javascriptjwjwiwjigjwj course on youtube"
  )
);
