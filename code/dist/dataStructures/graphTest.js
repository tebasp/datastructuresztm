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
        this.adjacentList[node1].edges.push(node2);
        this.adjacentList[node2].edges.push(node1);
        return this;
    };
    Graph.prototype.showConnections = function () {
        // Violates SOLID - Single Responsibility
        console.log('\nMyGraph', this.adjacentList);
    };
    return Graph;
}());
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
