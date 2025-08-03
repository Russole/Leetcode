#
# @lc app=leetcode id=973 lang=python3
#
# [973] K Closest Points to Origin
#

# @lc code=start
import heapq
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        def dist(x,y):
            return x**2+y**2
        heap = []
        for x,y in points:
            d = dist(x,y)
            if len(heap) < k:
                heapq.heappush(heap,(-d,x,y))
            else:
                heapq.heappushpop(heap,(-d,x,y))
        return [(x,y)for d,x,y in heap]
# @lc code=end

