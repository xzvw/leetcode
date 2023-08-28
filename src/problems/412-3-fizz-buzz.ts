/**
 * 412. Fizz Buzz
 * https://leetcode.com/problems/fizz-buzz/
 */
function fizzBuzz(n: number): string[] {
  const mapping = {
    3: 'Fizz',
    5: 'Buzz',
  }

  const divisors = [3, 5]

  const result: string[] = []

  for (let i = 1; i <= n; i++) {
    let str = ''

    for (const divisor of divisors) {
      if (i % divisor === 0) {
        str += mapping[divisor]
      }
    }

    if (str === '') {
      str = String(i)
    }

    result.push(str)
  }

  return result
}
