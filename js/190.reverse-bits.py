#
# @lc app=leetcode id=190 lang=python3
#
# [190] Reverse Bits
#

# @lc code=start
class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        for i in range(32):
            bit = (n>>i)&1 # 右移，拿bit
            res = res|(bit<<(31-i)) # 左移，assign bit
        return res
        
        
# @lc code=end


a = Solution()
print(a.reverseBits(2))

# print(0|(1<<30))
# print(2147483648|(1<<30))

