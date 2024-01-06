"use strict";
exports.__esModule = true;
exports.Graph = void 0;
var NodeGraph = /** @class */ (function () {
    function NodeGraph(value) {
        this.value = value;
        this.edges = [];
    }
    return NodeGraph;
}());
var Graph = /** @class */ (function () {
    function Graph() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    Graph.prototype.addVertex = function (value) {
        var newNode = new NodeGraph(value);
        this.adjacentList[newNode.value] = newNode;
        this.numberOfNodes++;
        return this;
    };
    Graph.prototype.addEdges = function (node1, node2) {
        var _a, _b, _c, _d;
        // Push edges to both node because it is Undirected
        (_b = (_a = this.adjacentList[node1]) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b.push(node2);
        (_d = (_c = this.adjacentList[node2]) === null || _c === void 0 ? void 0 : _c.edges) === null || _d === void 0 ? void 0 : _d.push(node1);
        return this;
    };
    Graph.prototype.showConnections = function () {
        // Violates SOLID - Single Responsibility
        console.log('\nMyGraph', this.adjacentList);
    };
    return Graph;
}());
exports.Graph = Graph;
var myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdges(3, 1);
myGraph.addEdges(3, 4);
myGraph.addEdges(4, 2);
myGraph.addEdges(4, 5);
myGraph.addEdges(1, 2);
myGraph.addEdges(1, 0);
myGraph.addEdges(0, 2);
myGraph.addEdges(6, 5);
myGraph.showConnections();
