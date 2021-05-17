 class Graph {
     constructor() {
         this.adjacencyList = {}
     }
     
     addVertex(vertex) {
         // Generally no IF statement is needed because 
         // we will be dealing with non-duplicates vertices.
         if (!this.adjacencyList[vertex]) {
             this.adjacencyList[vertex] = [];
         }
     }

     addEdge(vertex1, vertex2) {
         this.adjacencyList[vertex1].push(vertex2);
         this.adjacencyList[vertex2].push(vertex1)
     }

     removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
            return v !== vertex2;
        })

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
            return v !== vertex1;
        })
     }

     removeVertex(vertex) {
         this.adjacencyList[vertex].forEach((adjacent) => {
             this.removeEdge(vertex, adjacent)
         })

         delete this.adjacencyList[vertex];
     }

     depthFirstRecursive(start) {
         const result = [];
         const visited = {};
         const adjacencyList = this.adjacencyList;


        //  function dfs(vertex) {}
        //  dfs(start)

        // ANOTHER WAY. COMPARE TO TOP ^^
        (function dfs(vertex) {
            if (!vertex) return null;
              visited[vertex] = true;
              result.push(vertex)

            for (const neighbor of adjacencyList[vertex]) {
                if (!visited[neighbor]) dfs(neighbor);
            }

            //   adjacencyList[vertex].forEach(neighbor => {
            //     if (!visited[neighbor]) dfs(neighbor)
            // })
        })(start);

        return result;
     }

     depthFirstIterative(start) {
         const stack = [start];
         const visited = {};
         const result = [];
        //  const adjacencyList = this.adjacencyList;
         // have it here. instead of re-initializing in the while loop
         let currentVertex;
          visited[start] = true;
         
        while(stack.length) {
            currentVertex = stack.pop();
              result.push(currentVertex);
            
              this.adjacencyList[currentVertex].forEach(neighbor => {
                  if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        stack.push(neighbor)
                  }
              })

        }
        return result;

     }

     breadthFirst(start) {
         const queue = [start];
         const result = [];
         const visited = {};

          visited[start] = true;
         let currentVertex;

         while (queue.length) {
             currentVertex = queue.shift();
               result.push(currentVertex);

             this.adjacencyList[currentVertex].forEach(neighbor => {
                 if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor)
                 }
             })
         }
         return result;
     }

 }






let g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addVertex('G')


g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
console.log(g)
console.log(g.depthFirstRecursive('A'), 'dfs recursive')
console.log(g.depthFirstIterative('A'), 'dfs iterative')
console.log(g.breadthFirst('A'), 'breadth first')