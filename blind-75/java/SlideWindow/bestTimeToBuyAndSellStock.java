package SlideWindow;

public class bestTimeToBuyAndSellStock {
    public static void main(String[] args) {
        int[] prices = {7,1,5,3,6,4};
        int profit = 0, left = 0;
        for (int i = 1; i < prices.length; i++) {
            // 如果股價比前一天高
            if (prices[i] > prices[left]) {
                profit = Math.max(profit, prices[i] - prices[left]); // 紀錄最大值利潤，left 先不動，免得之後還有更大的 i
            } else {// 如果股價比前一天低，更新 left，讓 left 保持最低價
                left = i;
            }
        }
        System.out.println(profit);
    }
}
