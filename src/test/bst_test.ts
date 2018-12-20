import {BST, Node} from '../DataStructure/'

export default {
    name: 'bst测试',
    test () {
        let bst: BST = new BST()
        bst.InsertBST(3)
        bst.InsertBST(1)
        bst.InsertBST(5)
        bst.InsertBST(2)
        bst.InsertBST(4)
        bst.InsertBST(6)

        consoleTree(bst.root)

        bst.DelBST(6)
        console.log('-------')
        consoleTree(bst.root)

        console.log(bst)
    }
}
function consoleTree(tree: Node) {
    let queue: Array<Node> = []
    queue.push(tree)
    while(queue.length) {
        let q = []
        let arr = queue.map(i => i.data)
        console.log(...arr)
        while(queue.length) {
            let node: Node = queue.shift()
            if (node.lchild) q.push(node.lchild)
            if (node.rchild) q.push(node.rchild)
        }
        queue = q
    }
}