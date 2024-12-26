/*
 * @lc app=leetcode id=704 lang=java
 *
 * [704] Binary Search
 */

// @lc code=start
class Solution {
    public int search(int[] nums, int target) {
        int start = 0; // 起點位置
        int end = nums.length-1; // 終點位置
        
        while (start <= end ){
            int middle = start + (end-start)/2; // 中間值
            if (target > nums[middle]){ // 目標值 > 陣列中間值 
                start = middle + 1; // 重新定義起點，下次回圈從新的起點開始就好 (因為目標值一定比自己大，要不包含 middle 自己)
            }else if (target < nums[middle]){ // 目標值 < 陣列中間值 
                end = middle - 1; // 重新定義終點，下次回圈找到新的終點就好 (因為目標值一定比自己小，要不包含 middle 自己)
            }else { // 目標值 = 陣列中間值
                return middle; // 找到答案，回傳中間值索引
            }
        }
        return -1; // 沒有這個數回傳 -1
    }
}
// @lc code=end

