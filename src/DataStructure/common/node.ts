export default class node {
    public data: number
    public lchild: node
    public rchild: node
    constructor(v ? : number) {
        this.data = v
        this.lchild = null
        this.rchild = null
    }
}