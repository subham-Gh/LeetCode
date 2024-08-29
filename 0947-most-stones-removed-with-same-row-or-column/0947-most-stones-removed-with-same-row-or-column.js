/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const uf = new UnionFind();
    
    for (const [x, y] of stones) {
        uf.union(x, ~y);  // Use `~y` to separate row and column values
    }
    
    const rootSet = new Set();
    for (const [x, y] of stones) {
        rootSet.add(uf.find(x));
    }
    
    return stones.length - rootSet.size;
};


class UnionFind {
    constructor() {
        this.parent = {};
        this.rank = {};
    }

    find(x) {
        if (!(x in this.parent)) {
            this.parent[x] = x;
            this.rank[x] = 0;
        }
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);  // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}