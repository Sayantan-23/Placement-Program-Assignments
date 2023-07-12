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

**Q.5 Whats Abstraction and Its Purpose?**

<u>_Answer -_</u> Abstraction simply means hiding the implementation details and showing only the functionality to the user. For example, when we send a message to someone we just see the message and whether it is delivered or not. But we can not see the internal process by which the app is sending the message.

_Purpose of abstraction_ - The purpose of abstraction in object-oriented programming is to simplify complexity, encapsulate implementation details, enhance modularity, and promote code maintainability. Abstraction allows developers to work at higher levels of abstraction by providing simplified interfaces, hiding unnecessary details, and focusing on essential concepts. It enables code reusability, separates concerns, facilitates team collaboration, and simplifies maintenance tasks.

**Q.6 Whats Polymorphism and Purpose of it?**

Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables the use of a single interface to represent multiple related objects, providing flexibility and extensibility in code.

The purpose of polymorphism is -

- _Code Flexibility_ - Polymorphism allows for the interchangeability of objects. By treating objects of different classes as objects of a common superclass, code can be written to operate on the superclass type, making it more flexible and adaptable to different types of objects.

- _Code Reusability_ - Polymorphism promotes code reuse. By defining common interfaces or abstract classes, different implementations can be created for specific subclasses while leveraging the shared interface. This reduces code duplication and promotes modular design.

- _Method Overriding_ - Polymorphism enables method overriding, where a subclass can provide its own implementation of a method defined in its superclass. This allows for customization and specialization of behavior while still adhering to the common interface defined by the superclass.

- _Runtime Determination_ - Polymorphism allows for the selection of the appropriate method implementation at runtime based on the actual type of the object. This dynamic dispatching allows for polymorphic behavior, where the correct method implementation is automatically determined based on the actual object being referenced.

- _Code Extensibility_ - Polymorphism facilitates the extension of code. New subclasses can be created that inherit from the common superclass, adding new functionality or modifying existing behavior. This extensibility enables the evolution and enhancement of code without impacting the existing codebase.

Overall, polymorphism provides flexibility, code reuse, and extensibility in object-oriented programming. By treating objects of different classes as objects of a common superclass, it allows for interchangeable usage, promotes code modularity, supports method overriding, enables runtime determination of method implementation, and facilitates the extension of code over time.

**Q.7 Whats Inheritance and Purpose of it?**

<u>_Answer -_</u> Inheritance is a key concept in object-oriented programming (OOP) that enables objects to inherit properties and behavior from a parent object or class. Its purpose is to promote code reusability, modularity, polymorphism, specialization, and relationship modeling.

Here are the main purposes of inheritance -

- _Code Reusability_- Inheritance allows subclasses to inherit attributes and methods from a superclass, eliminating the need to redefine common functionality. This promotes code reusability, reduces redundancy, and simplifies code maintenance.

- _Modularity and Organization_- Inheritance facilitates code organization by establishing a hierarchical structure. It allows for the creation of a superclass that defines shared attributes and behavior, promoting code modularity, separation of concerns, and a more organized codebase.

- _Polymorphism_- Inheritance plays a vital role in enabling polymorphism. By inheriting from a common superclass, objects of different classes can be treated as objects of the superclass. This flexibility allows for the use of a single interface to represent multiple related objects, simplifying code and promoting extensibility.

- _Specialization and Customization_- Inheritance allows subclasses to specialize and customize the inherited behavior. Subclasses can override methods to provide their own implementation or add new attributes and methods specific to their requirements. This promotes specialization, customization, and fine-grained control over object behavior.

- _Relationship Modeling_- Inheritance enables developers to model real-world relationships and hierarchies in the code. By creating classes that inherit from a superclass, the code reflects the relationships and classifications present in the problem domain, leading to more intuitive and accurate representations.

Overall, inheritance enhances code reusability, modularity, polymorphism, specialization, and relationship modeling in OOP. It simplifies code maintenance, promotes efficient development practices, and facilitates the creation of scalable and maintainable software systems.

**Q.8 Whats Encapsulation and Purpose of it?**

<u>_Answer -_</u> Encapsulation is a fundamental concept in object-oriented programming (OOP) that involves bundling data and methods together into a single unit called an object. Its purpose is to provide data hiding, modularity, maintainability, abstraction, and information security.

Here are the main purposes of encapsulation -

- _Data Hiding_ -  Encapsulation allows for the hiding of internal implementation details by restricting direct access to an object's attributes from outside the object. This protects the integrity of the data and prevents unauthorized modifications or access, promoting data security and encapsulation.

- _Modularity and Maintainability_ -  Encapsulation promotes modularity by encapsulating related attributes and methods within an object. Changes to the internal implementation of an object can be made without affecting other parts of the codebase. This modular approach simplifies maintenance, enhances code organization, and makes debugging more manageable.

- _Abstraction_ -  Encapsulation provides a level of abstraction by exposing only the essential information and hiding unnecessary details. Objects present a clear interface or public methods that allow users to interact with them. This abstraction simplifies usage, promotes code readability, and reduces dependencies on internal implementation details.

- _Information Security_ -  Encapsulation helps protect sensitive information by controlling access to an object's attributes. By providing controlled access methods such as getters and setters, encapsulation enables validation, data manipulation, and security checks before accessing or modifying the data. This ensures data integrity and guards against unauthorized access.

- _Code Flexibility_ -  Encapsulation allows for flexible code evolution. Modifying the internal implementation of an object, as long as the public interface remains unchanged, does not impact the external code that uses the object. This flexibility enables efficient code maintenance, extensibility, and adaptability to changing requirements.

**Q.9 Explain Class in JavaScript?**

<u>_Answer -_</u> In JavaScript, a class is a blueprint or a template for creating objects that share common properties and behavior. It is a syntactical construct introduced in ECMAScript 2015 (ES6) to provide a more structured and intuitive way of working with objects in JavaScript, resembling class-based inheritance found in other programming languages.

The syntax for creating a class in JavaScript is as follows -

```javascript
class ClassName {
  constructor() {
    // constructor code
  }

  method1() {
    // method code
  }

  method2() {
    // method code
  }

  // more methods and properties...
}
```

Classes provide a more structured and object-oriented approach to programming in JavaScript. They help organize code, encapsulate data and behavior, promote code reuse through inheritance, and provide a clear blueprint for creating objects with consistent properties and behavior. Classes in JavaScript make it easier to work with objects and follow a more familiar class-based programming paradigm.

**Q.10 What’s Super Keyword & What it does?**

<u>_Answer -_</u> In JavaScript, the `super` keyword is used to call functions or access properties on an object's parent or superclass. It provides a way to invoke the parent class's constructor, methods, and properties from within a subclass.

The `super` keyword has the following uses:

- _Accessing the Parent Constructor_ - When creating a subclass, the `super` keyword is used in the constructor to call the constructor of the parent class. This allows the subclass to inherit the properties and behavior defined in the parent class. It is typically used as the first statement in the subclass constructor.

```javascript
class ChildClass extends ParentClass {
  constructor() {
    super(); // Call the constructor of the parent class
    // Additional subclass-specific initialization code
  }
}
```

- _Calling Parent Class Methods_ - The `super` keyword can be used to invoke methods defined in the parent class. It allows the subclass to extend the behavior of the parent class's method by providing additional functionality or overriding the parent class's method.

```javascript
class ParentClass {
  someMethod() {
    console.log('Parent method');
  }
}

class ChildClass extends ParentClass {
  someMethod() {
    super.someMethod(); // Call the parent class method
    console.log('Child method');
  }
}

const obj = new ChildClass();
obj.someMethod();
// Output:
// Parent method
// Child method
```

- _Accessing Parent Class Properties_ - The `super` keyword can also be used to access properties defined in the parent class. It allows the subclass to access and utilize the properties of the parent class, either directly or as part of calculations or comparisons.

```javascript
class ParentClass {
  constructor() {
    this.property = 'Parent property';
  }
}

class ChildClass extends ParentClass {
  printProperty() {
    console.log(super.property); // Access the parent class property
  }
}

const obj = new ChildClass();
obj.printProperty();
// Output: Parent property
```

The `super` keyword facilitates the interaction between a subclass and its parent class in JavaScript. It allows for proper inheritance, enables the extension and overriding of parent class methods, and provides access to parent class properties.
