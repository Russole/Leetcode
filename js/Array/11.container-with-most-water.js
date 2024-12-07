/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
    let maxArea = 0;
    p1 = 0;
    p2 = heights.length - 1;
    while (p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;

        maxArea = Math.max(maxArea, area);
        if (heights[p1] <= heights[p2]) {
            p1++;
        } else if (heights[p1] > heights[p2]) {
            p2--;
        }
    }
    return maxArea;
};
// @lc code=end

