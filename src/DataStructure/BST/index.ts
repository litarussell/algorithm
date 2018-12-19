import Node from '../common/node'

abstract class BSTHandle {
    public abstract root: Node
    // 搜索
    private _search(root: Node, key: number, pre: Node): Node {
        if (!root) return pre
        else if (key === root.data) return root
        if (key < root.data) return this._search(root.lchild, key, root)
        else return this._search(root.rchild, key, root)
    }
    // 删除节点
    private _del (node: Node, pre: Node, key: number, left ? : boolean): boolean {
        if (!node) return false

        let v: Number = node.data
        if (v === key) {
            if (node.rchild == null) {
                // 只有左子树
                if (!pre) this.root = null
                else if (left) pre.lchild = node.lchild
                else pre.rchild = node.lchild
            } else if (node.lchild == null) {
                // 只有右子树
                if (!pre) this.root = null
                else if (left) pre.lchild = node.rchild
                else pre.rchild = node.rchild
            } else {
                let p: Node = node
                let r: Node = node.rchild
                while (r.lchild) {
                    p = r
                    r = r.lchild
                }
                node.data = r.data
                if (p != node) p.lchild = null
                else p.rchild = null
            }
            return true 
        } else if (key < v) return this._del(node.lchild, node, key, true)
        else return this._del(node.rchild, node, key, false)
    }
    // 添加节点
    InsertBST (key: number): boolean {
        let p: Node = this._search(this.root, key, null)
        if (!p || p.data != key) {
            let temp: Node = new Node(key)
            // 树为空
            if (!p) this.root = temp
            else {
                if (key < p.data) p.lchild = temp
                else p.rchild = temp
            }
            return true
        } else {
            // bst树无节点
            this.root = new Node(key)
        }
    }
    // 删除节点
    DelBST (key: number) {
        return this._del(this.root, null, key)
    }
}

export default class BST extends BSTHandle {
    public root: Node = null
    constructor() {
        super()
    }
}