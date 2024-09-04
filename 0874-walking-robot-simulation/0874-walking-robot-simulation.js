/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    // Define directions: North, East, South, West
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirIndex = 0; // Start facing north
  
  // Convert obstacles to a set for fast lookup
  const obstacleSet = new Set(obstacles.map(([x, y]) => `${x},${y}`));

  // Start position
  let x = 0, y = 0;
  let maxDistance = 0;

  // Process each command
  for (let command of commands) {
    if (command === -1) {
      // Turn right
      dirIndex = (dirIndex + 1) % 4;
    } else if (command === -2) {
      // Turn left
      dirIndex = (dirIndex + 3) % 4;
    } else {
      // Move forward command units
      let [dx, dy] = directions[dirIndex];
      for (let step = 0; step < command; step++) {
        const nextX = x + dx;
        const nextY = y + dy;
        if (obstacleSet.has(`${nextX},${nextY}`)) {
          // Stop if next step is an obstacle
          break;
        }
        x = nextX;
        y = nextY;
        // Update max distance squared from origin
        maxDistance = Math.max(maxDistance, x * x + y * y);
      }
    }
  }

  return maxDistance;
};