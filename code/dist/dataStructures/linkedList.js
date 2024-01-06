"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new node_1["default"](value);
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new node_1["default"](value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = new node_1["default"](value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index === 0 || this.length === 0)
            return this.prepend(value);
        if (index > this.length)
            return this.append(value);
        var newNode = new node_1["default"](value);
        var holdingPointer = this.traverseToIndex(index - 1);
        var nextNode = holdingPointer.next;
        holdingPointer.next = newNode;
        newNode.next = nextNode;
        return this;
    };
    LinkedList.prototype.traverseToIndex = function (index) {
        if (!this.head)
            return null;
        if (index === 0)
            return this.head;
        if (index >= this.length)
            return this.tail;
        var currentNode = this.head;
        var counter = 0;
        while (currentNode && counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    LinkedList.prototype.printList = function () {
        var list = [];
        var currentItem = this.head;
        while (currentItem) {
            list.push(currentItem.value);
            currentItem = currentItem.next;
        }
        return list;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var myLinkedList = new LinkedList(5);
myLinkedList.prepend(0);
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
console.log('\nMy List', myLinkedList.printList());
myLinkedList.insert(3, 15);
var nodeTwo = myLinkedList.traverseToIndex(2);
console.log('\nnodeTwo:', nodeTwo);
console.log('\nMy List', myLinkedList.printList());
