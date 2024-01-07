// Memoization === Cache

function addTo80(n: number) {
    return n + 80
}

// Now memoizing

function createMemo(fn: Function): (n: number) => number {
    const cache: Record<string, number> = {}
    const innerFn: Function = fn

    // Return a function to create a closure
    // And get access to cache hash table
    return (n: number): number => {
        if (n in cache) {
            console.log('\nCached')
            return cache[n]
        }

        // Call any function just to get the result
        const result = innerFn(n)
        cache[n] = result
        return result
    }
}

// Pass the function that performs the calculation
const addTo80Memoized = createMemo(addTo80)

const result1 = addTo80Memoized(5)
console.log('\nMemo 1:', result1)

const result2 = addTo80Memoized(5)
console.log('\nMemo 2:', result2)
