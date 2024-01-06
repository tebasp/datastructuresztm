interface INode {
  value: any
  next: any
  prev: any
}

export class DoubleLinkedList {
  head: INode
  tail: INode | null
  length: 0

  constructor(value: any) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    this.length = 0
  }

  append(value: any) {
    const newNode: INode = {
      value: value,
      next: null,
      prev: null,
    }

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
  }

  reverse() {
    if (!this.head.next) {
      return this.head
    }

    let first = this.head
    let second = first.next
    this.tail = this.head

    while (second) {
      const temp = second.next
      console.log('\ntemp', temp)

      second.next = first
      console.log('\nThird', second.next.value)

      first = second
      console.log('\nfirst', first.value)

      second = temp
      console.log('\nsecond', second)
    }

    this.head.next = null
    this.head = first
    console.log('\nthis.head', this.head.value)
  }
}

const myLinkedList = new DoubleLinkedList(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.reverse()

console.log(myLinkedList)
