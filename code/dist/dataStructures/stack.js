"use strict";
exports.__esModule = true;
exports.Stack = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    Stack.prototype.peek = function () {
        return this.top;
    };
    Stack.prototype.push = function (value) {
        var newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
            this.length++;
            return this;
        }
        var holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        this.length++;
        return this;
    };
    Stack.prototype.pop = function () {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        var holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer.value;
    };
    Stack.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    };
    return Stack;
}());
exports.Stack = Stack;
var myStack = new Stack();
var isEmpty = myStack.isEmpty();
var pushOne = myStack.push('google');
var pushTwo = myStack.push('udemy');
myStack.push('azure');
var popOne = myStack.pop();
var peek = myStack.peek();
console.log('isEmpty', isEmpty);
console.log('pushOne', pushOne);
console.log('pushTwo', pushTwo);
console.log('popOne', popOne);
console.log('peek', peek);
