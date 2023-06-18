// You are given a stack **St**. You have to reverse the stack using recursion.

// **Example 1:**
// Input:St = {3,2,1,7,6}
// Output:{6,7,1,2,3}

// **Example 2:**
// Input:St = {4,3,9,6}
// Output:{6,9,3,4}

let st = [];

const insert_at_bottom = (x) => {
  if (st.length === 0) {
    st.push(x);
  } else {
    let a = st.pop();
    insert_at_bottom(x);
    st.push(a);
  }
};

const reverse = () => {
  if (st.length > 0) {
    let x = st.pop();
    reverse();
    insert_at_bottom(x);
  }
};

// Example 1
st = [3, 2, 1, 7, 6];
console.log("Original Stack (Example 1):");
console.log(st.join(" "));

reverse();

console.log("Reversed Stack (Example 1):");
console.log(st.join(" "));

// Example 2
st = [4, 3, 9, 6];
console.log("Original Stack (Example 2):");
console.log(st.join(" "));

reverse();

console.log("Reversed Stack (Example 2):");
console.log(st.join(" "));
