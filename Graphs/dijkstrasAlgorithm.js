// NAIVE PRIORITY QUEUE - SLOW!! USES SORT()
// INSTEAD OF BINARY MIN HEAP

// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }

//     enqueue(val, priority) {
//         this.values.push({val, priority});
//         this.sort();
//     }
//     dequeue() {
//         return this.values.shift();
//     }
//     sort() {
//         this.values.sort((a,b) => a.priority - b.priority);
//     }
// };

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let child = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx];
            if (child.priority >= parent.priority) break;
            this.values[parentIdx] = child;
            this.values[idx] = parent;
            idx = parentIdx; 
        }

    }

    dequeue() {        
         let min = this.values[0];
         let end = this.values.pop();
         if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
         }
         return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const parent = this.values[0];
        while(true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild.priority < parent.priority) swap = leftIdx
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (
                    (swap === null && rightChild.priority < parent.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightIdx;
                  }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = parent;
            idx = swap;

        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


class WeightedGrap {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] // to return at end
        let smallest;

        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        // as long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // we are done
                // build path to return
                while(previous[smallest]) {
                        path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    //calculate new distance to neighboringnode
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    if(candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor;
                            distances[nextNeighbor] = candidate;
                        //updating previous - how we got to neighbor;
                            previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                            nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }

        }
        return path.concat(smallest).reverse()
    }
}

const graph = new WeightedGrap();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')


graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(graph.Dijkstra('A', 'E'))
 