/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 */
function twoSum(nums: number[], target: number): number[] {
  const numToIndexMap = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    if (complement in numToIndexMap) {
      return [numToIndexMap[complement], i]
    }

    numToIndexMap[num] = i
  }

  throw new Error('Should not execute this line!')
}
