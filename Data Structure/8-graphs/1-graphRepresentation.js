// Edge Graph

const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacency list
const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacency matrix
const graph2 = {
  0: [0, 0, 1, 0], // -> Node 0
  1: [0, 0, 1, 1], // -> Node 1
  2: [1, 1, 0, 1], // -> Node 2
  3: [0, 1, 1, 0], // -> Node 3
};
