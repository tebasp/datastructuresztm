import TreeNode from './treeNode'
import traverse from '../utils/traverse'

export default class BinarySearchTree {
    root: TreeNode | null

    constructor() {
        this.root = null
    }

    insert(value: number) {
        const newTreeNode = new TreeNode(value)

        if (!this.root) {
            this.root = newTreeNode
            return this
        }

        let currentNode = this.root

        while (true) {
            if (value < currentNode.value) {
                // Left

                if (!currentNode.left) {
                    currentNode.left = newTreeNode
                    return this
                }

                currentNode = currentNode.left
            } else {
                // Right
                if (!currentNode.right) {
                    currentNode.right = newTreeNode
                    return this
                }

                currentNode = currentNode.right
            }
        }
    }

    lookup(value: number) {
        if (!this.root) return null
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

    remove(value: number) {
        if (!this.root) return null

        let currentNode = this.root

        if (this.root.value === value) {
            this.root = this.root.right
            this.root.left = currentNode.left
            return currentNode
        }

        while (!currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                const holdingPointer = currentNode

                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode = currentNode.left
                }
            }
        }
    }
}

const myBST = new BinarySearchTree()
myBST.insert(9)
myBST.insert(4)
myBST.insert(1)
myBST.insert(6)
myBST.insert(5)
myBST.insert(7)
myBST.insert(20)
myBST.insert(170)
myBST.insert(15)
console.log('myBST', myBST)

const lookedUp = myBST.lookup(6)
console.log('\nmyBST Lookedup', lookedUp)

const removed = myBST.remove(6)

const traversed = traverse(myBST.root)
console.log('\nTraversed', traversed)
