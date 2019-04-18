/**
 * kmp字符串匹配算法
 */

export default function (str1: string, str2: string): number {
  if (str1.length < str2.length) return -1
  return match(str1, str2, next(str2), 0, 0)
}

function match (str1: string, str2: string, next: Array<number>, k: number, index: number): number {
  if (str1.length < str2.length) return -1
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] === str2[k]) k+=1
    else return match(str1.slice(1), str2, next, next[k], ++index)
  }
  return index
}

// 求解next数组 前后缀的最大长度
export function next (str: string): Array<number> {
  let news = new Array<number>(str.length)
  news[0] = -1
  for (let i = 1; i < str.length; i++) {
    // j为索引i之前字符串的前后缀最大长度对应的索引
    let j = news[i - 1]
    // 若匹配的串前后缀有公共部分, 也就是j >= 0, 且当前字符和i之前串的最大长度的后一个字符不匹配
    // 检查可匹配的串的前后缀的最大长度, 也就是检查匹配的前缀是否还有可匹配的前后缀
    while (str[j + 1] !== str[i] && j >= 0)
      j = news[j]
    
    // 若当前位置的字符与当前匹配串的前缀的后一位字符相同, 则next[i] = next[i-1] + 1
    if (str[j + 1] === str[i])
      news[i] = j + 1
    else
      news[i] = -1
  }
  return news.map(item => item + 1)
}
