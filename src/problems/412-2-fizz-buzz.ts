/**
 * 412. Fizz Buzz
 * https://leetcode.com/problems/fizz-buzz/
 */
function fizzBuzz(n: number): string[] {
  const result: string[] = []

  for (let i = 1; i <= n; i++) {
    let str = ''

    if (i % 3 === 0) {
      str += 'Fizz'
    }

    if (i % 5 === 0) {
      str += 'Buzz'
    }

    if (str === '') {
      str = String(i)
    }

    result.push(str)
  }

  return result
}
