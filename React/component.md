# React Components

React applications are made of **components**.

A `component` is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML and re-render it when some data changes.

## Import React

```javascript
import React from 'react';
```

This creates an object named `React`, which contains methods necessary to use the React library. `React` is imported from the `'react'` package, which should be installed in your projects as a dependency.

In a React application, the **App.js** file typically is the top level of your application, and **index.js** is the entry point.

## Import ReactDOM

```javascript
import ReactDOM from 'react-dom/client';
```

The methods imported from `'react-dom` interact with the DOM.

The methods imported from `'react'` do not deal with the DOM at all. They don't engage directly with anything that isn't part of React.

## Function Component

It's useful to think of components as smaller pieces of our interface. Combined, they are the building blocks that make up a React application.

We can use JavaScript functions to degine a new React component. This is called a **function component**.

In the past, React components were defined using JavaScript classes. But since the introduction of Hooks, function components have become the standard in modern React applications.

After we define our functional component, we can use it to create as many instances of that component as we want.

Basic functional component:
```javascript
import React from 'react';

function MyComponent() {
    return <h1>Hello, I'm a functional React Component</h1>;
}

export default MyComponent;
```

Function component names must start with capitalization and are conventionally created with PascalCase! Due to how JSX tages are compiled, capitalization indicates that it is a React component rather than an HTML tag. This is a React-specific nuance!

The function is expected to produce JSX code that can be used to render something onto the browser screen. Thus, when we define functional components, **we must return a JSX element**.

## Using and Rendering a Component
