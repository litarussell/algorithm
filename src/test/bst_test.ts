import { BST, BstNode as Node } from '../DataStructure/'

export default {
  name: 'bst测试',
  test () {
    let bst: BST = new BST()
    bst.insert(3)
    bst.insert(1)
    bst.insert(5)
    bst.insert(2)
    bst.insert(4)
    bst.insert(6)

    consoleTree(bst.root)

    bst.del(6)
    console.log('-------')
    consoleTree(bst.root)

    console.log(bst)
  }
}

function consoleTree(tree: Node) {
  let queue: Array < Node > = []
  queue.push(tree)
  while (queue.length) {
    let q = []
    let arr = queue.map(i => i.data)
    console.log(...arr)
    while (queue.length) {
      let node: Node = queue.shift()
      if (node.lchild) q.push(node.lchild)
      if (node.rchild) q.push(node.rchild)
    }
    queue = q
  }
}