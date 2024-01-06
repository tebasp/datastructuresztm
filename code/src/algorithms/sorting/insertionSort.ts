function insertionSort(value: number[]) {
    const toSortArray = [...value]
    const length = toSortArray.length

    for (let i = 0; i < length; i++) {
        // Compare current position to position 0
        if (toSortArray[i] < toSortArray[0]) {
            // Make the swap to position 0
            const positionToSwap = toSortArray.splice(i, 1)[0]
            toSortArray.unshift(positionToSwap)
        } else {
            // Iterate all array to find where it fits
            //  Check j < i
            for (let j = 1; j < i; j++) {
                // Verify if fits between major and minor
                if (
                    toSortArray[i] > toSortArray[j - 1] &&
                    toSortArray[i] < toSortArray[j]
                ) {
                    const positionToSwap = toSortArray.splice(i, 1)[0]
                    toSortArray.splice(j, 0, positionToSwap)
                }
            }
        }
    }

    return toSortArray
}

const insertionSorted = insertionSort([5, 3, 7, 10, 1, 2])
console.log('Insertion Sort:', insertionSorted)
