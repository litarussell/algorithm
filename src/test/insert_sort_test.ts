import { Insertion } from '../code'

let list: Array <number> = [2, 4, 1, 5, 6, 2, 5, 6, 8, 234, 53, 5, 0]

const insert: Insertion = new Insertion()

export default {
  name: '插入排序',
  test() {
    console.log('原序列', ...list)
    insert.sort(list)
    console.log('排序后', ...list)
  }
}