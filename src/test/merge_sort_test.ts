import { MergeSort } from '../code'

let list: Array<number> = [8, 4, 5, 7, 1, 3, 6, 2]

const merge: MergeSort = new MergeSort()

export default {
  name: '归并排序',
  test () {
    console.log('原序列:', ...list)
    merge.sort(list)
    console.log('排序后:', ...list)
  }
}
