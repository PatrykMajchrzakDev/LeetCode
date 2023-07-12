// You are given an m X n integer grid accounts where
// accounts[i][j] is the amount of money ith customer has in the jth bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money the have in all their bank accounts
// The richest customer is the customer that has the maximum wealth.

// Constraints:
// m == accounts.length
// n == accounts[i].length
// 1 <= m, n<= 50
// 1 <= accounts[i][j] <= 100

// accounts = [[7,1,3], [2,8,7], [1,9,5]]
// output 17

const getMaxAmount = (arr) => {
  summedValues = arr.map((element) => {
    return element.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  });
  return Math.max(...summedValues);
};

// const xxx = (arr) => {
//   return arr.reduce((prev, curr) => {
//     return prev + curr;
//   });
// };
