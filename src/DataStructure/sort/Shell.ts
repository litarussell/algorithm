import Sort from './Sort';

export default class Shell extends Sort {
  dlta: Array<number> = [5, 3, 1]
  constructor() {
    super();
  }
  sort(list: Array <number>): void {
    let N = this.dlta.length
    for (let i = 0; i < N; i++) {
      this.Insert(list, this.dlta[i])
    }
  }
  setDlta(dl: Array<number>) {
    this.dlta = dl
  }
  Insert(list: Array <number>, dk: number): void {
    let N = list.length
    for (let i = dk; i < N; i++) {
      for (let j = i; j >= dk && list[j] < list[j - dk]; j -= dk) {
        super.swap(list, j, j - dk)
      }
    }
  }
}