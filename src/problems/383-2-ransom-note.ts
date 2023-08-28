/**
 * 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  function getCharacterIndex(character: string): number {
    return character.charCodeAt(0) - 'a'.charCodeAt(0)
  }

  const characterCountList = new Array(26).fill(0)

  for (const character of magazine) {
    const index = getCharacterIndex(character)
    characterCountList[index]++
  }

  for (const character of ransomNote) {
    const index = getCharacterIndex(character)
    characterCountList[index]--

    if (characterCountList[index] < 0) {
      return false
    }
  }

  return true
}
