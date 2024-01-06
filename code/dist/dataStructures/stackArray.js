"use strict";
exports.__esModule = true;
exports.StackArray = void 0;
var StackArray = /** @class */ (function () {
    function StackArray() {
        this.array = [];
    }
    StackArray.prototype.peek = function () {
        return this.array[this.array.length - 1];
    };
    StackArray.prototype.push = function (value) {
        this.array.push(value);
        return this;
    };
    StackArray.prototype.pop = function () {
        return this.array.pop();
    };
    return StackArray;
}());
exports.StackArray = StackArray;
var myArrayStack = new StackArray();
myArrayStack.push('google');
myArrayStack.push('discord');
var popped = myArrayStack.pop();
console.log('popped', popped);
console.log('myArrayStack', myArrayStack);
