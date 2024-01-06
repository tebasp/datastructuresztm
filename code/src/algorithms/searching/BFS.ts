// Breadth Fist Search

import TreeNode from '../../dataStructures/treeNode'

export class BinarySearchTreeBFS {
    root: TreeNode | null

    constructor() {
        this.root = null
    }

    insert(value: any) {
        const newNode = new TreeNode(value)

        if (!this.root) {
            this.root = newNode
            return this
        }

        let currentNode = this.root

        while (currentNode) {
            // Left
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    return this
                }

                currentNode = currentNode.left
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    return this
                }

                currentNode = currentNode.right
            }
        }

        return
    }

    lookUp(value: any) {
        if (!this.root) return

        if (this.root.value === value) return this.root

        let currentNode = this.root

        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode
            }
        }

        return null
    }

    breadthFirstSearch() {
        let currentNode = this.root
        const queue = []
        const list = []

        queue.push(currentNode)

        while (queue.length) {
            // Sacamos el primer elemento de la Queue
            currentNode = queue.shift()
            list.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return list
    }

    breadthFirstSearchR(queue: TreeNode[], list: any[]) {
        // Base case
        if (!queue.length) {
            return list
        }

        let currentNode = queue.shift()
        list.push(currentNode.value)

        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }

        // Recursive case
        // With Tail Recursion
        return this.breadthFirstSearchR(queue, list)
    }
}

const myBST = new BinarySearchTreeBFS()

myBST.insert(9)
myBST.insert(4)
myBST.insert(6)
myBST.insert(20)
myBST.insert(170)
myBST.insert(15)
myBST.insert(1)

console.log('MyBST:', myBST)

const lookedUp = myBST.lookUp(20)
console.log('\nMyBST LookUp:', lookedUp)

const bfs = myBST.breadthFirstSearch()
console.log('\nMy BFS:', bfs)

const bfsRecursion = myBST.breadthFirstSearchR([myBST.root], [])
console.log('\nMy BFS recursion:', bfsRecursion)
