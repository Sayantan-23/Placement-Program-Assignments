# JavaScript Answers

**Q.1 Explain Hoisting in JavaScript?**

<u>_Answer -_</u> Hoisting in JavaScript refers to the process where the interpreter appears to move declarations of functions, variables and classes to the top of their scope, prior to execution of the code. It allows us to use functions and variables before they are even declared.

Functions and variables are hoisted differently in JavaScript. If we declare a function using the function keyword and call the function before the function declaration it will give us the desired output because of hoisting. Example -

```javascript
printHello();
function printHello() {
  console.log(“Hello”);
}
```

Output: “Hello”

This function will print Hello without any error even though we are calling the function in the first line before we declare it in line no. 2.
For variables declared using var keyword if we try to access the value of the variable before declaring it, it will give us undefined. Example -

```javascript
console.log(x);
var x = 10;
```

Output: undefined

Variables that are declared using let or const can not be accessed before initialization because of the temporal dead zone.


**Q.2 Explain Temporal Dead Zone?**

<u>_Answer -_</u> 