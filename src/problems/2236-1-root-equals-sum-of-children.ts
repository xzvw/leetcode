import TreeNode from './classes/TreeNode'

/**
 * 2236. Root Equals Sum of Children
 * https://leetcode.com/problems/root-equals-sum-of-children/
 */
function checkTree(root: TreeNode | null): boolean {
  return root!.val === root!.left!.val + root!.right!.val
}
