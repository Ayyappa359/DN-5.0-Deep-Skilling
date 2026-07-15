public class FinancialForecast {

    // Recursive method to calculate future value
    static double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double currentValue = 10000;   // Initial investment
        double growthRate = 0.10;      // 10% annual growth
        int years = 5;

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        // Output
        System.out.println("Current Value : " + currentValue);
        System.out.println("Annual Growth Rate : " + (growthRate * 100) + "%");
        System.out.println("Years : " + years);
        System.out.printf("Predicted Future Value : %.2f%n", futureValue);

        // Analysis
        System.out.println("\n=== Recursion Explanation ===");
        System.out.println("Recursion is a technique where a method calls itself");
        System.out.println("until it reaches a base case. It simplifies problems");
        System.out.println("that can be divided into smaller, similar subproblems.");

        System.out.println("\n=== Time Complexity ===");
        System.out.println("Time Complexity : O(n)");
        System.out.println("Space Complexity : O(n) due to recursive call stack.");

        System.out.println("\n=== Optimization ===");
        System.out.println("1. Use an iterative loop to reduce space complexity to O(1).");
        System.out.println("2. Use memoization if recursive calls repeat the same calculations.");
        System.out.println("3. For compound growth, the direct formula");
        System.out.println("   Future Value = Present Value × (1 + r)^n");
        System.out.println("   can compute the result in constant time using Math.pow().");
    }
}