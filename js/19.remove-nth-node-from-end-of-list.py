#
# @lc app=leetcode id=19 lang=python
#
# [19] Remove Nth Node From End of List
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: Optional[ListNode]
        :type n: int
        :rtype: Optional[ListNode]
        """
        dummy = ListNode()
        dummy.next = head
        behind = ahead = dummy

        for i in range(n+1):
            ahead = ahead.next
        while(ahead):
            behind = behind.next
            ahead = ahead.next
        
        behind.next = behind.next.next
        return dummy.next
        
# @lc code=end

