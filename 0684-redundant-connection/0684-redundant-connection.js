/**
 * @param {number[][]} edges
 * @return {number[]}
 */
class UnionFind {
    constructor(n) {
        this.parent = Array(n + 1).fill(0).map((_, i) => i);
        this.rank = Array(n + 1).fill(1);
    }

    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]); // Path compression
        }
        return this.parent[node];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return false; // Cycle detected

        // Union by rank
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }

        return true;
    }
}

var findRedundantConnection = function(edges) {
    let uf = new UnionFind(edges.length);

    for (let [u, v] of edges) {
        if (!uf.union(u, v)) {
            return [u, v]; // This edge forms a cycle
        }
    }

    return [];
};