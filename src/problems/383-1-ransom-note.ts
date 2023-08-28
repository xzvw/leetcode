/**
 * 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  function constructMap(str: string) {
    const map = {}

    for (const char of str) {
      if (!(char in map)) {
        map[char] = 0
      }

      map[char]++
    }

    return map
  }

  const ransomNoteMap = constructMap(ransomNote)
  const magazineMap = constructMap(magazine)

  for (const key in ransomNoteMap) {
    if (!(key in magazineMap) || ransomNoteMap[key] > magazineMap[key]) {
      return false
    }
  }

  return true
}
