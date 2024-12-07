/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let mini, maxi, res;
    mini = maxi = res = nums[0];
    for (let num of nums.slice(1)) {
        console.log(num)
        const currMini = Math.min(num, num * maxi, num * mini);
        const currMaxi = Math.max(num, num * maxi, num * mini);
        maxi = currMaxi;
        mini = currMini;
        res = Math.max(res, maxi);
    }
    return res;
};
// @lc code=end

maxProduct([-2, 0, -1]);

