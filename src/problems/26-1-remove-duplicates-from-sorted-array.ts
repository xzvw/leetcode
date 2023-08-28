/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
function removeDuplicates(nums: number[]): number {
  let currentValue = nums[0]
  let readIndex = 1
  let writeIndex = 1

  for (; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== currentValue) {
      nums[writeIndex] = nums[readIndex]
      writeIndex++

      currentValue = nums[readIndex]
    }
  }

  return writeIndex
}
