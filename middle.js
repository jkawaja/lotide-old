//test/ASSERTION FUNCTIONS
const eqArrays = function (arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) return false;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) return false;
  }
  return true;
};

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let evenEle = array.length % 2 === 0;
  if (array.length <= 2) {
    return [];
  }
  if (!evenEle) {
    return [array[Math.floor(array.length / 2)]]
  }
  const second = (array.length / 2)
  return [array[second - 1], array[second]];
};

//TEST MATERIAL
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]