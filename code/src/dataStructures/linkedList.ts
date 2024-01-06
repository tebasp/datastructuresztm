import Node from './node'
import traverse from '../utils/traverse'

export class LinkedList {
    head: Node | null
    tail: Node | null
    length: number

    constructor(value: any) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value: any) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value: any) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    insert(index: number, value: any) {
        if (index === 0 || this.length === 0) return this.prepend(value)

        if (index > this.length) return this.append(value)

        const newNode = new Node(value)
        const holdingPointer = this.traverseToIndex(index - 1)
        const nextNode = holdingPointer.next

        holdingPointer.next = newNode
        newNode.next = nextNode

        return this
    }

    traverseToIndex(index: number) {
        if (!this.head) return null

        if (index === 0) return this.head

        if (index >= this.length) return this.tail

        let currentNode = this.head
        let counter = 0

        while (currentNode && counter < index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    printList() {
        let list = []
        let currentItem = this.head

        while (currentItem) {
            list.push(currentItem.value)
            currentItem = currentItem.next
        }

        return list
    }
}

const myLinkedList = new LinkedList(5)

myLinkedList.prepend(0)
myLinkedList.append(10)
myLinkedList.append(20)
myLinkedList.append(30)

console.log('\nMy List', myLinkedList.printList())

myLinkedList.insert(3, 15)

const nodeTwo = myLinkedList.traverseToIndex(2)
console.log('\nnodeTwo:', nodeTwo)

console.log('\nMy List', myLinkedList.printList())
