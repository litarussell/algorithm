import Heap from './Heap';

export default class MaxHeap extends Heap {
  constructor(size: number) {
    super(size);
  }
  compare(a: number, b: number) {
    return a < b ? true : false;
  }
}