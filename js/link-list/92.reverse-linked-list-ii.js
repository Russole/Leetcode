/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetweenSolution = function (head, m, n) {
    let currentPos = 1, currentNode = head;
    let start = head;

    while (currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null, tail = currentNode;

    while (currentPos >= m && currentPos <= n) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (m > 1) {
        return head
    } else {
        return newList;
    }
};

var reverseBetween = function (head, left, right) {
    return reverseBetweenSolution(head, left, right);
};
// @lc code=end

