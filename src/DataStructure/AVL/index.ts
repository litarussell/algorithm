import Node from '../BST/node'
abstract class AVLHandle {
    public abstract root: Node
    // 右旋
    private _r(node: Node): Node {
        let p: Node
        p = node.lchild
        node.lchild = p.rchild
        p.rchild = node
        return p
    }
    // 左旋
    private _l(node: Node): Node {
        let p: Node
        p = node.rchild
        node.rchild = p.lchild
        p.lchild = node
        return p
    }
    // // 先左后右旋
    // private _lr(node: Node): Node {

    // }
    // // 先右后左旋
    // private _rl(node: Node): Node {

    // }
}

export default class AVL extends AVLHandle {
    public root: Node = null
    constructor() {
        super()
    }
}