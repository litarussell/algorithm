import Heap from './Heap.ts';

export default class MinHeap extends Heap  {  
    constructor(size: number) {
        super(size);
        super.heap = new Array(size);
        super.count = 0;
    }
    compare(a: number, b: number) {
        return a > b ? true : false;
    }
}