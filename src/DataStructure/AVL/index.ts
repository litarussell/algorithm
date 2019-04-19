import Node from './node'
abstract class AVLHandle {
  public abstract root: Node<number>
  private heightNode (node: Node<number>): number {
    if(node === null) return -1
    else return Math.max(this.heightNode(node.lchild), this.heightNode(node.rchild)) + 1
  }
  // 获取节点高度
  private HEIGHT (node: Node<number>): number {
    return node === null ? 0 : node.height
  }
  // 返回最大节点
  private _getMax(root: Node<number>): Node<number> {
    if (root === null) return null
    let p = root
    while (p.rchild !== null) p = p.rchild
    return p
  }
  // 返回最小节点
  private _getMin(root: Node<number>): Node<number> {
    if (root === null) return null
    let p = root
    while (p.lchild !== null) p = p.lchild
    return p
  }
  // 右旋
  private _r(node: Node<number>): Node<number> {
    let p: Node<number>
    p = node.lchild
    node.lchild = p.rchild
    p.rchild = node
    return p
  }
  // 左旋
  private _l(node: Node<number>): Node<number> {
    let p: Node<number>
    p = node.rchild
    node.rchild = p.lchild
    p.lchild = node
    return p
  }
  // 先左旋后右旋
  private _lr(node: Node<number>): Node<number> {
    node.lchild = this._l(node.lchild)
    return this._r(node)
  }
  // 先右旋后左旋
  private _rl(node: Node<number>): Node<number> {
    node.rchild = this._r(node.rchild)
    return this._l(node)
  }
  private _insert(root: Node<number>, key: number): Node<number> {
    if (root === null) root = new Node<number>(key)
    else if (key < root.data) { // 插入到左子树
      root.lchild = this._insert(root.lchild, key)
      if (root.lchild !== null) {
        // 插入节点, 检查AVL树是否失衡
        if (this.heightNode(root.lchild) - this.heightNode(root.rchild) === 2) {
          // 若插入位置是ll 右旋
          if (key < root.lchild.data) root = this._r(root)
          // 若插入位置是lr 先左旋再右旋
          else root = this._lr(root)
        }
      }
    } else if (key > root.data) { // 插入到右子树
      root.rchild = this._insert(root.rchild, key)
      if (root.rchild !== null) {
        // 插入节点, 检查AVL树是否失衡
        if (this.heightNode(root.rchild) - this.heightNode(root.lchild) === 2) {
          // 若插入位置是rr 左旋
          if (key > root.rchild.data) root = this._l(root)
          // 若插入位置是rl 先右旋再左旋
          else root = this._rl(root)
        }
      }
    }
    // root.height = Math.max()
    return root
  }
  private _del(root: Node<number>, key: number): Node<number> {
    if (root !== null) {
      if (key < root.data) {
        // 左子树
        root.lchild = this._del(root.lchild, key)
        // 检测是否失衡
        if (this.heightNode(root.lchild) - this.heightNode(root.rchild) === 2) {
          // 若删除位置在ll 左旋
          if (key < root.lchild.data) root = this._l(root)
          // 若插入位置是lr 先右旋再左旋
          else root = this._rl(root)
        }
      } else if (key > root.data) {
        // 右子树
        root.rchild = this._del(root.rchild, key)
        // 检测是否失衡
        if (this.heightNode(root.rchild) - this.heightNode(root.lchild) === 2) {
          // 若删除位置在rr 左旋
          if (key > root.lchild.data) root = this._l(root)
          // 若插入位置是rl 先右旋再左旋
          else root = this._rl(root)
        }
      } else {
        // 删除root节点
        if (root.lchild && root.lchild) {
          if (this.heightNode(root.lchild) > this.heightNode(root.rchild)) {
            // 左子树高于右子树
            let p = this._getMax(root.lchild)
            root.data = p.data
            root.lchild = this._del(root.lchild, p.data)
          } else {
            // 左子树不高于右子树
            let p = this._getMin(root.rchild)
            root.data = p.data
            root.rchild = this._del(root.rchild, p.data)
          }
        } else {
          root = root.lchild ? root.lchild : root.rchild
        }
      }
    }
    return root
  }
  // 插入节点
  insert (key: number): Node<number> {
    return this.root = this._insert(this.root, key)
  }
  // 删除节点
  del (key: number): Node<number> {
    return this.root = this._del(this.root, key)
  }
}

export default class AVL extends AVLHandle {
  public root: Node<number> = null
  constructor() {
    super()
  }
}
