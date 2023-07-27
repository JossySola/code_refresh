# ASYNC AWAIT

Often we need to handle asynchronous actions-- actions we can wait on while moving on to other tasks.

+ Request to networks
+ Databases
+ Etc...

JavaScript is non-blocking because it uses the `Event-loop`, which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.

**ES6** integrated native `promises` which allows us to write significantly more readable code.
**ES8** provides a new syntax for handling our asynchronous action, _async... await_. The _async... await_ syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs. It introduces a new syntax for using `promises` and `generators`.

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

## Handling Errors

When `.catch()` is used with a long promise chain, there is no indication of where in the chain the error was thrown.

With `async...await`, we use `try...catch` statement for error handling.

```javascript
async function usingTryCatch() {
    try {
        let resolveValue = await asyncFunction('thing that will fail');
        let secondValue = await secondAsyncFunction(resolveValue);
    } catch(err) {
        console.log(err);
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

## Handling Dependent Promises

With **native promise syntax**, we use a chain of `.then()` functions making sure to return correctly each one:

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
Here is how we'd write an `async` function to accomplish the same thing as above:

```javascript
async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
}
```

## Handling Independent Promises

Remember that `await` halts the execution of our `async` function. What if our `async` function contains multiple promises which are not dependent on the results of one another to execute?

```javascript
async function waiting() {
    const firstValue = await firstAsyncThing();
    const secondValue = await secondAsyncThing();
    console.log(firstValue, secondValue);
}

async function concurrent() {
    const firstPromise = firstAsyncThing();
    const secondPromise = secondAsyncThing();
    console.log(await firstPromise, await secondPromise);
}
```
In our `concurrent()` function both promises' asynchronous operations can be run simultaneously. Within our `async` functions we should still take advantage of *concurrency*, the ability to perform asynchronous actions at the same time.

**Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual `.then()` functions and avoid halting our execution with `await`.**

## Await Promise.all()

Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to `await` a `Promise.all()`.

We can pass an array of promises as the argument to `Promise.all()`, and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise's resolve value will be an array containing the resolved values of each promise from the argument array.

```javascript
async function asyncPromAll() {
    const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
    for(let i = 0; i < resultArray.length; i++) {
        console.log(resultArray[i]);
    }
}
```
