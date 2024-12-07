/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const buildString = function (string) {
    const builtString = [];
    for (let p = 0; p < string.length; p++) {
        if (string[p] !== '#') {
            builtString.push(string[p]);
        } else {
            builtString.pop();
        }
    }

    return builtString;
}

var backspaceCompare = function (s, t) {
    const finalS = buildString(s);
    const finalT = buildString(t);

    if (finalS.length !== finalT.length) {
        return false
    } else {
        for (let p = 0; p < finalS.length; p++) {
            if (finalS[p] !== finalT[p]) {
                return false
            }
        }
    }

    return true;
};
// @lc code=end

