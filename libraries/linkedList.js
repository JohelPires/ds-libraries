class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    if (this.length === 1) {
      let temp = this.head
      this.length = 0
      this.head = null
      this.tail = null
      return temp
    }
    let secondToLast = this.head
    for (let i = 0; i < this.length - 2; i++) {
      secondToLast = secondToLast.next
    }
    secondToLast.next = null
    const poppedItem = this.tail
    this.tail = secondToLast
    this.length--
    return poppedItem
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head
    if (this.length === 1) {
      let temp = this.head
      this.length = 0
      this.head = null
      this.tail = null
      return temp
    }
    this.head = oldHead.next
    this.length--
    return oldHead
  }

  unshift(val) {
    if (!this.head) return this.push(val)
    const newNode = new Node(val)
    const oldHead = this.head
    this.head = newNode
    this.head.next = oldHead
    this.length++
    return this
  }

  get(idx) {
    if (idx > this.length || idx < 0) return null

    let result = this.head
    if (idx === 0) return result
    for (let i = 1; i <= idx; i++) {
      result = result.next
    }
    return result
  }

  set(val, idx) {
    let nodeToUpdate = this.get(idx)
    if (nodeToUpdate) {
      nodeToUpdate.val = val
      return true
    }
    return false
  }

  insert(val, idx) {
    if (idx > this.length || idx < 0) return false
    if (idx === this.length) {
      this.push(val)
      return true
    }
    if (idx === 0) {
      this.unshift(val)
      return true
    }
    const newNode = new Node(val)
    const placeToIns = this.get(idx)
    if (this.length > 1) {
      const beforeNode = this.get(idx - 1)
      beforeNode.next = newNode
    }
    newNode.next = placeToIns
    this.length++
    return true
  }

  remove(idx) {
    if (idx > this.length || idx < 0) return undefined
    if (idx === this.length - 1) return this.pop()
    if (idx === 0) return this.shift(val)
    const prev = this.get(idx - 1)
    const removed = prev.next.val
    const after = prev.next.next
    prev.next = after
    this.length--
    return removed
  }

  //        a ->  b -> c -> d -> null
  //prev   cur   next

  //null <- a     b -> c -> d -> null
  //      prev   cur   next
  reverse() {
    let prev = null
    let current = this.head
    this.head = this.tail
    this.tail = current

    while (current) {
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return this
  }

  traverse() {
    if (!this.head) return undefined
    let current = this.head
    const arrayOfVals = []
    while (current) {
      arrayOfVals.push(current.val)
      current = current.next
    }
    console.log(arrayOfVals)
  }
}

const list = new SinglyLinkedList()

list.push('teste')
list.push('item 2')
list.push('item 3')
list.push('tse')
list.push('asdf')
list.push('asdafs')

// console.log(list)
list.traverse()
// console.log('====================')
// console.log(list.remove(3))
console.log('REVERSE ====================')
list.reverse()
list.traverse()
