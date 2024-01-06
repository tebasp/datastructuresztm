var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function bubbleSort(value) {
    // To avoid mutate value
    var sorted = __spreadArray([], value, true);
    var length = sorted.length;
    while (length) {
        for (var i = 0; i < length; i++) {
            if (sorted[i] > sorted[i + 1]) {
                // Swap numbers
                var aux = sorted[i];
                sorted[i] = sorted[i + 1];
                sorted[i + 1] = aux;
            }
        }
        length--;
    }
    return sorted;
}
var sorted = bubbleSort([5, 3, 7, 10, 1, 2, 2]);
console.log('Bubble Sorted:', sorted);
