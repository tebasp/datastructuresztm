export default class Node {
  value: any
  next: Node | null

  constructor(value: any) {
    this.value = value
    this.next = null
  }
}
