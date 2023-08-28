/**
 * 27. Remove Element
 * https://leetcode.com/problems/remove-element/
 */
function removeElement(nums: number[], val: number): number {
  let writeIndex = 0

  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== val) {
      nums[writeIndex] = nums[readIndex]
      writeIndex++
    }
  }

  return writeIndex
}
