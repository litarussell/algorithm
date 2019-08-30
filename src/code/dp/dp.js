var re

// 动态规划，解决硬币问题。有1元、3元、5元面值的硬币若干，要凑到11元需要最少几个硬币？
// 状态：F[n] 表示凑到n元需要最少的硬币数
// 状态传转移方程：F[n] = min{1 + F[n-1], 1 + F[n-3], 1 + F[n-5]}
function coin(n) {
  var re = [0],
    i = 1,
    tem, v
  for (; i <= n; i++) {
    tem = []
    for (v of [1, 3, 5]) {
      if (i - v >= 0)
        tem.push(re[i - v] + 1)
    }
    re.push(Math.min(...tem))
  }
  return re
}
// re = coin(11)
// console.log(...re)

// 有一段长长的钢条可以切断成若干节来卖长度为0-10的刚条单独卖的价格为：p = [0,1,5,8,9,10,17,17,20,24,30]
// 问长度为n的刚条，最好的切割方法是什么？
// 状态：F[n] 表示长度为n的钢条可以卖的最高价格
// 状态传转移方程：F[n] = max{p[m] + F[n-m]}, 0 < m < p.length, n - m >= 0
function cut(m) {
  var re = [0],
    p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30],
    i = 1,
    j,
    tem
  for (; i <= m; i++) {
    tem = []
    for (j = 1; j < p.length; j++) {
      if (i - j >= 0)
        tem.push(re[i - j] + p[j])
    }
    re.push(Math.max(...tem))
    console.log(...re)
  }
  return re
}
// re = cut(20)
// console.log(...re)

// 一个序列有 N 个数： A[1],A[2],…,A[N] ，求出最长非降子序列的长度。
// 状态： d[i] 表示 i 长度的序列最长非降子序列的长度。
// 状态转移方程： d[i] = max{1, d[j] + 1} ,其中 j < i, A[j] <= A[i]
function LIS(arr) {
  var re = [0],
    n = arr.length,
    i = 1,
    pre, cur, temp
  for (; i <= n; i++) {
    cur = i - 1
    temp = [1]
    for (pre = cur - 1; pre >= 0; pre--) {
      if (arr[pre] < arr[cur])
        temp.push(re[pre + 1] + 1)
    }
    re.push(Math.max(...temp))
    console.log(...re)
  }
  return Math.max(...re)
}
// re = LIS([1,2,5,4,3,2,1,7,8,3,5,6,8,2,4,6,2,4])
// re = LIS([2,5,3,4,1,7,2])
re = LIS([
  88, 4, 24, 82, 86, 1, 56, 74, 71,
  9, 8, 18, 26, 53, 77, 87, 60, 27,
  69, 17, 76, 23, 67, 14, 98, 13, 10, 83, 20,
  43, 39, 29, 92, 31, 0, 30, 90, 70, 37, 59
])
console.log(re)