var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function insertionSort(value) {
    var toSortArray = __spreadArray([], value, true);
    var length = toSortArray.length;
    for (var i = 0; i < length; i++) {
        // Compare current position to position 0
        if (toSortArray[i] < toSortArray[0]) {
            // Make the swap to position 0
            var positionToSwap = toSortArray.splice(i, 1)[0];
            toSortArray.unshift(positionToSwap);
        }
        else {
            // Iterate all array to find where it fits
            //  Check j < i
            for (var j = 1; j < i; j++) {
                // Verify if fits between major and minor
                if (toSortArray[i] > toSortArray[j - 1] &&
                    toSortArray[i] < toSortArray[j]) {
                    var positionToSwap = toSortArray.splice(i, 1)[0];
                    toSortArray.splice(j, 0, positionToSwap);
                }
            }
        }
    }
    return toSortArray;
}
var insertionSorted = insertionSort([5, 3, 7, 10, 1, 2]);
console.log('Insertion Sort:', insertionSorted);
