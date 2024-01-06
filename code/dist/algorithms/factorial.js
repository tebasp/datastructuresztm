function findFactorialRecursive(value) {
    if (value < 2)
        return 1;
    return value * findFactorialRecursive(value - 1);
}
var factRec = findFactorialRecursive(5);
console.log('\nFactorial Recursive', factRec);
function findFactorialIterative(value) {
    var total = value;
    for (var i = value - 1; i > 0; i--) {
        total = total * i;
    }
    return total;
}
// const factIt = findFactorialIterative(5)
// console.log('\nFactorial Iterative', factIt)
