import Sort from './Sort'

export default class Quick extends Sort {
  constructor () {
    super();
  }
  sort (list: Array<number>) : void {
    let n = list.length;
    if (!list || n === 0) return;
    this.QuickSort(list, 0, n - 1)
  }
  QuickSort (list: Array<number>, low: number, high: number) {
    if (low < high) {
      let mid: number = this.Partition(list, low, high)
      this.QuickSort(list, low, mid - 1)
      this.QuickSort(list, mid + 1, high)
    }
  }
  Partition (list: Array<number>, low: number, high: number): number {
    let p: number = list[low]
    while (low < high) {
      while (low < high && p < list[high]) high-- // 先和末尾的元素进行比较, 直到找到比p小的元素
      list[low] = list[high]  // 将比p小的元素赋值到数组前列
      while(low < high && p > list[++low]); // 接着从数组前面开始向后比较, 直到找到比p大的元素
      list[high--] = list[low] // 将这个比p大的元素赋值到数组末尾
    }
    list[low] = p
    return low
  }
}