class NodeGraph {
    value: number
    edges: number[]

    constructor(value: number) {
        this.value = value
        this.edges = []
    }
}

class Graph {
    numberOfNodes: number
    adjacentList: Record<string, NodeGraph>

    constructor() {
        this.numberOfNodes = 0
        this.adjacentList = {}
    }

    addVertex(value: number) {
        const newNode = new NodeGraph(value)

        this.adjacentList[newNode.value] = newNode
        this.numberOfNodes++

        return this
    }

    addEdges(node1: number, node2: number) {
        this.adjacentList[node1].edges.push(node2)
        this.adjacentList[node2].edges.push(node1)
        return this
    }

    showConnections() {
        // Violates SOLID - Single Responsibility
        console.log('\nMyGraph', this.adjacentList)
    }
}

const myGraph = new Graph()

myGraph.addVertex(0)
myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(6)

myGraph.addEdges(3, 1)
myGraph.addEdges(3, 4)
myGraph.addEdges(4, 2)
myGraph.addEdges(4, 5)
myGraph.addEdges(1, 2)
myGraph.addEdges(1, 0)
myGraph.addEdges(0, 2)
myGraph.addEdges(6, 5)

myGraph.showConnections()
