/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let prev = dummy;

    let p1 = list1, p2 = list2;
    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            prev.next = p1;
            p1 = p1.next;
        } else {
            prev.next = p2;
            p2 = p2.next;
        }
        prev = prev.next;
    }

    prev.next = p1 !== null ? p1 : p2;

    return dummy.next;
};
// @lc code=end

