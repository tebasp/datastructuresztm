function mergeSort(value: number[]) {
    const toSortArray = [...value]

    // Base case
    if (toSortArray.length === 1) return toSortArray

    // Split array into left and right
    const center = Math.floor(toSortArray.length / 2)
    const left = toSortArray.slice(0, center)
    const right = toSortArray.slice(center)

    // Recursive case
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left: number[], right: number[]) {
    const sorted = []

    while (left.length && right.length) {
        if (right[0] < left[0]) {
            const valueToReplace = right.splice(0, 1)[0]
            sorted.push(valueToReplace)
        } else {
            const valueToReplace = left.splice(0, 1)[0]
            sorted.push(valueToReplace)
        }
    }

    return [...sorted, ...left, ...right]
}

const mergeSorted = mergeSort([5, 3, 7, 10, 1, 2, 9, 8])
console.log('Merge Sort:', mergeSorted)
