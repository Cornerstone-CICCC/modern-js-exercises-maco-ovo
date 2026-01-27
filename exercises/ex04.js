/*
In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
? Create a function named instructorWithLongestName that will receive an array of instructor objects, 
? and return the object that has the longest name. 
? If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = function (instructors) {
  let longestElement = instructors[0];
  for (let i = 1; i < instructors.length; i++) {
    // console.log('i', i);
    if ( instructors[i].name.length > longestElement.name.length ){
      longestElement = instructors[i];
    }
  }
  return longestElement;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "Mobile" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); //{name: "Jeremiah", course: "Web"}
console.log(
  instructorWithLongestName([
    { name: "111", course: "Mobile" },
    { name: "222222", course: "Web" },
    { name: "3333333", course: "Web" },
    { name: "44444444", course: "Web" },
  ])
); //{name: "Jeremiah", course: "Web"}

// console.log(
//   instructorWithLongestName([
//     { name: "Matthew", course: "Web" },
//     { name: "Davidsdajkfewijfi", course: "Mobile" },
//     { name: "LONGGGGGGGgggggggggg", course: "Mobile" },
//     { name: "Domascus", course: "Web" },
//   ])
// ); //{name: "Domascus", course: "Web"}

module.exports = instructorWithLongestName;
