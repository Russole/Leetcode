/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
};
// @lc code=end


containsDuplicate([1, 2, 3, 4])
