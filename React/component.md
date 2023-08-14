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

Function component names must start with capitalization and are conventionally created with PascalCase! Due to how JSX tags are compiled, capitalization indicates that it is a React component rather than an HTML tag. This is a React-specific nuance!

The function is expected to produce JSX code that can be used to render something onto the browser screen. Thus, when we define functional components, **we must return a JSX element**.

## Using and Rendering a Component

We can use it with an HTML-like syntax that resembles a self-closing tag:

```html
<MyComponent />
```

If you need to nest other components in between, you may also use an opening and corresponding closing tag structure:

```html
<MyComponent>
    <OtherComponent />
</MyComponent>
```

However, to render our component to the browser, we must rely on the `.createRoot()` and `.render()` methods from the `react-dom` library. This should be done in our entry point, **index.js**.

First, we call the `createRoot` method to create a React root container for displaying content. React applications typically have a single root DOM node, and everything inside it is managed by React DOM.

In other words, we give `createRoot` a DOM element to render in, and React will take over managing the DOM inside it.

```javascript
ReactDOM.createRoot(document.getElementById('app'));
```

After the root is created, all that's left to do is call the `.render()` method on the returned root and display the React component like so:

```javascript
ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);
```

In an application fully built with React, you will only need to do this once. Once this is set up, React will manage the DOM of your application, and any updates to the UI are taken care of efficiently. Adding more components should take place in your top-level **App.js** file.

## Components and Advanced JSX

### Multiline JSX in a Component

```javascript
function QuoteMaker() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
};
```

### Logic in a Function Component

You can also put *calculations/conditions* that need to happen, **before** returning your JSX element within the function component

```javascript
function RandomNumber() {
  //First, some logic that must happen before returning
  const n = Math.floor(Math.random() * 10 + 1);
  //Next, a return statement using that logic: 
  return <h1>{n}</h1>
}
```

### Event Listener and Event Handlers in a Component

```javascript
function MyComponent(){
  function handleHover() {
    alert('Stop it.  Stop hovering.');
  }
  return <div onHover={handleHover}></div>;
}
```

The logic for what should happen when the `<div>` is hovered on is contained inside the `handleHover()` function. The function is then passed to the `<div>` element as a `prop`.

Event handler functions are defined inside the function component and, by convention, start with the word "handle" followed by the type of event it is handling.

The `handleHover()` function is passed without the parentheses we would typically see when calling a function. This is because passing it as `handleHover` indicates it should only be called once the event has happened. Passing it was `handleHover()` would trigger the function immediately!

## Setting Up the Boilerplate Application

> sudo npm install -g npm@latest

> npx create-react-app reactappname

You just need to run `npm start` in your app directory to begin serving the development server. It should auto-open a tab in your browser that points to **http://localhost:300**.

Any changes to the source code will live-update here.

---
 _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._