/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0); //[0,0,0,0,0,0]

    dp[0] = 1;

    for (let i = 0; i < coins.length; i++) { // iterate the types of coin
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) {
                // dp[j] is the combinations for amount j for not using the current coin
                // dp[j - coins[i]] is is the combinations for using the current coin
                dp[j] = dp[j] + dp[j - coins[i]];
            }
        }
    }
    return dp[amount];
};
// @lc code=end

change(5, [1, 2, 5])