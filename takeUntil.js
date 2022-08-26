//eqArrays Test
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) return false;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) return false;
  }
  return true; 
};

//assertArraysEqual Test
const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

//the code for takeUntil.js
const takeUntil = (array, callback) => {
  const results = [...array];
  let index = 0; 
  for (let item of array) {
    if (callback(item)) {
      results.splice(index, results.length - index)
    }
    index++;
    // results.splice(callback(item));
  }
  return results;
};

//callback will only take one value: the item of the array

//THE TESTS:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log(results2);

//EXPECTED TEST OUTPUT:
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]