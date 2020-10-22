import { MaxHeap, MinHeap } from '../src/code'
import { strictEqual, deepStrictEqual } from 'assert'

function generateRandomArray(length: Array<number>, range: Array<number>) {
	let len = generateNumber(length[0], length[1])
	let arr = new Array(len)
	for (let i = 0; i < len; i++) {
		arr[i] = generateNumber(range[0], range[1])
	}
	return arr
}

function generateNumber(a: number, b: number) {
	return Math.floor(Math.random() * (b - a + 1) + a)
}

describe('#heap.test.js', () => {

	describe('#MaxHeap()', () => {
		// before(() => {
		// console.log('-- 测试大堆 --')
		// console.log('大堆: ', arr, arr.length)
		// maxHeap.test()
		// })
		// after(() => console.log('大堆测试完成'))
		// beforeEach(() => {})
		// afterEach(() => {})

		let maxHeap = new MaxHeap()
		let arr = generateRandomArray([1, 20], [1, 10])
		maxHeap.create(arr)

		it('#maxHeap create()', () => strictEqual(maxHeap.length(), arr.length))
		it('#maxHeap insert()', () => {
			let maxHeap = new MaxHeap()
			maxHeap.insert(1)
			strictEqual(maxHeap.length(), 1)
		})
		it('#maxHeap pop() 应该返回最大值', () => strictEqual(maxHeap.pop(), Math.max(...arr)))
		it(`#maxHeap length()`, () => strictEqual(maxHeap.length(), arr.length - 1))

		it('#maxHeap 判空 应该为null', () => strictEqual(new MaxHeap().isEmpty(), true))
		it('#maxHeap 判空 应该为not null', () => strictEqual(new MaxHeap().insert(1).isEmpty(), false))

		it('#maxHeap 综合', () => {
			let maxHeap = new MaxHeap()
			let arr = generateRandomArray([1, 10], [1, 10])
			maxHeap.create(arr)
			let actual = [], expected = []
			let len = arr.length
			while (len > 0) {
				expected.push(maxHeap.pop(), maxHeap.length())
				let max = Math.max(...arr)
				let i = arr.indexOf(max)
				arr.splice(i, 1)
				actual.push(max, arr.length)
				len = arr.length
			}
			deepStrictEqual(expected, actual)
		})
	})

	describe('#MinHeap()', () => {
		// before(() => {
		// console.log('-- 测试小堆 --')
		// console.log('小堆: ', arr, arr.length)
		// minHeap.test()
		// })
		// after(() => console.log('小堆测试完成'))
		// beforeEach(() => {})
		// afterEach(() => {})

		let minHeap = new MinHeap()
		let arr = generateRandomArray([1, 20], [1, 10])
		minHeap.create(arr)

		it('#minHeap create()', () => strictEqual(minHeap.length(), arr.length))
		it('#minHeap insert()', () => {
			let minHeap = new MinHeap()
			minHeap.insert(1)
			strictEqual(minHeap.length(), 1)
		})
		it('#minHeap pop() 应该返回最大值', () => strictEqual(minHeap.pop(), Math.min(...arr)))
		it(`#minHeap length()`, () => strictEqual(minHeap.length(), arr.length - 1))

		it('#minHeap 判空 应该为null', () => strictEqual(new MinHeap().isEmpty(), true))
		it('#minHeap 判空 应该为not null', () => strictEqual(new MinHeap().insert(1).isEmpty(), false))

		it('#minHeap 综合', () => {
			let minHeap = new MinHeap()
			let arr = generateRandomArray([1, 10], [1, 10])
			minHeap.create(arr)
			let actual = [], expected = []
			let len = arr.length
			while (len > 0) {
				expected.push(minHeap.pop(), minHeap.length())
				let max = Math.min(...arr)
				let i = arr.indexOf(max)
				arr.splice(i, 1)
				actual.push(max, arr.length)
				len = arr.length
			}
			deepStrictEqual(expected, actual)
		})
	})

})