/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) { // i is offset index
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) { // repeat offset
            continue;
        }
        let lo = i + 1, hi = n - 1;
        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (sum === 0) {
                ans.push([nums[i], nums[lo], nums[hi]]);
                lo += 1;
                hi -= 1;
                while (lo < hi && nums[lo] === nums[lo - 1]) lo++; // if repeat lo, lo++
                while (lo < hi && nums[hi] === nums[hi + 1]) hi--; // if repeat hi, hi--
            } else if (sum < 0) {
                lo += 1;
                while (lo < hi && nums[lo] === nums[lo - 1]) lo++; // if repeat lo, lo++
            } else {
                hi -= 1;
                while (lo < hi && nums[hi] === nums[hi + 1]) hi--; // if repeat hi, hi--
            }
        }
    }
    return ans;
}
// @lc code=end

