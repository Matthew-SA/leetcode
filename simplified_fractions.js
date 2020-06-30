// Given an integer n, return a list of all simplified fractions between 0 and 1 
// (exclusive) such that the denominator is less-than-or-equal-to n. The fractions can be in any order.

 

// Example 1:

// Input: n = 2
// Output: ["1/2"]
// Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.
// Example 2:

// Input: n = 3
// Output: ["1/2","1/3","2/3"]
// Example 3:

// Input: n = 4
// Output: ["1/2","1/3","1/4","2/3","3/4"]
// Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".
// Example 4:

// Input: n = 1
// Output: []
 

Constraints:

1 <= n <= 100

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  if (n <= 1) return [];
  let result = [`1/${n}`];

  for (let i = 2; i < n; i++) {
    if (!isCommonFactor(i, n)) result.push(`${i}/${n}`);
  }

  return simplifiedFractions(n - 1).concat(result);
};

const isCommonFactor = (num1, num2) => {
  let cap = num1 >= num2 ? num1 : num2;

  for (let i = 2; i <= cap; i++) {
    if (num1 % i === 0 && num2 % i === 0) return true;
  }
  return false;
};
