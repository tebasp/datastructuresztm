export class StackArray {
  array: any[]

  constructor() {
    this.array = []
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    return this.array.pop()
  }
}

const myArrayStack = new StackArray()
myArrayStack.push('google')
myArrayStack.push('discord')
const popped = myArrayStack.pop()

console.log('popped', popped)
console.log('myArrayStack', myArrayStack)
