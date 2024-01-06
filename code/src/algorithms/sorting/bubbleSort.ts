function bubbleSort(value: number[]) {
    // To avoid mutate value
    const sorted = [...value]
    let length = sorted.length

    while (length) {
        for (let i = 0; i < length; i++) {
            if (sorted[i] > sorted[i + 1]) {
                // Swap numbers
                const aux = sorted[i]
                sorted[i] = sorted[i + 1]
                sorted[i + 1] = aux
            }
        }
        length--
    }

    return sorted
}

const sorted = bubbleSort([5, 3, 7, 10, 1, 2, 2])
console.log('Bubble Sorted:', sorted)
