export default class node < T > {
  public data: T
  public height: number
  public lchild: node < T >
    public rchild: node < T >
    constructor(v ? : T) {
      this.data = v
      // this.height = 0
      this.lchild = null
      this.rchild = null
    }
}