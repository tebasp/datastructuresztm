// 0 1 1 2 3 5 8
function fibonacciIterative(index) {
    if (index < 2)
        return index;
    var first = 0;
    var second = 1;
    var total = 1;
    for (var i = 2; i <= index; i++) {
        total = first + second;
        first = second;
        second = total;
    }
    return total;
}
// const total = fibonacciIterative(6)
// console.log('Total:', total)
function fibonacciIterativeElegant(index) {
    var arr = [0, 1];
    for (var i = 2; i <= index; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[index];
}
// const total = fibonacciIterative(6)
// console.log('Total:', total)
function fibonacciRecursive(index) {
    if (index < 2)
        return index;
    return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}
var total = fibonacciRecursive(6);
console.log('Total:', total);
