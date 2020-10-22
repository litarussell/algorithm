/**
 * trie字典树
 */

export default class Trie {
  next = new Array(26)
  isEnd = false
  insert (s: string) {
    let cur = this
    for (let i = s.length - 1; i >= 0; i--) {
      let c = s.charCodeAt(i) - 97
      if (!cur.next[c]) {
        cur.next[c] = new Trie()
      }
      cur = cur.next[c]
    }
    cur.isEnd = true
  }
}
