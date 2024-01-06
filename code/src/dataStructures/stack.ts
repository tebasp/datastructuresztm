export class Node {
  value: any
  next: Node | null

  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class Stack {
  top: Node | null
  bottom: Node | null
  length: number

  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.bottom = newNode
      this.top = newNode
      this.length++
      return this
    }

    const holdingPointer = this.top
    this.top = newNode
    this.top.next = holdingPointer

    this.length++
    return this
  }

  pop() {
    if (!this.top) {
      return null
    }

    if (this.top === this.bottom) {
      this.bottom = null
    }

    const holdingPointer = this.top
    this.top = this.top.next
    this.length--

    return holdingPointer.value
  }

  isEmpty() {
    if (this.length === 0) {
      return true
    }

    return false
  }
}

const myStack = new Stack()

const isEmpty = myStack.isEmpty()
const pushOne = myStack.push('google')
const pushTwo = myStack.push('udemy')
myStack.push('azure')
const popOne = myStack.pop()
const peek = myStack.peek()

console.log('isEmpty', isEmpty)
console.log('pushOne', pushOne)
console.log('pushTwo', pushTwo)
console.log('popOne', popOne)
console.log('peek', peek)
