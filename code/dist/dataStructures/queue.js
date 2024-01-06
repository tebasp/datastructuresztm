"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var node_1 = require("./node");
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    Queue.prototype.peek = function () {
        var _a;
        if (this.first) {
            return (_a = this.first) === null || _a === void 0 ? void 0 : _a.value;
        }
    };
    Queue.prototype.isEmpty = function () {
        return !this.length;
    };
    Queue.prototype.enqueue = function (value) {
        var newNode = new node_1["default"](value);
        if (!this.length) {
            this.first = newNode;
            this.last = this.first;
            this.length++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first)
            return null;
        if (this.first === this.last) {
            this.last = null;
        }
        var holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return holdingPointer.value;
    };
    return Queue;
}());
exports.Queue = Queue;
var myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Simmer');
myQueue.enqueue('Sammir');
myQueue.dequeue();
var isEmpty = myQueue.isEmpty();
var peek = myQueue.peek();
console.log('MyQueue', myQueue);
console.log('\nisEmpty', isEmpty);
console.log('\npeek', peek);
