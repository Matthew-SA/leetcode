// The Hamming distance between two integers is the number of positions at 
// which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let xorNum = x ^ y;
  let binaryNum = xorNum.toString(2);
  let count = 0;

  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === "1") count++;
  }

  return count;
};
