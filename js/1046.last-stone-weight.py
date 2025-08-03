#
# @lc app=leetcode id=1046 lang=python
#
# [1046] Last Stone Weight
#

# @lc code=start
class Solution(object):
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
        def remove_largest():
            index_of_largest = stones.index(max(stones))
            return stones.pop(index_of_largest)

        while len(stones) > 1:
            stone_1 = remove_largest()
            stone_2 = remove_largest()
            if stone_1 != stone_2:
                stones.append(stone_1 - stone_2)

        return stones[0] if stones else 0
        
# @lc code=end

