# ASYNC AWAIT

Often we need to handle asynchronous actions-- actions we can wait on while moving on to other tasks.

+ Request to networks
+ Databases
+ Etc...

JavaScript is non-blocking because it uses the `Even-loop`, which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.

**ES6** integrated native `promises` which allows us to write significantly more readable code.
**ES8** provides a new syntax for handling our asynchronous action, _async... await_. The _async... await_ syntax allows us to write asynchronous code that reads similarly to traditional synchornous, imperative programs. It introduces a new syntax for using `promises` and `generators`.

## The async Keyword

The `async` keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the `async` keyword. Then, we invoke that function.

### Function declaration
```javascript
    async function myFunc() {
        // Function body here
    };
    
    myFunc();
```

### Function expression
```javascript
    const myFunc = async () => {
        //Function body here
    };

    myFunc();
```

`async` functions always return a promise. This means we can use traditional promise syntax, like `.then()` and `.catch()` with our `async` functions. An `async` function will return in one of three ways:

+ Nothing returned = **undefined**
+ non-promise value returned = **promise resolved to that value**
+ promise returned = **promise**

## The await Operator

The `await` keyword can only be used inside an `async` function. `await` is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, `await` halts, or pauses, the execution of our `async` function until a given promise is resolved.

In most situations, we're dealing with promises that were returned from functions. We can `await` the resolution of the promise it returns inside an `async` function. 

## Dependent Promises

```javascript
function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
    .then((secondValue) => {
        console.log(secondValue);
    })
}
```

```javascript
async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
}
```
## Handling Errors

When `.catch()` is used with a long promise chain, there is no indication of where in the chain the error was thrown.

With `async...await`, we use `try...catch` statement for error handling.

```javascript
async function usingTryCatch() {
    try {
        let resolveValue = await asyncFunction('thing that will fail);
        let secondValue = await secondAsyncFunction(resolveValue);
    } catch(err) {
        console.log (err);
    }
}

usingTryCatch();
```

Remember, since `async` functions return promises we can still use native promise's `.catch()` with an `async` function

```javascript
async function usingPromiseCatch() {
    let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
    console.log(rejectValue);
})
```
This is sometimes used in the global scope to catch final errors in complex code.