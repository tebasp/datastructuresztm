var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeSort(value) {
    var toSortArray = __spreadArray([], value, true);
    // Base case
    if (toSortArray.length === 1)
        return toSortArray;
    // Split array into left and right
    var center = Math.floor(toSortArray.length / 2);
    var left = toSortArray.slice(0, center);
    var right = toSortArray.slice(center);
    // Recursive case
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var sorted = [];
    while (left.length && right.length) {
        if (right[0] < left[0]) {
            var valueToReplace = right.splice(0, 1)[0];
            sorted.push(valueToReplace);
        }
        else {
            var valueToReplace = left.splice(0, 1)[0];
            sorted.push(valueToReplace);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], sorted, true), left, true), right, true);
}
var mergeSorted = mergeSort([5, 3, 7, 10, 1, 2, 9, 8]);
console.log('Merge Sort:', mergeSorted);
