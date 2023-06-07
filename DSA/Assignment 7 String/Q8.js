// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Example 1:**

// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// **Output:** true

const checkStraightLine = (coordinates) => {
  coordLen = coordinates.length;

  if (coordLen <= 2) return true;

  function calculateSlope(x1, y1, x2, y2, x, y) {
    return (y2 - y1) * (x - x1) - (y - y1) * (x2 - x1);
  }

  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    let [x, y] = coordinates[i];
    if (calculateSlope(x1, y1, x2, y2, x, y) !== 0) {
      return false;
    }
  }

  return true;
};

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
console.log(checkStraightLine(coordinates));
// Output: true
