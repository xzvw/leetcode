/**
 * 1342. Number of Steps to Reduce a Number to Zero
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */
function numberOfSteps(num: number): number {
  const str = num.toString(2)

  let oneCount = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      oneCount += 1
    }
  }

  return str.length - 1 + oneCount
}
