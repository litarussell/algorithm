export default abstract class Heap {
  private heap: Array < number > ;
  private count: number;

  constructor(size: number) {
    this.heap = new Array(size);
    this.count = 0;
  }

  // 返回true就要进行交换
  abstract compare(a: number, b: number): Boolean


  // 下沉
  private sink(k: number): void {
    let flag: number = k; // 标记
    let left: number = 2 * k + 1; // 左孩子
    let right: number = 2 * k + 2; // 右孩子

    if (left < this.count && this.compare(this.heap[flag], this.heap[left])) {
      flag = left;
    }

    if (right < this.count && this.compare(this.heap[flag], this.heap[right])) {
      flag = right;
    }
    if (flag != k) {
      this.swap(flag, k);
      this.sink(flag);
    }
  }
  // 上浮
  private swim(): void {
    let curPos: number = this.count; // 当前节点   
    let parentPos: number = Math.floor(curPos / 2); // 找到父节点
    while (curPos > 0 &&
      this.compare(this.heap[parentPos - 1], this.heap[curPos - 1])) {
      this.swap(parentPos - 1, curPos - 1);
      curPos = parentPos;
      parentPos = Math.floor(curPos / 2);
    }
  }
  // 交换
  private swap(a: number, b: number): void {
    let temp: number = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }


  create(arr: Array < number > ): void {
    for (let i = 0; i < this.heap.length && i < arr.length; i++) {
      this.insert(arr[i]);
    }
  }
  insert(v: number = 0) {
    if (this.count == 0) {
      this.heap[0] = v;
      this.count = 1;
    } else {
      this.heap[this.count++] = v; // 新插入的数据放到堆的最后
      this.swim(); // 上浮
    }
  }
  pop(): number {
    const max = this.heap[0];
    this.heap[0] = this.heap[--this.count];
    this.sink(0);
    return max;
  }

  isEmpty() {
    return this.count === 0;
  }
  length() {
    return this.count;
  }
  get(index: number) {
    return this.heap[index];
  }


  test() {
    for (let j = 0, n = 1; j < this.count; n *= 2) {
      let arr = [];
      for (let k = 0; k < n && j < this.count; j++, k++) {
        arr.push(this.heap[j])
      }
      console.log(...arr);
    }
  }
}