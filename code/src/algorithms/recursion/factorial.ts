function findFactorialRecursive(value: number) {
    if (value < 2) return 1
    return value * findFactorialRecursive(value - 1)
}

const factRec = findFactorialRecursive(5)
console.log('\nFactorial Recursive', factRec)

function findFactorialIterative(value: number) {
    let total = value

    for (let i = value - 1; i > 0; i--) {
        total = total * i
    }

    return total
}

// const factIt = findFactorialIterative(5)
// console.log('\nFactorial Iterative', factIt)
