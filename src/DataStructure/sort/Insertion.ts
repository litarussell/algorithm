import Sort from './Sort'

export default class Insertion extends Sort {
  constructor() {
    super()
  }
  sort(list: Array < number > ): void {
    let n = list.length;
    for (let i = 1; i < n; i++) {
      for (let j = i; j > 0 && list[j] < list[j - 1]; j--) {
        super.swap(list, j, j - 1)
      }
    }
  }
}