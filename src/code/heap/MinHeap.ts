import Heap from './Heap';

export default class MinHeap extends Heap {
  constructor(size?: number) {
    super(size);
  }
  compare(a: number, b: number) {
    return a > b ? true : false;
  }
}