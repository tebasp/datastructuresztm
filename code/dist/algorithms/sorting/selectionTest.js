var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function selectionSortTest(value) {
    var toSort = __spreadArray([], value, true);
    var length = toSort.length;
    for (var i = 0; i < length; i++) {
        var min = i;
        var temp = toSort[i];
        for (var j = i + 1; j < length; j++) {
            if (toSort[j] < toSort[min]) {
                min = j;
            }
        }
        toSort[i] = toSort[min];
        toSort[min] = temp;
    }
    return toSort;
}
var selectionTestSorted = selectionSortTest([5, 3, 7, 10, 1, 2]);
console.log('Selection test:', selectionTestSorted);
