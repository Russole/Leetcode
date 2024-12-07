#
# @lc app=leetcode id=11 lang=python
#
# [11] Container With Most Water
#

# @lc code=start
class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        res = 0

        for l in range(0, len(height)):
            for r in range(l + 1, len(height)):
                area = (r - l) * min(height[l], height[r]) # 會選擇左右兩邊最小的原因：水位的面積高度只會到較低的那個高度
                res = max(res, area)
        return res
        
# @lc code=end
a =Solution()
a.maxArea([1,8,6,2,5,4,8,3,7])


