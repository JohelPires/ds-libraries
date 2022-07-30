class BinaryHeap {
  constructor() {
    this.values = []
  }

  swap(arr, idxA, idxB) {
    const temp = arr[idxA]
    arr[idxA] = arr[idxB]
    arr[idxB] = temp
  }

  insert(val) {
    this.values.push(val)
    let index = this.values.length - 1
    let parentIndex = Math.floor((index - 1) / 2)
    while (this.values[parentIndex] < this.values[index]) {
      //swap
      const temp = this.values[index]
      this.values[index] = this.values[parentIndex]
      this.values[parentIndex] = temp
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }
  bubbleDown() {
    let idx = 0
    const len = this.values.length

    const e = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > e) swap = leftChildIdx
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > e) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildIdx
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = e
      idx = swap
    }
  }
  extractMax() {
    const max = this.values[0]
    this.values[0] = this.values.pop()
    if (this.values.length <= 1) return this.values.pop()

    this.bubbleDown()

    return max
  }
}

const bh = new BinaryHeap()

bh.insert(39)
bh.insert(27)
bh.insert(41)
bh.insert(12)
bh.insert(33)
bh.insert(18)
bh.insert(25)
bh.insert(55)
bh.insert(38)
bh.insert(26)
bh.insert(42)
bh.insert(14)
bh.insert(35)
bh.insert(17)
bh.insert(21)
bh.insert(75)
bh.insert(200)
console.log(bh)
console.log(bh.extractMax())
console.log(bh.extractMax())
console.log(bh)
