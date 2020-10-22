import { UnionFind } from '../code'

export default {
  name: '并查集',
  test () {
    console.log('--- 例子1 ---')
    test1()
    console.log('--- 例子2 ---')
    test2()
  }
}

interface _lookUpType {
  [key: string]: number
}

function test1() {
  // 每个数组下的元素都是一个集合, 含有相同元素的集合需要合并为一个集合
  let set = [['A', 'B'], ['A', 'C'], ['D', 'E'], ['F']]

  let u: UnionFind = new UnionFind()

  let lookUp: _lookUpType = {}  // 用于记录元素的所在集合编号
  
  set.forEach((s, i) => s.forEach(el => {
    if (el in lookUp) u.union(i, lookUp[el])
    else lookUp[el] = i
  }))

  console.log('集合:', ...set)
  console.log('元素', '元素初始集合编号', '合并后集合编号')

  for (let e in lookUp) {
    console.log(e, '  ', lookUp[e], '           ', u.find(lookUp[e]))
  }
}

function test2() {
  // 每个数组下的元素都是一个集合, 含有相同元素的集合需要合并为一个集合
  let set = [
    { id: 'A', to: '' }, { id: 'B', to: 'A' },
    { id: 'C', to: 'B' }, { id: 'D', to: 'E' },
    { id: 'E', to: '' }
  ]

  let u: UnionFind = new UnionFind()

  let lookUp: _lookUpType = {}  // 用于记录元素的所在集合编号
  
  set.forEach((s, i) => lookUp[s.id] = i) // 初始化
  set.forEach((s, i) => {
    if (s.to) {
      if (s.to in lookUp) u.union(i, lookUp[s.to])
    }
  })

  console.log('集合:', ...set)
  console.log('元素', '元素初始集合编号', '合并后集合编号')

  for (let e in lookUp) {
    console.log(e, '  ', lookUp[e], '           ', u.find(lookUp[e]))
  }
}
