# THROW, TRY & CATCH

## Constructing an **Error**

JavaScript errors are objects that have a **name and message** property (*eg: ReferenceError: myVariable is not defined*). **Built-in errors** alert us about common mistakes in our code (*Runtime Errors: `ReferenceError`, `TypeError`*). But, what if we need an error message that isn't covered by the built-in errors? 

The `Error` function lets us make our own **error object** with a message that is unique to our program!

```javascript
console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
```

The `Error` function takes an argument of a string which becomes the value of the error's `message` property.

You might also see errors created with the `new` keyword (*ie: new Error*). Both methods will lead to the same functionality.

Keep in mind that **creating an error is not the same as throwing an error**. A thrown error will cause the program to stop running.

## The **throw** keyword

Creating an error doesn't cause our program to stop -- remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the `throw` keyword like so:

```javascript
throw Error('Something wrong happened');
// Error: Something wrong happened
```

When we use the `throw` keyword, the error is thrown and code after the `throw` statement will not execute.

## The try...catch Statement

Up to this point, thrown errors have caused our program to stop running. But, we have the ability to anticipate and *handle* these errors by writing code to address the error and allow our program to continue running.

In JavaScript, we use the `try...catch` statement to anticipate and handle errors.

```javascript
try {
    throw Error('This error will get caught');
} catch(e) {
    console.log(e);
}
// Prints: This error will get caught
```

Generally speaking, in a `try...catch` statement, we evaluate code in the `try` block and if the code throws an error, the code inside the `catch` block will handle the error for us. The provided example just showcases how a `try...catch` statement works because we know an error is being thrown.

Using a `try...catch` statement for built-in JavaScript errors is really beneficial when we need to use data from an external source that's not written directly in our program.

> Let's say we expect to grab an array but the information we get back is a string. In our program, we could have a function that only works on arrays. If that function was called with a string instead of an array we would get an error and our program would stop running.

However, we can use a `try...catch` statement to handle the thrown error for us which allows our program to continue running and we receive a message knowing what went wrong.

##### _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._