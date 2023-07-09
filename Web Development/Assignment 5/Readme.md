# Assignment 5

**Q.1 What’s difference between Synchronous and Asynchronous?**

<u>*Answer -*</u> In JavaScript, synchronous operations are executed in a blocking manner, meaning that the program waits for each operation to finish before moving on to the next one. This can lead to potential delays if an operation takes a long time to complete.

On the other hand, asynchronous operations in JavaScript allow tasks to be executed concurrently and independently from the main program flow. These operations are typically handled through callbacks, promises, or async/await syntax. Asynchronous operations initiate a task and then continue with the execution of the program without waiting for the task to finish. Once the task is completed, a callback function is triggered or a promise is resolved, allowing the program to handle the result.

Asynchronous operations are commonly used for time-consuming tasks like network requests, file operations, or interactions with databases, as they prevent the program from becoming unresponsive while waiting for these tasks to complete. By utilizing callbacks, promises, or async/await, developers can write code that is more efficient and responsive, allowing for better user experiences in JavaScript applications.

**Q.2 What are Web Apis?**

<u>*Answer -*</u> 