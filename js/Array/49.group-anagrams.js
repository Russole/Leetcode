/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const seen = {}, arr = [];
    for (let i = 0; i < strs.length; i++) {
        const index = strs[i].split('').sort().join('')

        if (seen[index]) {
            // console.log(seen[index])
            seen[index].push(strs[i])
        } else {
            seen[index] = [strs[i]]
        }
    }

    for (let i in seen) {
        arr.push(seen[i])
    }
    return arr
};
// @lc code=end

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

