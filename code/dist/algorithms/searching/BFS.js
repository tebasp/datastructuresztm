"use strict";
// Breadth Fist Search
exports.__esModule = true;
exports.BinarySearchTreeBFS = void 0;
var treeNode_1 = require("../../dataStructures/treeNode");
var BinarySearchTreeBFS = /** @class */ (function () {
    function BinarySearchTreeBFS() {
        this.root = null;
    }
    BinarySearchTreeBFS.prototype.insert = function (value) {
        var newNode = new treeNode_1["default"](value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var currentNode = this.root;
        while (currentNode) {
            // Left
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
        return;
    };
    BinarySearchTreeBFS.prototype.lookUp = function (value) {
        if (!this.root)
            return;
        if (this.root.value === value)
            return this.root;
        var currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return null;
    };
    BinarySearchTreeBFS.prototype.breadthFirstSearch = function () {
        var currentNode = this.root;
        var queue = [];
        var list = [];
        queue.push(currentNode);
        while (queue.length) {
            // Sacamos el primer elemento de la Queue
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    };
    BinarySearchTreeBFS.prototype.breadthFirstSearchR = function (queue, list) {
        // Base case
        if (!queue.length) {
            return list;
        }
        var currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        // Recursive case
        // With Tail Recursion
        return this.breadthFirstSearchR(queue, list);
    };
    return BinarySearchTreeBFS;
}());
exports.BinarySearchTreeBFS = BinarySearchTreeBFS;
var myBST = new BinarySearchTreeBFS();
myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);
console.log('MyBST:', myBST);
var lookedUp = myBST.lookUp(20);
console.log('\nMyBST LookUp:', lookedUp);
var bfs = myBST.breadthFirstSearch();
console.log('\nMy BFS:', bfs);
var bfsRecursion = myBST.breadthFirstSearchR([myBST.root], []);
console.log('\nMy BFS recursion:', bfsRecursion);
