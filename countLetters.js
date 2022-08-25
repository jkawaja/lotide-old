//Test Code
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function work
const countLetters = function (sentence) {
  const results = {};
  
  for (const character of sentence) {
    //character in loop = ' '
    if (character === " ") { 
      continue; }
    //checking to see if the character is in results
    if (!results[character]) {
      results[character] = 0;
    }
    //the item is now in results, increment by one
    results[character]++;
  }
  return results;
}
result1 = countLetters('lighthouse labs')
console.log(result1);
assertEqual(result1[' '], undefined);