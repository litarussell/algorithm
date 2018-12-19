// import Test from './decorator';
import {MaxHeap, MinHeap, Selection, Insertion, BST, Node} from './DataStructure/index';

console.log('---------------BST-----------------');
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


let list: Array<number> = [2,4,1,5,6,2,5,6,8,234,53,5,0];

console.log('---------------插入排序-----------------');
(new Insertion()).sort(list);
console.log(list);

list = [2,4,1,5,6,2,5,6,8,234,53,5,0];
console.log('---------------选择排序-----------------');
(new Selection()).sort(list);
console.log(list);

console.log('----------------堆排序-----------------');
let minHeap = new MinHeap(7);
let maxHeap = new MaxHeap(9);
maxHeap.create([1,6,9,4,10,0,5,8,7]);
maxHeap.test();
console.log('最大值', maxHeap.pop(), maxHeap.pop(), maxHeap.pop(), maxHeap.pop(), maxHeap.pop());
maxHeap.test();
console.log('-----------------')
minHeap.create([2,3,1,4,5,6,7]);
minHeap.test();
console.log('最小值', minHeap.pop(), minHeap.pop());
minHeap.test();

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