/**
 * BF字符串匹配算法
 */

export default function (str1: string, str2: string): number{
  if (str1.length < str2.length) return -1
  return match(str1, str2, 0)
}

// 递归匹配
function match (str1: String, str2: String, index: number): number {
  if (str1.length < str2.length) return -1
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) return match(str1.slice(1), str2, index+1)
  }
  return index
}
