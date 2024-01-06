// 0 1 1 2 3 5 8

function fibonacciIterative(index: number) {
    if (index < 2) return index

    let first = 0
    let second = 1
    let total = 1

    for (let i = 2; i <= index; i++) {
        total = first + second
        first = second
        second = total
    }

    return total
}

// const total = fibonacciIterative(6)
// console.log('Total:', total)

function fibonacciIterativeElegant(index: number) {
    const arr = [0, 1]

    for (let i = 2; i <= index; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }

    return arr[index]
}

// const total = fibonacciIterative(6)
// console.log('Total:', total)

function fibonacciRecursive(index: number) {
    if (index < 2) return index

    return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2)
}

const total = fibonacciRecursive(6)
console.log('Total:', total)
