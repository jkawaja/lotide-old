//Test Code
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) return false;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) return false;
  }
  return true; 
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  let counter = 0;
  console.log()
  for (const character of sentence) {
    //if character in loop = ' ' skip it
    if (character === " ") { 
      counter++
      continue; }
    //checking to see if the character is in results
    if (!results[character]) {
      results[character] = [counter];
    } else {
      results[character].push(counter)
    }
    counter++
  }
  return results;
}
console.log(letterPositions("hello hello"));
//assertArraysEqual(letterPositions("hello").e, [1]);
//expected output: { h: [0], e: [1], l: [2, 3], o: [4] } 