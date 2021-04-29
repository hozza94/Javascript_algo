const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};

const bfs = (graph, startNode) => {
    let visited = [];
    let q1 = [];

    q1.push(startNode);

    while (q1.length !== 0) {
        const node = q1.shift();

        if (!visited.includes(node)){
            visited.push(node);
            q1 = [...q1, ...graph[node]];
        }
    }
    
    return visited;
};

const dfs = (graph, startNode) => {
    let visited = [];
    let stack = [];
    
    stack.push(startNode);

    while (stack.length !== 0) {
        const top = stack.pop();

        if (!visited.includes(top)) {
            visited.push(top);
            stack = [...stack, ...graph[top].reverse()];
        }

    }
    return visited;
}

console.log(bfs(graph,"A"));

console.log(dfs(graph,"A"));
