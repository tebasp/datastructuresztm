// Depth Fist Search
import TreeNode from '../../dataStructures/treeNode'

export class BinarySearchTreeDFS {
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

    depthFirstSearchInOrder(node: TreeNode, list: any[]) {
        return this.inOrderTraversal(this.root, [])
    }

    inOrderTraversal(node: TreeNode, list: any[]) {
        if (node.left) {
            // Recursive case - no tiene return
            this.inOrderTraversal(node.left, list)
        }

        // Se hace push del value depues que encuentra el izquierdo
        list.push(node.value)

        if (node.right) {
            // Recursive case - no tiene return
            this.inOrderTraversal(node.right, list)
        }

        // Base Case - Aqui va al ultimo
        return list
    }

    depthFirstSearchPreOrder(node: TreeNode, list: any[]) {
        return this.preOrderTraversal(this.root, [])
    }

    preOrderTraversal(node: TreeNode, list: any[]) {
        // Push del value desde que entra en el Root Node
        list.push(node.value)

        if (node.left) {
            this.preOrderTraversal(node.left, list)
        }

        if (node.right) {
            this.preOrderTraversal(node.right, list)
        }

        return list
    }

    depthFirstSearchPostOrder(node: TreeNode, list: any[]) {
        return this.postOrderTraversal(node, list)
    }

    postOrderTraversal(node: TreeNode, list: any[]) {
        if (node.left) {
            this.depthFirstSearchPostOrder(node.left, list)
        }

        if (node.right) {
            this.depthFirstSearchPostOrder(node.right, list)
        }

        list.push(node.value)

        return list
    }
}

const myBST = new BinarySearchTreeDFS()

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

const dfsInOrder = myBST.depthFirstSearchInOrder(myBST.root, [])
console.log('\nDFS In Order:', dfsInOrder)

const dfsPreOrder = myBST.depthFirstSearchPreOrder(myBST.root, [])
console.log('\nDFS Pre Order:', dfsPreOrder)

const dfsPostOrder = myBST.depthFirstSearchPostOrder(myBST.root, [])
console.log('\nDFS Post Order:', dfsPostOrder)
