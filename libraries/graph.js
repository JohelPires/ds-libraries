class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2)
      this.adjacencyList[v2].push(v1)
    }
  }

  //currently not efficient in time complexity
  // should use filter(v => v !== v2)

  //   removeEdge(v1, v2) {
  //     if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
  //       const v2Atv1 = this.adjacencyList[v1].indexOf(v2)
  //       const v1Atv2 = this.adjacencyList[v2].indexOf(v1)
  //       this.adjacencyList[v1].splice(v2Atv1, 1)
  //       this.adjacencyList[v2].splice(v1Atv2, 1)
  //     }
  //   }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    )
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((e) => {
      this.removeEdge(vertex, e)
    })
    delete this.adjacencyList[vertex]
  }

  dfsRecursive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((e) => {
        if (!visited[e]) {
          return dfs(e)
        }
      })
    }
    dfs(start)
    return result
  }

  // start = A
  // result = [A, B, D]
  // visited = {A: true,
  //            B: true,
  //            D: true}
  //            F: true}
  // s = [B, A, B, E]

  // vertex = F

  dfsIterative(start) {
    const adjacencyList = this.adjacencyList
    const result = []
    const visited = {}
    const s = [start]
    // visited[start] = true
    while (s.length) {
      const vertex = s.pop()
      if (!visited[vertex]) {
        visited[vertex] = true
        result.push(vertex)

        adjacencyList[vertex].forEach((e) => {
          s.push(e)
        })
      }
    }
    return result
  }

  bfs(start) {
    const q = [start]
    const result = []
    const visited = {}
    visited[start] = true
    while (q.length) {
      const current = q.shift()
      result.push(current)
      this.adjacencyList[current].forEach((e) => {
        if (!visited[e]) {
          visited[e] = true
          q.push(e)
        }
      })
    }
    return result
  }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.adjacencyList)

console.log(g.bfs('A'))
