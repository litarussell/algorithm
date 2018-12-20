import Node from '../common/node'
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
}

export default class AVL extends AVLHandle {
    public root: Node = null
    constructor() {
        super()
    }
}