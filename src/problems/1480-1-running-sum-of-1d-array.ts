/**
 * 1480. Running Sum of 1d Array
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */
function runningSum(nums: number[]): number[] {
  const result = new Array(nums.length)

  result[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i]
  }

  return result
}
