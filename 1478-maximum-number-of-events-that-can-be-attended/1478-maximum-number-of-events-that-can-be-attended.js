/**************************\U0001f60e**************************/
const maxEvents = (e, d = 0,
    q = new MinPriorityQueue(),
    g = _.groupBy(e, x => x[0]),
    $ = (x = q.pop()) => x ? x < d ? $() : 1 : 0
) => _.sumBy(
    e.sort((a, b) => a[0] - b[0]),
    ([a, b]) => $(g[d = Math.max(d + 1, a)]?.forEach(x => q.push(x[1])))
)