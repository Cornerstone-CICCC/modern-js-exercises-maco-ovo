/*
One classic method for composing secret messages is called a square code. 
In this activity, we will be creating our own Square Code algorithm.

Square Code
- In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). 
For example, the sentence "If man was meant to stay on the ground god would have given us roots" 
is 54 characters long, once the spaces are removed, 
so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
- The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. 
- If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. 
If we use that for the number of characters on each line (the number of columns), 
then our text will be close to a square shape.

- The message is then coded by reading down the columns going left to right. 
For example, the message above is coded as:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

And that's the output of the algorithm. 
We can then reverse the process to decrypt the text and read the original message.

> Instruction
? Create a function named squareCode that will receive a message, 
? and return the secret square code version of the message.
*/

const squareCode = function (message) {

  message = message.split(" ").join("")
  let squareRoot = Math.ceil(Math.sqrt(message.length));
  let square = []
  for (let i=0; i<message.length; i+= squareRoot){
    
    chunck = message.slice(i, i+squareRoot);
    square.push(chunck);
  }
  
  let encoded = []
  for( let y=0; y < squareRoot; y++ ){
    let word = "";
    for ( let x=0; x < square.length; x++ ){
      if( square[x][y] ) {
        word += square[x][y];
      }
    } 
    encoded.push(word);
  }
  return encoded.join(" ")
};

console.log(squareCode("chill out")); // clu hlt io
console.log(squareCode("feed the dog")); // fto ehg ee dd
console.log(squareCode("have a nice day")); // hae and via ecy
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

module.exports = squareCode;





// in class //
const squareCode2 = function (message) {

  const clean = message.split(" ").join("")  // .replaceAll(" ","")
  let cols = Math.ceil( Math.sqrt(clean.length) );
  
  let matrix = [];
  for (let i = 0; i < clean.length; i+= cols){
    matrix.push( clean.slice(i, i+cols) );

  }
  const encoded = [];
  for (let col =0; col < cols; col++){
    let word = ""
    for (let row = 0; row < matrix.length; row++){
      // console.log(matrix[row][col])
      if (matrix[row][col]){
        word += matrix[row][col]
      }
    }
    encoded.push(word)
  }
  return encoded.join(" ")
};

// console.log(squareCode2("have a nice day")); 
// console.log(
//   squareCode2(
//     "if man was meant to stay on the ground god would have given us roots"
//   )
// );


/*
  Space / memory complexity: O(n) n is the size of input
  Time complexity: O(n) where n is size of input
   
*/ 