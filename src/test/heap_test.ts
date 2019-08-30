import {MaxHeap, MinHeap} from '../code'

let minHeap = new MinHeap(7)
let maxHeap = new MaxHeap(9)

maxHeap.create([1,6,9,4,10,0,5,8,7])
minHeap.create([2,3,1,4,5,6,7]);

export default {
    name: '堆排序',
    test () {
        console.log('----- 大堆 -----')
        maxHeap.test();
        console.log('最大值', maxHeap.pop(), maxHeap.pop(), maxHeap.pop(), maxHeap.pop(), maxHeap.pop());
        maxHeap.test();
        console.log('----- 小堆 -----')
        minHeap.test();
        console.log('最小值', minHeap.pop(), minHeap.pop());
        minHeap.test();
    }
}