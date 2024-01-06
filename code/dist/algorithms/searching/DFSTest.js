"use strict";
exports.__esModule = true;
exports.BinarySearchTreeDFS = void 0;
// Depth Fist Search
var treeNode_1 = require("../../dataStructures/treeNode");
var BinarySearchTreeDFS = /** @class */ (function () {
    function BinarySearchTreeDFS() {
        this.root = null;
    }
    BinarySearchTreeDFS.prototype.insert = function (value) {
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
    BinarySearchTreeDFS.prototype.lookUp = function (value) {
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
    BinarySearchTreeDFS.prototype.depthFirstSearchInOrder = function (node, list) {
        return this.inOrderTraversal(node, list);
    };
    BinarySearchTreeDFS.prototype.inOrderTraversal = function (node, list) {
        var currentNode = node;
        if (currentNode.left) {
            this.inOrderTraversal(currentNode.left, list);
        }
        list.push(currentNode.value);
        if (currentNode.right) {
            this.inOrderTraversal(currentNode.right, list);
        }
        return list;
    };
    return BinarySearchTreeDFS;
}());
exports.BinarySearchTreeDFS = BinarySearchTreeDFS;
var myBST = new BinarySearchTreeDFS();
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
var dfsInOrder = myBST.depthFirstSearchInOrder(myBST.root, []);
console.log('\nDFS In Order:', dfsInOrder);
// const dfsPreOrder = myBST.depthFirstSearchPreOrder(myBST.root, [])
// console.log('\nDFS Pre Order:', dfsPreOrder)
// const dfsPostOrder = myBST.depthFirstSearchPostOrder(myBST.root, [])
// console.log('\nDFS Post Order:', dfsPostOrder)