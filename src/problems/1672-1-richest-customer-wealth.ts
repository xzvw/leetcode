/**
 * 1672. Richest Customer Wealth
 * https://leetcode.com/problems/richest-customer-wealth/
 */
function maximumWealth(accounts: number[][]): number {
  let result = 0

  for (const customer of accounts) {
    const wealth = customer.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    )

    result = Math.max(result, wealth)
  }

  return result
}
