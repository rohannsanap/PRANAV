// Define the graph using adjacency list
const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: []
};

function bfs(start) {
  const visited = [];
  const queue = [start];
  const seen = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    if (!seen.has(node)) {
      visited.push(node);
      seen.add(node);
      const neighbors = graph[node] || [];
      for (let n of neighbors) {
        if (!seen.has(n)) queue.push(n);
      }
    }
  }

  return visited;
}

function dfs(start) {
  const visited = [];
  const stack = [start];
  const seen = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!seen.has(node)) {
      visited.push(node);
      seen.add(node);
      const neighbors = graph[node] || [];
      // reverse to simulate recursive DFS order
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!seen.has(neighbors[i])) stack.push(neighbors[i]);
      }
    }
  }

  return visited;
}

function runBFS() {
  const start = parseInt(document.getElementById("start").value);
  if (!graph[start]) {
    document.getElementById("result").innerText = "Invalid start node.";
    return;
  }
  const result = bfs(start);
  document.getElementById("result").innerText = `BFS from ${start}: ${result.join(" → ")}`;
}

function runDFS() {
  const start = parseInt(document.getElementById("start").value);
  if (!graph[start]) {
    document.getElementById("result").innerText = "Invalid start node.";
    return;
  }
  const result = dfs(start);
  document.getElementById("result").innerText = `DFS from ${start}: ${result.join(" → ")}`;
}
