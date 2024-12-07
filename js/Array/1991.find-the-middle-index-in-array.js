/*
 * @lc app=leetcode id=1991 lang=javascript
 *
 * [1991] Find the Middle Index in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    let preSum = [nums[0]]; // Taking a array with nums first elem as our new array first element.

    for (let i = 1; i < nums.length; i++) { // Loop for traversing the array and calculating the prefix sum of the array.
        preSum.push(preSum[preSum.length - 1] + nums[i]); // Taking previous elem of the preSum array and adding the nums current elem in it. 
    }

    console.log(preSum)
    for (let i = 0; i < nums.length; i++) { // Loop for traversing through prefix sum array. 
        let left = 0, right = 0; // Taking 2 variables for storing both side sum. 

        if (i !== 0) left = preSum[i - 1]; // As it said in the question, if middleIndex == 0, then we will keep the left = 0.

        if (i !== nums.length - 1) right = preSum[preSum.length - 1] - preSum[i]; // As it said in the question, if middleIndex == nums.length - 1 then right = 0.

        if (left === right) return i; // If at any index left sum and right sum is equal then return the index.
    }

    return -1; // if we dont have the right and left sum equivalent.
};
// @lc code=end

console.log(findMiddleIndex([1, -1, 4]))

