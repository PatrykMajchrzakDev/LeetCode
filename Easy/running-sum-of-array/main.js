// Given an array nums. We define a running sum of an array
// as runningSum[i] = sum(nums[0]...nums[i])
// Constraints:
// The number of nodes in a list is in range [1, 1000]
// The value of each element in the array is in the range [-10^6, 10^6]

// Example:
// Input = [3,1,2,10,1]
// Output: [3,4,6,16,17]

const runningSum = (arr) => {
  let result = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = 0;
    for (let j = 0; j <= i; j++) {
      total += arr[j];
    }
    result.push(total);
  }
  return result;
};

//And using ES6 - reduce
const runningSum2 = (arr) => {
  let total = 0;
  return arr.reduce((prev, curr) => {
    total += curr;
    prev.push(total);
    return prev;
  }, []);
};

// Or map
const runningSum3 = (arr) => {
  let total = 0;
  return arr.map((number) => {
    total += number;
    return total;
  });
};
