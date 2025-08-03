#
# @lc app=leetcode id=121 lang=python3
#
# [121] Best Time to Buy and Sell Stock
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
         # Time: O(n)
        # Space: O(1)
        min_price = float('inf')
        max_profit = 0        
        
        for price in prices:
            if price < min_price:
                min_price = price
            
            profit = price - min_price
        
            if profit > max_profit:
                max_profit = profit
                
        return max_profit
# @lc code=end

