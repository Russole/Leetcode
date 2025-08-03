#
# @lc app=leetcode id=153 lang=python3
#
# [153] Find Minimum in Rotated Sorted Array
#

# @lc code=start
from typing import List


class Solution:
    def findMin(self, nums: List[int]) -> int:
        n=len(nums)
        l=0
        r=n-1
        while l<r:
            m=(l+r)//2
            if nums[m] > nums[r]:
                l=m+1
            else:
                r=m
        return nums[l]
        
# @lc code=end

a = Solution()
print(a.findMin([5,6,7,8,9,10,1,2,3,4]))

