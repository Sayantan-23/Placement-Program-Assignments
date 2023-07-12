# Assignment 6

**Q.1 What’s Constructor And Its Purpose?**

<u>_Answer -_</u> A constructor is a special method within a class that is used to initialize objects. Its purpose is to set up the initial state of an object, allocate necessary memory or resources, and perform any other initialization tasks required for the object to be used. Constructors are automatically called when an object is created and can accept parameters for customizing the initialization process. They ensure that objects are properly initialized and ready for use, providing a standardized and convenient way to set up objects in object-oriented programming.

**Q.2 Explain `this` Keyword and its purpose?**

<u>_Answer -_</u> The `this` keyword in JavaScript refers to the current execution context or the object on which a method is being invoked. Its purpose is to provide access to the properties and methods of the current object within the context of a function or method.

The `this` keyword has the following purposes in JavaScript:

- Method Invocation: When a function is invoked as a method of an object, `this` refers to the object itself. It allows the method to access and manipulate the object's properties and methods.

- _Function Invocation_ - When a function is called as a standalone function, `this` refers to the global object (`window` in browsers, `global` in Node.js). However, in strict mode (`use strict`), `this` is undefined.

- _Constructor Invocation_ - When a function is used as a constructor with the new keyword, this refers to the newly created object. It allows the constructor function to initialize the object's properties.

- _Event Handlers_ - In the context of event handling, `this` typically refers to the element that triggered the event. It enables the event handler to access and manipulate the properties and behavior of the element.

Understanding the behavior of this and its usage is important in JavaScript to correctly access and manipulate object properties, handle events, and work with constructor functions. It provides a flexible mechanism to interact with the current object or context within a function.

**Q.3 What’s Call Apply Bind Method & Difference Between them?**

<u>_Answer -_</u> `.call()`, `.apply()` and `.bind()` methods are used to manipulate the execution context of a function allowing us to explicitly set the value of `this` and pass arguments to the function.

- `.call()` - The `.call()` method is used to invoke a function and explicitly set the value of this. It accepts arguments individually as comma separated values.

- `.apply()` - The `.apply()` method is similar to `.call()`, but it accepts arguments as an array or array-like object. It is particularly useful when the number of arguments is not known in advance or when the arguments are already available in an array. Here is the example of `.call()` and `.apply()` with code -

```javascript
const person = {
  name: 'Sayantan',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const otherPerson = {
  name: 'Deep'
};

person.greet.call(otherPerson, 'Hello');
// Output: Hello, Deep!

person.greet.apply(otherPerson, ['Hello', '!']);
// Output: Hello, Deep!
```

- `.bind()` - The .bind() method is used to create a new function with a specific execution context (the value of this) and, optionally, preset arguments. It returns a new function that can be invoked later. Here is the example of `.bind()` with code -

```javascript
const person = {
  name: 'Sayantan',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const boundGreet = person.greet.bind({ name: 'Alice' }, 'Hello');
boundGreet();
// Output: Hello, Alice!
```

In this example, `.bind()` creates a new function boundGreet with the execution context `{ name: 'Alice' }` and the argument 'Hello' preset. When `boundGreet()` is invoked, it logs the desired output.

**Q.4 Explain OOPS?**

<u>_Answer -_</u> Object-Oriented Programming (OOP) is a programming paradigm that organizes code around the concept of objects, which represent real-world entities or concepts. OOP focuses on the creation of reusable and modular code by encapsulating data (attributes) and behavior (methods) into objects.

The core principles of OOP are:

- _Encapsulation_: Encapsulation is the bundling of data and methods that operate on that data within a single unit called an object. It allows for data hiding, where the internal state of an object is not directly accessible from outside. Instead, interactions with the object are performed through a well-defined interface.

- _Inheritance_: Inheritance allows objects to inherit properties and behavior from a parent object or class. It establishes an "is-a" relationship between objects, where a subclass inherits the characteristics of its superclass. This promotes code reuse and facilitates the creation of hierarchical relationships between objects.

- _Polymorphism_: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It allows for the same method to be implemented differently in different classes, enabling the selection of the appropriate method based on the object's actual type at runtime. Polymorphism promotes flexibility and extensibility in code.

- _Abstraction_: Abstraction focuses on defining simplified interfaces for interacting with objects, hiding unnecessary details and complexities. It allows developers to work at higher levels of abstraction without worrying about the internal implementation. Abstraction helps manage complexity and enhances code maintainability.

- _Object_: An object is an instance of a class and represents a specific entity or concept. It encapsulates data (attributes) and behavior (methods) related to that entity. Objects interact with each other by invoking methods and accessing attributes.

OOP promotes modular, reusable, and maintainable code by organizing it into self-contained objects. By encapsulating data and behavior, OOP allows for better code organization, code reuse, and separation of concerns. It provides a structured approach to software development, making it easier to manage and scale complex projects.

