#
# @lc app=leetcode id=167 lang=python3
#
# [167] Two Sum II - Input Array Is Sorted
#

# @lc code=start
from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        n = len(numbers)
        l = 0
        r = n-1

        while l<r:
            summ = numbers[l] + numbers[r]
            if summ == target:
                return [l+1,r+1]
            elif summ<target:
                l+=1
            else:
                r-=1
        
# @lc code=end

