function Graph() {
  this.vertices = [] // 顶点集合
  this.edges = new Map() // 边集合
}
// 添加顶点
Graph.prototype.addVertex = function (v) {
  this.vertices.push(v)
  this.edges.set(v, [])
}
// 添加边
Graph.prototype.addEdge = function (v, w) {
  let vEdge = this.edges.get(v)
  vEdge.push(w)
  let wEdge = this.edges.get(w)
  wEdge.push(v)
  this.edges.set(v, vEdge)
  this.edges.set(w, wEdge)
}
// 
Graph.prototype.toString = function () {
  
}
