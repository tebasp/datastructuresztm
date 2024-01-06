import TreeNode from './treeNode'
import traverse from '../utils/traverse'

export class BSTTest {
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
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    return this
                }

                currentNode = currentNode.left
            }

            if (value >= currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    return this
                }

                currentNode = currentNode.right
            }
        }
    }

    lookUp(value: any) {
        if (!this.root) return null
        if (this.root.value === value) return this.root

        let currentNode = this.root

        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                return currentNode
            }
        }

        return null
    }
}

const myBSTTree = new BSTTest()
myBSTTree.insert(9)
myBSTTree.insert(4)
myBSTTree.insert(6)
myBSTTree.insert(20)
myBSTTree.insert(170)
myBSTTree.insert(15)
myBSTTree.insert(1)

console.log('\nTraverse', traverse(myBSTTree.root))

const lookedUp = myBSTTree.lookUp(170)
console.log('\nLookedUp', lookedUp)
