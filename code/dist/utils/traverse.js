"use strict";
exports.__esModule = true;
// Traverse the tree
function traverse(node) {
    var tree = {
        value: node === null || node === void 0 ? void 0 : node.value,
        left: node.left,
        right: node.right
    };
    tree.left = (node === null || node === void 0 ? void 0 : node.left) === null ? null : traverse(node === null || node === void 0 ? void 0 : node.left);
    tree.right = (node === null || node === void 0 ? void 0 : node.right) === null ? null : traverse(node === null || node === void 0 ? void 0 : node.right);
    return tree;
}
exports["default"] = traverse;
