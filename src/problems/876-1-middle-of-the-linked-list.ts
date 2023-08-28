import ListNode from './classes/ListNode'

/**
 * 876. Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */
function middleNode(head: ListNode | null): ListNode | null {
  let numberOfNodes = 0
  let current: ListNode | null

  current = head
  while (current) {
    numberOfNodes++
    current = current.next
  }

  current = head
  for (let step = 0; step < Math.floor(numberOfNodes / 2); step++) {
    current = current!.next
  }

  return current
}
