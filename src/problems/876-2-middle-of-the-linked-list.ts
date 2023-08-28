import ListNode from './classes/ListNode'

/**
 * 876. Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */
function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow!.next
  }

  return slow
}
