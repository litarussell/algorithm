export default class node<T> {
    public data: T
    public lchild: node<T>
    public rchild: node<T>
    constructor(v ? : T) {
        this.data = v
        this.lchild = null
        this.rchild = null
    }
}