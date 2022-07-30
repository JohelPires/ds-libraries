import colors from 'colors'
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return this
    }

    const oldTail = this.tail
    this.tail = newNode
    this.tail.prev = oldTail
    this.tail.prev.next = this.tail
    this.length++
    return this
  }

  unshift(val) {
    if (this.length === 0) return push(val)
    const newNode = new Node(val)
    const oldHead = this.head
    this.head = newNode
    this.head.next = oldHead
    oldHead.prev = this.head
    this.length++
    return this
  }
  pop() {
    if (this.length === 0) return undefined
    const currentTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return currentTail
    }
    this.tail = this.tail.prev
    this.tail.next = null
    this.length--
    return currentTail
  }

  shift() {
    if (this.length === 0) return undefined
    const currentHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return currentHead
    }
    this.head = this.head.next
    this.head.prev = null
    this.length--
    return currentHead
  }

  get(idx) {
    if (idx > this.length - 1 || idx < 0) return null
    // if (this.length === 1 || idx === this.length - 1) return this.tail
    let result
    if (this.length / 2 > idx) {
      //iterate from the beggining
      result = this.head
      for (let i = 1; i <= idx; i++) {
        result = result.next
      }
    } else {
      //iterate from the end
      result = this.tail
      for (let i = this.length - 2; i >= idx; i--) {
        result = result.prev
      }
    }
    return result
  }

  //   set(val, idx) {
  //     if (idx > this.length - 1 || idx < 0) return null
  //     let oldNode
  //     if (this.length / 2 > idx) {
  //       oldNode = this.head
  //       for (let i = 1; i <= idx; i++) {
  //         oldNode = oldNode.next
  //       }
  //     } else {
  //       oldNode = this.tail
  //       for (let i = this.length - 2; i >= idx; i--) {
  //         oldNode = oldNode.prev
  //       }
  //     }
  //     oldNode.val = val
  //   }

  set(val, idx) {
    let nodeToSet = this.get(idx)
    if (nodeToSet) {
      nodeToSet.val = val
      return true
    }
    return false
  }

  insert(val, idx) {
    if (idx >= this.length || idx < 0) return null
    if (idx === 0) {
      this.unshift(val)
      return this
    }
    if (idx === this.length - 1) {
      this.push(val)
      return this
    }
    const newNode = new Node(val)

    const oldNode = this.get(idx)
    const prevNode = oldNode.prev
    const nextNode = oldNode.next

    oldNode.prev = newNode
    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = oldNode

    this.length++
    return this
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false
    if (idx === 0) {
      this.shift()
      return true
    }
    if (idx === this.length - 1) {
      this.pop()
      return true
    }
    let nodeToRemove = this.get(idx)
    let prevNode = nodeToRemove.prev
    let nextNode = nodeToRemove.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    this.length--
    return true
  }

  traverse() {
    let current = this.head
    let str = ' NULL <=> '
    while (current) {
      str = str + current.val + ' <=> '
      current = current.next
    }
    str = str + 'NULL '
    const strlength = 'Length: ' + this.length + ' '
    console.log(strlength.bgRed, str.inverse)
  }
}

const dllist = new DoublyLinkedList()

dllist.push('teste')
dllist.push('second item')
dllist.push('third item')
dllist.push('4item')
dllist.push('555')
dllist.push('seis')
dllist.push(7)
dllist.push(['oito', 8, '888'])
dllist.push('nove')
dllist.push('X')

dllist.traverse()

dllist.set('first item', 0)
// dllist.unshift('new First')
dllist.remove(8)
dllist.traverse()
console.log(dllist.get(0).val)
