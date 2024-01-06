"use strict";
exports.__esModule = true;
var treeNode_1 = require("./treeNode");
var traverse_1 = require("../utils/traverse");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newTreeNode = new treeNode_1["default"](value);
        if (!this.root) {
            this.root = newTreeNode;
            return this;
        }
        var currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Left
                if (!currentNode.left) {
                    currentNode.left = newTreeNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else {
                // Right
                if (!currentNode.right) {
                    currentNode.right = newTreeNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    };
    BinarySearchTree.prototype.lookup = function (value) {
        if (!this.root)
            return null;
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
    BinarySearchTree.prototype.remove = function (value) {
        if (!this.root)
            return null;
        var currentNode = this.root;
        if (this.root.value === value) {
            this.root = this.root.right;
            this.root.left = currentNode.left;
            return currentNode;
        }
        while (!currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value) {
                var holdingPointer = currentNode;
                if (currentNode.right) {
                    currentNode = currentNode.right;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
        }
    };
    return BinarySearchTree;
}());
exports["default"] = BinarySearchTree;
var myBST = new BinarySearchTree();
myBST.insert(9);
myBST.insert(4);
myBST.insert(1);
myBST.insert(6);
myBST.insert(5);
myBST.insert(7);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
console.log('myBST', myBST);
var lookedUp = myBST.lookup(6);
console.log('\nmyBST Lookedup', lookedUp);
var removed = myBST.remove(6);
var traversed = (0, traverse_1["default"])(myBST.root);
console.log('\nTraversed', traversed);
