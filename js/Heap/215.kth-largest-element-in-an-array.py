#
# @lc app=leetcode id=215 lang=python3
#
# [215] Kth Largest Element in an Array
#

# @lc code=start
import heapq
from typing import List
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        for i in range(len(nums)):
            nums[i] = -nums[i] # Max Heap

        heapq.heapify(nums)

        for _ in range(k-1):
            heapq.heappop(nums)

        return -heapq.heappop(nums)
	# Max Heap of size n
        # Time: O(n + k log n)
        # Space: O(1)
# @lc code=end

