# ASYNC-AWAIT, HTTP REQUESTS & PROMISES

## SYNCHRONOUS CODE

_Synchronous_ code executes in sequential order - it starts with the code at the top of the file and executes line by line until it gets to the end of the file. This behavior is known as `blocking` (or blocking code) since each line of code cannot execute until the previous line finishes.

## ASYNCHRONOUS CODE

_Asynchronous_ code can be executed in parallel to other code that is already running. Without the need to wait for other code to finish before executing, our apps can save time and be more efficient. This type of behavior is considered `non-blocking`.

The ability to execute asynchronous code depends on the number of `threads` that an app has access to. We can think of a thread as a resource that a computer provides an app to do a task. Typically one thread allows for an app to complete one task. If we return to our house example, our computers thread tasks might look like this:

> Thread 1: build house foundation -> build walls -> construct floor

A single thread could work for a synchronous task like building a house. However, in our cake baking example, our threads would have to look like this:

> Thread 1: preheat oven

> Thread 2: prepare ingredients -> bake cake

JavaScript is a _single-threaded_ language, which means that two statements can't be executed simultaneously. For example, if you have a **for** loop that takes a while to process, it'll have to finish executing before the rest of your code runs. That results in **blocking code**.

## CONCURRENCY IN JAVASCRIPT

Usually when we think about _concurrency_ in programming, it means that two or more procedures are executed at the same time on the same shared resources.
Since JavaScript is single-threaded, as we saw in the **for** loop example, we'll never have that flavor of "true" concurrency. However, we can emulate concurrency using the `event loop`.

## WHAT IS THE EVENT LOOP?

### JavaScript Engine

#### Data Structures

| The Heap                                           | Call Stack                                                                                                                      | Event Queue |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Stores **objects and variables** in use, unordered | Tracks function currently being run (current execution context: lexical and variable environment) (Last In, First Out **LIFO**) | (First In, First Out **FIFO**) List of messages (functions) waiting to be processed and handled **back into the stack** |

![Event Loop Diagram](https://static-assets.codecademy.com/Courses/Learn-JavaScript/Event-Loop-and-Concurrency/JavaScript-Engine-Diagram.png?_gl=1*1yqf88z*_ga*MjIxNzY1NjQ5LjE2NDA4OTQ1MjA.*_ga_3LRZM6TM9L*MTY4NDM3NzcwOC41MTMuMS4xNjg0Mzc3NzIxLjQ3LjAuMA.. "Event Loop Diagram")

In the Call Stack, when you invoke a function, a `frame` is added to the stack. Frames **connect that function's arguments and local variables from the heap**. 