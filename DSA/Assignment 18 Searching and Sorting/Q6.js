// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There is **no limit** to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons*.

// **Example 1:**
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

// **Example 2:**
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

// **Example 3:**
// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

const findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let counter = 0,
    end = null;

  for (let [x, y] of points) {
    if (end == null || end < x) {
      counter++;
      end = y;
    } else {
      end = Math.min(end, y);
    }
  }
  return counter;
};

const points1 = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
console.log(findMinArrowShots(points1));
// Output: 2

// Example 2:
const points2 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
console.log(findMinArrowShots(points2));
// Output: 4

// Example 3:
const points3 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
console.log(findMinArrowShots(points3));
// Output: 2
