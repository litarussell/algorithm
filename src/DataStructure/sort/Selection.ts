import Sort from './Sort';

export default class Selection extends Sort  {
    constructor() {
        super();
    }
   sort(list: Array<number>): void {
        let n = list.length;
        for(let i = 0; i < n; i++) {
            let min = i;
            for(let j = i + 1; j < n; j++) {
                if( list[j] < list[min] ) min = j;
            }
            super.swap(list, i, min);
        }
    }
}