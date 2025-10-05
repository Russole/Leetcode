package Array;

/*
Solution : Prefix Array * Suffix Array = Answer
*/
public class productOfArrayExceptSelf {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        int[] prefixProduct = new int[nums.length];
        prefixProduct[0] = 1; // 定義 nums[0] prefix 為 1
        for (int i = 1; i < nums.length; i++) {
            prefixProduct[i] = prefixProduct[i-1] * nums[i-1]; // i 前一個 prefix * i 前一個數值
        }

        int suffixProduct = 1; // 定義 nums[-1] prefix 為 1
        for (int i = nums.length-1; i >= 0; i--) {
            prefixProduct[i] = prefixProduct[i] * suffixProduct; // i 的 prefix * i 的 suffix
            suffixProduct = suffixProduct * nums[i]; // 更新 suffix 讓其他 i-1 使用
        }

        System.out.println(suffixProduct);
    }
}
