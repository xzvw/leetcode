/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 */
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  throw new Error('Should not execute this line!')
}
