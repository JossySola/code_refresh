# ASYNC-AWAIT, HTTP REQUESTS & PROMISES II

## PROMISES

`Promises` is how modern JavaScript handles asynchronicity, introduced with ES6.

`Promises` are `objects that represent the` eventual `outcome` of an asynchronous operation. A `Promise` object can be in one of three states:

1. **Pending**: The initial state -- the operation has not completed yet.
2. **Fulfilled**: The operation has completed successfully and the promise now has a _resolved_ value. For example, a request's promise might resolve with a JSON object as its value.
3. **Rejected**: The operation has failed and the promise has a reason for the failure. This reason is usually an `Error` of some kind.

We refer to a promise as _settled_ if it is no longer pending -- it is either fulfilled or rejected.

![Promises Analogy](https://content.codecademy.com/courses/learn-javascript-promises/Art-346-01.svg "Promises Analogy")




##### _All the information written and images shown above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._