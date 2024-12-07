/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
    }

    if (!ransomNote) return true;
    else return false;
};
// @lc code=end

