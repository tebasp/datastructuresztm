function reverseString(s) {
    var length = s.length;
    if (length === 0)
        return s[0];
    var reversedString = [];
    var partialString = reverseString(s.slice(0, length - 1));
    reversedString.push(partialString);
    return reversedString;
}
var reversed = reverseString('hola');
console.log('Reversed:', JSON.stringify(reversed));
