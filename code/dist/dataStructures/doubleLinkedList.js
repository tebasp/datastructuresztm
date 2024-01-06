"use strict";
exports.__esModule = true;
exports.DoubleLinkedList = void 0;
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 0;
    }
    DoubleLinkedList.prototype.append = function (value) {
        var newNode = {
            value: value,
            next: null,
            prev: null
        };
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    };
    DoubleLinkedList.prototype.reverse = function () {
        if (!this.head.next) {
            return this.head;
        }
        var first = this.head;
        var second = first.next;
        this.tail = this.head;
        while (second) {
            var temp = second.next;
            console.log('\ntemp', temp);
            second.next = first;
            console.log('\nThird', second.next.value);
            first = second;
            console.log('\nfirst', first.value);
            second = temp;
            console.log('\nsecond', second);
        }
        this.head.next = null;
        this.head = first;
        console.log('\nthis.head', this.head.value);
    };
    return DoubleLinkedList;
}());
exports.DoubleLinkedList = DoubleLinkedList;
var myLinkedList = new DoubleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.reverse();
console.log(myLinkedList);
