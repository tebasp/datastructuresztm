export class MyArray {
    length: number
    data: Object

    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index: number) {
        return this.data[index]
    }

    push(item: any) {
        this.data[this.length] = item
        this.length++
        return item
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        return lastItem
    }

    delete(index: number) {
        for (let i = index; i < this.length - 1; index++) {
            this.data[i] = this.data[i + 1]
        }

        return delete this.data[this.length - 1]
    }
}

const myArray = new MyArray()

myArray.push('hi')
myArray.push('you')

console.log(myArray)

const getIndexZero = myArray.get(0)
console.log('getIndexZero', getIndexZero)

const pop = myArray.pop()
console.log('pop', pop)
