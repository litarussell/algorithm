import Sort from './Sort'

/**
 * 归并排序
 */

export default class Merge extends Sort {
  constructor () {
    super()
  }
  sort (list: Array<number>) {
    let n = list.length
    let tmp: Array<number> = new Array(n)
    this.innerSort(list, 0, n - 1, tmp)
  }
  private innerSort (arr: Array<number>, left: number, right: number, tmp: Array<number>) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2)
      this.innerSort(arr, left, mid, tmp)
      this.innerSort(arr, mid + 1, right, tmp)
      this.merge(arr, left, mid, right, tmp)
    }
  }
  private merge (arr: Array<number>, left: number, mid: number, right: number, tmp: Array<number>) {
    let i = left, j = mid + 1, t = 0
    // 将两个有序序列按顺序排列到临时数组中
    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        tmp[t++] = arr[i++]
      } else {
        tmp[t++] = arr[j++]
      }
    }
    while (i <= mid) tmp[t++] = arr[i++]
    while (j <= right) tmp[t++] = arr[j++]
    t = 0
    while (left <= right) arr[left++] = tmp[t++]
  }
}
