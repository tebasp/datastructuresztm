import Node from './node'

export class Queue {
    first: Node | null
    last: Node | null
    length: number

    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        if (this.first) {
            return this.first?.value
        }
    }

    isEmpty() {
        return !this.length
    }

    enqueue(value: any) {
        const newNode = new Node(value)

        if (!this.length) {
            this.first = newNode
            this.last = this.first
            this.length++
            return this
        }

        this.last.next = newNode
        this.last = newNode
        this.length++

        return this
    }

    dequeue() {
        if (!this.first) return null

        if (this.first === this.last) {
            this.last = null
        }

        const holdingPointer = this.first

        this.first = this.first.next
        this.length--

        return holdingPointer.value
    }
}

const myQueue = new Queue()
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Simmer')
myQueue.enqueue('Sammir')
myQueue.dequeue()
const isEmpty = myQueue.isEmpty()
const peek = myQueue.peek()

console.log('MyQueue', myQueue)
console.log('\nisEmpty', isEmpty)
console.log('\npeek', peek)
