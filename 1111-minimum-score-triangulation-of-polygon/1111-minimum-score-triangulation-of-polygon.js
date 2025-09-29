/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(polygonValues) {
  let vertexCount = polygonValues.length;
  let minScore = Array.from({ length: vertexCount }, () => Array(vertexCount).fill(0));

  for (let gap = 2; gap < vertexCount; gap++) {
    for (let start = 0; start + gap < vertexCount; start++) {
      let end = start + gap;
      let currentMinScore = Infinity;

      for (let mid = start + 1; mid < end; mid++) {
        let triangleScore =
          minScore[start][mid] +
          minScore[mid][end] +
          polygonValues[start] * polygonValues[mid] * polygonValues[end];
        currentMinScore = Math.min(currentMinScore, triangleScore);
      }
      minScore[start][end] = currentMinScore;
    }
  }
  return minScore[0][vertexCount - 1];
};