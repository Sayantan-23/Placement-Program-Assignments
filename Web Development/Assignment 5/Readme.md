# Assignment 5

**Q.1 What’s difference between Synchronous and Asynchronous?**

<u>_Answer -_</u> In JavaScript, synchronous operations are executed in a blocking manner, meaning that the program waits for each operation to finish before moving on to the next one. This can lead to potential delays if an operation takes a long time to complete.

On the other hand, asynchronous operations in JavaScript allow tasks to be executed concurrently and independently from the main program flow. These operations are typically handled through callbacks, promises, or async/await syntax. Asynchronous operations initiate a task and then continue with the execution of the program without waiting for the task to finish. Once the task is completed, a callback function is triggered or a promise is resolved, allowing the program to handle the result.

Asynchronous operations are commonly used for time-consuming tasks like network requests, file operations, or interactions with databases, as they prevent the program from becoming unresponsive while waiting for these tasks to complete. By utilizing callbacks, promises, or async/await, developers can write code that is more efficient and responsive, allowing for better user experiences in JavaScript applications.

**Q.2 What are Web Apis?**

<u>_Answer -_</u> Web APIs, short for Web Application Programming Interfaces, are sets of rules and protocols that allow different software applications to interact and communicate with each other over the internet. They provide a means for developers to access and utilize the functionality of web services, platforms, or systems.

Web APIs are commonly used to retrieve data from remote servers, submit data to a server for processing, perform actions on a remote system, or integrate with third-party services. These APIs define the available endpoints, request methods, data formats, and authentication mechanisms necessary to interact with the provided functionality.

By leveraging Web APIs, developers can extend the capabilities of their applications by integrating with various services, accessing external data sources, or enabling interoperability between different systems. This facilitates the development of dynamic, interconnected web applications and fosters the creation of innovative services and integrations across the web.

**Q.3 Explain SetTimeOut and setInterval?**

<u>_Answer -_</u> `setTimeout` and `setInterval` are built-in functions that allow us to execute code after a delay or at a specified time intervals. They are used for implementing timers and scheduling tasks in JavaScript applications.

- `setTimeout` - It is used to execute a function or evaluate an expression once after a specified delay (in milliseconds). It takes two parameters: the function/expression to be executed and the delay in milliseconds. After the specified delay, the function/expression is executed asynchronously.

```javascript
setTimeout(function () {
  // Code to be executed after the delay
}, 2000); // Delay of 2000 milliseconds (2 seconds)
```

- `setInterval` - It is used to repeatedly execute a function or evaluate an expression at a specified interval. It takes two parameters: the function/expression to be executed and the interval in milliseconds. The function/expression is executed asynchronously at each interval until clearInterval is called.

```javascript
setInterval(function () {
  // Code to be executed at each interval
}, 1000); // Interval of 1000 milliseconds (1 second)
```

**Q.4 How can you handle Async code in JavaScript?**

<u>_Answer -_</u> In JavaScript, there are several techniques for handling asynchronous code to ensure proper execution and avoid blocking the main program flow.

- Callbacks - Callbacks are functions passed as arguments to asynchronous functions. They are invoked once the asynchronous operation completes. The callback function can handle the result or error and perform further actions.

```javascript
const fetchData = (callback) => {
  // Asynchronous operation, e.g., fetching data from an API
  // Once the data is available or an error occurs, invoke the callback
  if (/* data is successfully fetched */) {
    callback(null, data); // Pass null as the error and data as the result
  } else {
    callback(error); // Pass the error to the callback
  }
}

// Example
fetchData((error, data) => {
  if (error) {
    // Handle the error
  } else {
    // Use the data
  }
});
```

- Promises - Promises provide a more structured and intuitive way to handle asynchronous operations. A Promise represents the eventual completion (or failure) of an asynchronous operation and allows chaining of operations. Promises have methods like `then()` and `catch()` to handle the resolved value or the rejected error.

```javascript
const fetchData = () => {
  return new Promise(function(resolve, reject) {
    // Asynchronous operation, e.g., fetching data from an API
    if (/* data is successfully fetched */) {
      resolve(data); // Resolve the Promise with the data
    } else {
      reject(error); // Reject the Promise with the error
    }
  });
}

// Example
fetchData()
  .then(function(data) {
    // Use the resolved data
  })
  .catch(function(error) {
    // Handle the rejected error
  });
```

- Async/await - Async/await is a modern syntax introduced in ES2017 (ES8) that allows writing asynchronous code in a more synchronous style. The `async` keyword is used to define an asynchronous function, and the await keyword is used to pause the execution until a Promise is resolved. Async/await makes asynchronous code look more like traditional synchronous code, which can be easier to read and understand.

```javascript
const fetchData = async () => {
  try {
    // Asynchronous operation, e.g., fetching data from an API
    const data = await fetch(url);
    // Use the fetched data
  } catch (error) {
    // Handle the error
  }
}

// Usage
fetchData();
```

These approaches offer different levels of abstraction and readability, allowing us to choose the one that best suits our needs and the complexity of our asynchronous code. Promises and async/await are generally considered more modern and easier to work with, providing better error handling and code organization compared to callbacks.

**Q.5 What are Callbacks &  Callback Hell?**

<u>_Answer -_</u> Callbacks are functions that are passed as arguments to other functions and are executed once a specific task or operation is completed. They are commonly used in JavaScript to handle asynchronous operations and ensure that code is executed in the desired order.

_Callback Hell_ - Callback Hell, also known as the Pyramid of Doom, is a situation that arises when multiple asynchronous operations are nested inside one another using callbacks, resulting in code that becomes deeply indented and difficult to read and maintain. It typically occurs when callbacks are used extensively without proper structuring or organization.

```javascript
asyncOperation1(function(error, result1) {
  if (error) {
    // Handle error
  } else {
    asyncOperation2(function(error, result2) {
      if (error) {
        // Handle error
      } else {
        asyncOperation3(function(error, result3) {
          if (error) {
            // Handle error
          } else {
            // Perform further operations with result1, result2, and result3
          }
        });
      }
    });
  }
});
```

As we can see, each asynchronous operation is nested inside the callback of the previous operation, leading to an excessive level of indentation. This makes the code harder to understand, debug, and maintain. It also becomes challenging to handle errors and perform complex logic involving multiple asynchronous operations.

**Q.6 What are Promises & Explain Some Three Methods of Promise?**

<u>_Answer -_</u> Promises are objects in JavaScript that represent the eventual completion or failure of an asynchronous operation and allow for more structured and readable handling of asynchronous code. They provide a way to deal with asynchronous operations in a more organized and sequential manner.

Promises have three essential states -

1. **Pending** - The initial state when a Promise is created. It represents an ongoing or unresolved operation.

2. **Fulfilled/Resolved** - The state of a Promise when the operation is completed successfully, resulting in a resolved value. The Promise transitions to this state using the resolve() method.

3. **Rejected** - The state of a Promise when the operation encounters an error or failure. The Promise transitions to this state using the reject() method.

Promises provide three important methods for handling asynchronous operations -

- `then()` - The `then()` method is used to handle the resolved value of a Promise. It takes two optional callback functions as arguments: `onFulfilled` and `onRejected`. The `onFulfilled` callback is executed when the Promise is resolved, while the `onRejected` callback is executed when the Promise is rejected.

```javascript
myPromise.then(
  function(result) {
    // Handle the resolved value
  },
  function(error) {
    // Handle the rejected error
  }
);
```

The `then()` method also returns a new Promise, allowing for chaining multiple asynchronous operations.

- `catch()` - The `catch()` method is used to handle any rejected/error state of a Promise. It is equivalent to using `then(null, onRejected)` and provides a cleaner way to handle errors.

```javascript
myPromise.catch(function(error) {
  // Handle the rejected/error state
});
```

- `finally()` - The `finally()` method allows us to specify a callback function that will be executed regardless of whether the Promise is resolved or rejected. This method is useful for performing cleanup operations or finalizing tasks.

```javascript
myPromise.finally(function() {
  // Perform cleanup or finalization
});
```

By utilizing these methods, Promises enable a more structured and readable approach to handle asynchronous code. They help avoid callback hell and provide a way to chain asynchronous operations together, making code organization and error handling more manageable.

