/*
* typewriter.js - A program that console.logs a provided sentance to make it look like
* its being typed on the computer!
*/
 
 
/*
*
* Function Name - and a brief description of what it does
*
* @param {string} argument name - information it holds
* @param {string} argument name - information it holds
*
*/

const sentence = "hello there from lighthouse labs";

// initialize count which will be used to increment the setTimeout delay.
let count = 0;

for (const word of sentence) {
  count += 50;
  setTimeout(() => {
    process.stdout.write(word);
  }, count);

}



 
/* Test Cases */