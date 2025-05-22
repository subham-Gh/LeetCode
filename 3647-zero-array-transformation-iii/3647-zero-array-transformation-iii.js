const maxRemoval =  (n, q,
    g = _.groupBy(q, x => x[0]),
    h = new MaxPriorityQueue(),
    d = new Uint32Array(n.length),
    o = 0, j = 0,
    $ = (x, i) => o >= x || (h.front() ?? -1) >= i && $(x, i, ++d[++o, h.pop()])
) => n.every((x, i) => $(x, i, o -= ~~d[i - 1], g[i]?.forEach(y => h.push(y[1])))) ? h.size() : -1