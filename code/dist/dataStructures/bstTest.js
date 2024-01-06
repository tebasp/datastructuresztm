"use strict";
exports.__esModule = true;
exports.BSTTest = void 0;
var treeNode_1 = require("./treeNode");
var traverse_1 = require("../utils/traverse");
var BSTTest = /** @class */ (function () {
    function BSTTest() {
        this.root = null;
    }
    BSTTest.prototype.insert = function (value) {
        var newNode = new treeNode_1["default"](value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            if (value >= currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    };
    BSTTest.prototype.lookUp = function (value) {
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
            else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return null;
    };
    return BSTTest;
}());
exports.BSTTest = BSTTest;
var myBSTTree = new BSTTest();
myBSTTree.insert(9);
myBSTTree.insert(4);
myBSTTree.insert(6);
myBSTTree.insert(20);
myBSTTree.insert(170);
myBSTTree.insert(15);
myBSTTree.insert(1);
console.log('\nTraverse', (0, traverse_1["default"])(myBSTTree.root));
var lookedUp = myBSTTree.lookUp(170);
console.log('\nLookedUp', lookedUp);
