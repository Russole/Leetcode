/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-z0-9]/gi, '') //除了非字母或數字的所有字符，其餘刪掉
        .toLowerCase()
        .split('')
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
};
// @lc code=end

