# TEST SUITE

You can refer to the code defining your app as `implementation code`, and the code defining your tests as `test code`. A collection of tests for a web application is called a `test suite`.

If the implementation code is named `index.js` then the corresponding test code may be named `index-test.js`.

1. Testing can also be used as part of the app's `documentation`.
2. When the functionality previously developed and tested stops working, you may say the _functionality regressed_.

## TESTING TYPES

- Unit tests
..- Smallest possible unit of testable code
- Integration tests
..- How units work with one another. Only the handling of incoming data is tested while the data itself remains mocked
- End to end tests
..- _UI Layer Test or e2e_ automates user flow to test the application in the way that a real user would experience it. Also tests interactions with external services such as databases and APIs

## SOFTWARE TESTING METHODOLOGIES

- Test-driven Development (**TDD**) (_functions and classes_)
- Behavior-driven Development (**BDD**)
- Specification by Example (**SBE**)
- Acceptance Test-driven Development (**ATDD**)

## INSTALLING A TEST FRAMEWORK

- _Node_ allows you to run JavaScript in the terminal
- _npm_ is a Node tool that allows you to download packages from the web, and manage them in a JavaScript project
- _Mocha_ is one of those packages and is used to test other JavaScript code

The following command creates a file **package.json** that can be used to manage packages for the project.
`npm init`

With your project setup, you can install packages.
`$ npm install mocha -D`

`-D` signifies that this package is a development dependency and will show up under the `devDependencies` section in **package.json**. This means that the package will only be included in the development mode and will not be included in the production bundle.

## MOCHA TEST FRAMEWORK

The recommended method to run Mocha is to add a script to **package.json**. In the `scripts` object in **package.json**, set the value of `"test"` to `mocha`. It should look like this:

```json
"scripts": {
    "test": "mocha"
}
```

Now you can call Mocha with the following command:
`$ npm test`

### describe and it blocks

```javascript
describe('functionName', () => {
    it('tests feature', () => {
        // Your test goes here
    });
});
```

### assert

