import Heap from './Heap.ts';

export default class MaxHeap extends Heap  {
    constructor(size: number) {
        super(size);
    }
    compare(a: number, b: number) {
        return a < b ? true : false;
    }
}