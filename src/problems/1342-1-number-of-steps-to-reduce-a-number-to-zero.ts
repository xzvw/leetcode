/**
 * 1342. Number of Steps to Reduce a Number to Zero
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */
function numberOfSteps(num: number): number {
  let count = 0

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num -= 1
    }

    count++
  }

  return count
}
