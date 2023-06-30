// Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

// Examples:

// Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output1 : Yes

// For the given arr[], the Binary Search Tree is:

//            7
//          /   \
//         4     12
//       /  \    /
//      3    6  8
//     /    /    \
//    1    5      10

// Input2 : arr[] = {11, 6, 13, 5, 12, 10}

// Output2 : No

// The given arr[] does not represent the level order traversal of a BST.

class NodeDetails {
  constructor() {
    this.data = 0;
    this.min = 0;
    this.max = 0;
  }
}

const levelOrderIsOfBST = (arr, n) => {
  if (n === 0) {
    return true;
  }

  const queue = [];

  let i = 0;

  const newNode = new NodeDetails();
  newNode.data = arr[i++];
  newNode.min = Number.MIN_VALUE;
  newNode.max = Number.MAX_VALUE;
  queue.push(newNode);

  while (i !== n && queue.length > 0) {
    const temp = queue.shift();

    if (i < n && arr[i] < temp.data && arr[i] > temp.min) {
      const newNode = new NodeDetails();
      newNode.data = arr[i++];
      newNode.min = temp.min;
      newNode.max = temp.data;
      queue.push(newNode);
    }

    if (i < n && arr[i] > temp.data && arr[i] < temp.max) {
      const newNode = new NodeDetails();
      newNode.data = arr[i++];
      newNode.min = temp.data;
      newNode.max = temp.max;
      queue.push(newNode);
    }
  }

  if (i === n) {
    return true;
  }

  return false;
};

// Example 1
const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const n = arr.length;

if (levelOrderIsOfBST(arr, n)) {
  console.log("Yes");
} else {
  console.log("No");
}

// Example 2
const arr2 = [11, 6, 13, 5, 12, 10];
const n2 = arr2.length;

if (levelOrderIsOfBST(arr2, n2)) {
  console.log("Yes");
} else {
  console.log("No");
}
