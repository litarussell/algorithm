import Node from '../common/node'

abstract class BSTHandle {
    public abstract root: Node
    // 搜索
    private SearchBST(root: Node, key: number, pre: Node): Node {
        if (!root) return pre
        else if (key === root.data) return root
        if (key < root.data) return this.SearchBST(root.lchild, key, root)
        else return this.SearchBST(root.rchild, key, root)
    }
    // 添加节点
    InsertBST (key: number): boolean {
        let p: Node = this.SearchBST(this.root, key, null)
        if (!p || p.data != key) {
            let temp: Node = new Node(key)
            // 树为空
            if (!p) this.root = temp
            else {
                console.log(key, p.data, temp)
                if (key < p.data) p.lchild = temp
                else p.rchild = temp
            }
            return true
        } else return false
    }
}

export default class BST extends BSTHandle {
    public root: Node
    constructor(v ? : number) {
        super()
        this.root = new Node(v)
    }
}