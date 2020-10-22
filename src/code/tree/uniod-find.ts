/**
 * 并查集算法 模版
 */

export default class UnionFind {
  private map: _mapType = {} // 记录元素的所属关系
  find (x: number) {
    if (!(x in this.map)) this.map[x] = x
    // 路径压缩, 找到子集合的根节点, 将其作为x的代表元素, 也就是将x直接接在子集合的根节点下
    if (x !== this.map[x]) this.map[x] = this.find(this.map[x])
    return this.map[x]
  }
  union (x: number, y: number) {
    // 将元素x的代表元素合并到元素y的代表元素, 相当于将x所在集合合并到y所在的集合, 将y的代表元素作为x的代表元素
    this.map[this.find(x)] = this.find(y)
  }
}

interface _mapType {
  [key: number]: number
}
