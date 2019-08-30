import { MergeSort } from '../src/DataStructure'
import { strictEqual, deepStrictEqual } from 'assert'

function generateRandomArray (length: Array<number>, range: Array<number>) {
	let len = generateNumber(length[0], length[1])
	let arr = new Array(len)
	for (let i = 0; i < len; i++) {
		arr[i] = generateNumber(range[0], range[1])
	}
	return arr
}

function generateNumber (a : number, b : number) {
	return Math.floor(Math.random() * (b - a + 1) + a)
}

function test (num: number) {
  let list = [], arr = []
  for (let i = 0; i < num; i++) {
    let r = generateRandomArray([5, 20], [1, 10])
    list.push(r)
    arr.push(r.map(item => item))
  }
  return [list, arr]
}

describe('#merge.sort.test.js', () => {
    let merge = new MergeSort()

		it('归并排序', () => {
      let [list, arr] = test(5)
      for (let i = 0; i < list.length; i++) {
        merge.sort(list[i])
        deepStrictEqual(list[i], arr[i].sort((a, b) => a - b))
      }
    })
	
})