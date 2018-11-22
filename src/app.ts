// import Test from './decorator';
import {MaxHeap, MinHeap, Selection, Insertion} from './DataStructure/index';

let list: Array<number> = [2,4,1,5,6,2,5,6,8,234,53,5,0];


console.log('---------------插入排序-----------------');
(new Insertion()).sort(list);
console.log(list);

list = [2,4,1,5,6,2,5,6,8,234,53,5,0];
console.log('---------------选择排序-----------------');
(new Selection()).sort(list);
console.log(list);

console.log('----------------堆排序-----------------');
let minHeap = new MinHeap(7);
let maxHeap = new MaxHeap(9);
maxHeap.create([1,6,9,4,10,0,5,8,7]);
maxHeap.test();
console.log('最大值', maxHeap.pop(), maxHeap.pop(), maxHeap.pop(), maxHeap.pop(), maxHeap.pop());
maxHeap.test();
console.log('-----------------')
minHeap.create([2,3,1,4,5,6,7]);
minHeap.test();
console.log('最小值', minHeap.pop(), minHeap.pop());
minHeap.test();