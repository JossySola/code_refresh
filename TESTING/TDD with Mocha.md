# THE RED-GREEN-REFACTOR CYCLE

![Diagram of the red-green-refactor cycle](https://content.codecademy.com/programs/tdd-js/articles/red-green-refactor-tdd.png?_gl=1*b506sr*_ga*MjIxNzY1NjQ5LjE2NDA4OTQ1MjA.*_ga_3LRZM6TM9L*MTY4MzI1MjYwOS41MDIuMS4xNjgzMjUyNjU4LjExLjAuMA.. "red-green-refactor cycle")

+ `Red` - Write tests that describe the intended behavior of implementation code, and then compare developer expectations with the actual results of implementation code. The tests should always fail at first because the implementation code for the desired behavior will be written in response to the failing test.

+ `Green` - Write just enough implementation code to make the test pass. The tests return _green_ because the implementation code executes the intended behavior described by the tests in the _red_ phase.

+ `Refactor` - Clean up and optimize code following the [characteristics of a good test](https://www.codecademy.com/article/tdd-u1-good-test). Refactoring involves actively considering test and implementation code and making revisions to the code base. The tests are passing and should continue to pass throughout this phase of the cycle. Refactoring helps us think critically about the code you have and **decide whether there is anything unnecessary, redundant, or that could be done more clearly or efficiently**.

## EDGE CASE

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter - **you can think of these as special cases that you need to account for**. (_i.e. what if a function expecting a 'string' is given a 'number' instead?_)

## CODE COVERAGE

Code coverage is the metric that measures the amount of application code that has been executed in testing, represented as a percentage.

Depending on the organization's standards for code coverage, some key criteria to use when measuring code coverage includes: 

+ _FUNCTION COVERAGE:_ has each function been called?
+ _STATEMENT COVERAGE:_ has each statement been executed?
+ _PATH COVERAGE:_ has every edge in the control-flow graph been executed?
+ _CONDITION COVERAGE:_ has each boolean sub-expression evaluated to be both true and false?

Having 100% code coverage does not guarantee bug-free code - it simply validates the completeness of our tests using a given set of criteria relative to other test suites with lower coverage. 

## TEST COVERAGE

Test coverage differs from code coverage in that **test coverage** measures the percentage of the required **features/specs** that are tested, as opposed to the percentage of lines executed. These features/specs are typically defined in a **requirements document** provided by the client or product designer.

## MOCKING IN TESTS

_**Mocking**_ is the process of creating a fake version of an external service for testing purposes, particularly in unit tests and integration tests. Mocking is effective in testing individual units of code without relying on the functionality of other services or units such as APIs or databases.

![Real System vs Unit Test comparison](https://static-assets.codecademy.com/Courses/testing-concepts/mocking-in-unit-tests.png "Mocking in Unit Tests")

## SPIES WITH SINON.JS

In testing, a _**spy**_ is a function that observes and records information about another function's calls including arguments, return value, the **this** value, and exceptions thrown (if any). A spy won't change anything about how the function operates, it will just observe what happens.

**Sinon.js** is a JavaScript library that includes standalone fakes, spies, and mocks that can be used in any unit testing framework.


##### _All the information written and images shown here are taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._