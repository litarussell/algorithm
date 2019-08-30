import {Selection} from '../code'

let list: Array<number> = [2,4,1,5,6,2,5,6,8,234,53,5,0]

const select: Selection = new Selection()

export default {
    name: '选择排序',
    test () {
        console.log('原序列', ...list)
        select.sort(list)
        console.log('排序后', ...list)
    }
}