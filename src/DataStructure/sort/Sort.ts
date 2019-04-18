// import './Comparable';

export default abstract class Sort {
  constructor() {}

  abstract sort(list: Array < number > ): void

  protected swap(list: Array < number > , i: number, j: number): void {
    let temp: number = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
}
