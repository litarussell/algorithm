import { QuickSort } from '../DataStructure'

let list: Array<number> = [2,4,1,5,6,2,5,6,8,234,53,5,0]
// let list: Array<number> = [2,4,1,5,6]

const test: QuickSort = new QuickSort()

export default {
  name: '快速排序',
  test () {
    console.log('原序列', ...list)
    test.sort(list)
    console.log('排序后', ...list)
  }
}

// test.sort(list)
