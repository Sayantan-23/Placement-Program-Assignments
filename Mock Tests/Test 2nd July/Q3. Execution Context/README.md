# Execution Context in JavaScript

Execution context refers to the runtime in which JavaScript code is executed. Everything in javascript happens inside an execution context. Whenever we run a JS code for the first time a **Global Execution Context (GEC)** is created inside the **Call Stack**. Each function in JavaScript has it's own execution context. Whenever we call a function a new execution context for that function is created above the **GEC** in the **Call Stack**. When the execution of the function is finished the execution context for the function gets deleted from the call stack and when the execution of the whole javascript code gets finished the **GEC** gets deleted from the **Call Stack**.

It has mainly two phases - **Creation Phase** and **Execution Phase**. In Creation phase execution context is created and it determines the values of variables and sets up scope chain for execution context. In Execution phase the JS code is executed.

Execution Context mainly has two components - **Memory Allocation** and **Code Execution**. Lets take an example with diagrams to understand this clearly -

```javascript
function sum(num1, num2) {
  var result = num1 + num2;
  return result;
}

var a = 10;
var b = 20;

var ans = sum(a, b);
console.log(ans);
```

At first, Memory is allocated for the function sum and variables a, b and ans. For the function the function reference gets stored in the memory and variables gets stored as undefined in the memory.

![Screenshot 2023-07-04 214520](https://github.com/Sayantan-23/FoodDeliveryWebsite/assets/110087385/86d6cd69-7e3c-4afb-9334-f1ba761e29b1)

After the memory allocation the second part is code execution. It goes line by line and when it encounters the line `var a = 10;`, it allocates `a = 10` in the memory. Then, similarly `b = 20;` gets allocated. Then when it reaches the line where the function sum is called, it creates a new execution context for the function sum and the same process of memory allocation and code execution happens for the function now. 

![Screenshot 2023-07-04 221827](https://github.com/Sayantan-23/FoodDeliveryWebsite/assets/110087385/57ed7e2f-df4c-4f34-b0de-8281199ead8d)

It allocates `num1 = undefined`, `num2 = undefined` and `result = undefined` and the at the time of execution it executes the function and allocates `result = 30` and returns it. Then the execution context for this function gets deleted from the call stack and allocates `ans = 30`. And then, it gets printed in the console.

![Screenshot 2023-07-04 221915](https://github.com/Sayantan-23/FoodDeliveryWebsite/assets/110087385/27ac039a-67c8-454f-96b4-aa34a9ce0d65)

At last after the execution is finished the **Global Execution Context** gets deleted from the **Call Stack**.
