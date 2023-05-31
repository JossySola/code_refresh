# ASYNC-AWAIT, HTTP REQUESTS & PROMISES II

***
### ASYNCHRONOUS BEFORE ES6

#### CALLBACKS

A callback is a function that is passed inside another function, and then called in that function to perform a task.

```javascript
console.log('fired first');
console.log('fired second');

setTimeout(() => {
    console.log('fired third');
}, 2000);

console.log('fired last');
/*
Prints:
fired first
fired second
fired last
fired third
*/
```

Imagine it being carried off to be executed in some separate part of the browser, while the other instructions continue executing. After two seconds, the results of the function are then returned.

Sometimes, developers have to make multiple calls to different sources in their code. In order, to make these calls, callbacks are being nested until the become very hard to read or maintain. This is referred to as **Callback Hell** or the classic **Callback Pyramid of Doom**.
***

## PROMISES

`Promises` is how modern JavaScript handles asynchronicity, **introduced with ES6**.

`Promises` are `objects that represent the` eventual `outcome` of an asynchronous operation. A `Promise` object can be in one of three states:

1. **Pending**: The initial state -- the operation has not completed yet.
2. **Fulfilled**: The operation has completed successfully and the promise now has a _resolved_ value. For example, a request's promise might resolve with a JSON object as its value.
3. **Rejected**: The operation has failed and the promise has a reason for the failure. This reason is usually an `Error` of some kind.

We refer to a promise as _settled_ if it is no longer pending -- it is either fulfilled or rejected.

![Promises Analogy](https://content.codecademy.com/courses/learn-javascript-promises/Art-346-01.svg "Promises Analogy")

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

## CONSTRUCTING A PROMISE OBJECT

```javascript
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

The `Promise` constructor method takes a function parameter called the _executor function_ which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the `resolve()` and `reject()` functions. The `resolve()` and `reject()` functions aren't defined by the programmer. When the `Promise` constructor runs, JavaScript will pass **its own** `resolve()` and `reject()` functions into the executor function.

+ `resolve` is a function with one argument. Under the hood, if invoked, `resolve()` will change the promise's status from `pending` to `fulfilled`, and the promise's resolved value will be set to the argument passed into `resolve()`.
+ `reject` is a function that takes a reason or error as an argument. Uner the hood, if invoked, `reject()` will change the promise's status from `pending` to `rejected`, and the promise's rejection reason will be set to the argument passed into `reject()`.

Rather than just constructing promises, you'll be handling `Promise objects` returned to you as the result of an asynchronous operation. Knowing how to _consume_, or use, promises will be key.

## CONSUMING PROMISES

The initial state of an asynchronous promise is `pending`, but we have a guarantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly name `.then()` method. It allows us to say, "I have a promise, when it settles, **then** here's what I want to happen..."

![Consuming Promises Analogy](https://content.codecademy.com/courses/updated_images/Art-347_v1_Updated_1-01.svg "Consuming Promises Analogy")

`.then()` is a higher-order function -- it takes two callback functions as arguments. We refer to these callbacks as _handlers_. When the promise settles, the appropriate handler will be invoked with that settled value.

+ The first handler, sometimes called `onFulfilled`, is a success handler, and it should contain the logic for the promise resolving.
+ The second handler, sometimes called `onRejected`, is a failure handler, and it should contain the logic for the promise rejecting.

One important feature of `.then()` is that it always returns a promise.

```javascript
let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if(num < .5) {
        resolve('Yay!');
    } else {
        reject('Oh no!');
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
```

## USING catch() WITH PROMISES

One way to write cleaner code is to follow a principle called *separation of concerns*, organizing code into distinct sections each handling a specific task.

The `.catch()` function takes only one argument, `onRejected`. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using `.catch()` accomplishes the same thing as using a `.then()` with only a failure handler.

```javascript
prom
    .then((resolvedValue) => {
        console.log(resolvedValue);
    })
    .catch((rejectionReason) => {
        console.log(rejectionReason);
    });
```

## CHAINING MULTIPLE PROMISES

One common pattern we'll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on.

This process of chaining promises together is called *composition*.

```javascript
firstPromiseFunction()
.then((firstResolveVal) => {
    return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
    console.log(secondResolveVal);
});
```

## USING Promise.all()

When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. What if we're dealing with multiple promises, but we don't care about the order?

To maximize efficiency we should use *concurrency*, multiple asynchronous operations happening together. With promises, we can do this with the function `Promise.all()`.

`Promise.all()` accepts an array of promises as its argument and returns a single promise.
That single promise will settle in one of two ways:

+ If every promise in the argument array resolves, the single promise returned from `Promise.all()` will resolve with an array containing the resolve value from each promise in the argument array.
+ If any promise from the argument array rejects, the single promise returned from `Promise.all()` will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as *failing fast*.


##### _All the information written and images shown above are taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._