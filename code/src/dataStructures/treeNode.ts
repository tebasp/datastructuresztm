export default class TreeNode {
  value: any
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
  }
}
