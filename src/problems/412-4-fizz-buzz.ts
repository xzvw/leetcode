/**
 * 412. Fizz Buzz
 * https://leetcode.com/problems/fizz-buzz/
 */
function fizzBuzz(n: number): string[] {
  let fizzCounter = 0
  let buzzCounter = 0
  const result: string[] = []

  for (let i = 1; i <= n; i++) {
    fizzCounter++
    buzzCounter++
    let str = ''

    if (fizzCounter === 3) {
      str += 'Fizz'
      fizzCounter = 0
    }

    if (buzzCounter === 5) {
      str += 'Buzz'
      buzzCounter = 0
    }

    if (str === '') {
      str = String(i)
    }

    result.push(str)
  }

  return result
}
