import TreeNode from '../dataStructures/treeNode'

// Traverse the tree
export default function traverse(node: TreeNode | null) {
    const tree: TreeNode = {
        value: node?.value,
        left: node.left,
        right: node.right,
    }

    tree.left = node?.left === null ? null : traverse(node?.left)
    tree.right = node?.right === null ? null : traverse(node?.right)

    return tree
}
