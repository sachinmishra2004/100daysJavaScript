// you are required to implement a fucntion generateHash that generate a hash tag from a given string the hash tag shoulbe be constructed as follows

//the input string should be converted into a hash tag where each word is cappitizlied and contcatend togahter without spcaces

//if the length of input string is greater then 280 charcter on if the input is empty or contains only whitespaces the function should be return false;

//otherwise a function should be return the genentred hash tag prefixed with #
const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  //trim use for remove the white space from bith sides
  //slice to use for baki part string ka kat do

  str = str.split(" "); //it is convtered into like this [ 'my', 'name', 'is', 'thapa', 'technical' ]
  str = str.map(
    (curElem) => curElem.replace(curElem[0], curElem[0].toUpperCase()) //[ 'My', 'Name', 'Is', 'Thapa', 'Technical' ]
  );

  str = `#${str.join("")}`; //only simple case join My,Name,Is,Thapa,Technical ish kind of ayega

  console.log(str); //#MyNameIsThapaTechnical
};

console.log(generateHash("my name is thapa technical"));
//o/p =>#MyNameIsTechnical

// another methods// (curElem) => curElem.charAt(0).toUpperCase() + curElem.slice(1)
// );
