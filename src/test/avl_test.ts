import { AVL, AvlNode as Node } from '../code'

export default {
  name: 'avl自平衡二叉搜索树测试',
  test () {
    let avl: AVL = new AVL()
    let avl1: AVL = new AVL()
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    for (let i = arr.length - 1; i >=0; i--) {
        avl.insert(i)
    }
    consoleTree(avl.root)
    console.log(avl)
    console.log('----------')
    for (let i = 0; i < arr.length; i++) {
        avl1.insert(i)
    }
    consoleTree(avl1.root)   

    // avl.del(6)
    // console.log('-------')
    // consoleTree(avl.root)

    // avl.del(0)
    // console.log('-------')
    // consoleTree(avl.root) 

    // console.log(avl)
  }
}

function consoleTree(tree: Node<number>) {
  let queue: Array <Node<number>> = []
  queue.push(tree)
  while (queue.length) {
    let q = []
    let arr = queue.map(i => i.data)
    console.log(...arr)
    while (queue.length) {
      let node: Node<number> = queue.shift()
      if (node.lchild) q.push(node.lchild)
      if (node.rchild) q.push(node.rchild)
    }
    queue = q
  }
}
