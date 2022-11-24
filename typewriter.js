/*
* typewriter.js - A program that outputs a provided sentence to make it look like
* its being typed on the computer!
*/

const sentence = "hello there from lighthouse labs";

// initialize count which will be used to increment the setTimeout delay.
let count = 0;

// Loop through each index of sentence
// I switched from using a for in, to for of loop so I could check the index of sentence to add the final "\n".
for (const key in sentence) {

  const word = sentence[key];
  // increment the delay by +50 ms for each iteration of the loop
  count += 50;
  setTimeout(() => {
    process.stdout.write(word);
    //check if we're at the last index and print "\n"
    if (Number(key) === sentence.length - 1) {
      console.log("\n");
    }
  }, count);
}

