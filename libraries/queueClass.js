class QueueNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

export default class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  //dequeue removes the first
  //enqueue adds to the end

  enqueue(val) {
    const newNode = new QueueNode(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
      this.size++
      return this
    }
    this.last.next = newNode
    this.last = newNode
    this.size++
    return this
  }

  dequeue() {
    if (this.size === 0) return null
    const dequeuedItem = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
      this.size = 0
      return dequeuedItem
    }
    this.first = dequeuedItem.next
    this.size--
    return dequeuedItem
  }

  traverse() {
    let current = this.first
    while (current) {
      console.log(current.val)
      current = current.next
    }
    console.log('size: ' + this.size)
  }
}

// const q = new Queue()

// q.enqueue('first')
// q.enqueue('sec')
// q.enqueue('third')
// q.enqueue('4')
// q.enqueue(5)
// q.enqueue(6)

// q.dequeue()
// q.dequeue()
// q.dequeue()

// q.traverse()
