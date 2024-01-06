function selectionSort(value: number[]) {
    const toSort = [...value]
    const length = toSort.length

    for (let i = 0; i < length; i++) {
        let min = i
        let temp = toSort[i]

        for (let j = i + 1; j < length; j++) {
            if (toSort[j] < toSort[min]) {
                min = j
            }
        }

        toSort[i] = toSort[min]
        toSort[min] = temp
    }

    return toSort
}

const selectionSorted = selectionSort([5, 3, 7, 10, 1, 2])
console.log('Selection Sort:', selectionSorted)
