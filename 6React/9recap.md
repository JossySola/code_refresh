# React RECAP

## Describing the UI

+ React lets you create components, **reusable UI elements for your app**.
+ In a React app, every piece of UI is a component.
+ React components' names always **begin with a capital letter**.
+ React components return JSX markup.
---
+ Importing and Exporting Components:
    + A file can have no more than one *default* export, but it can have as many *named* exports as you like.
    + People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values.
---
+ JSX and React **are two separate things**. They're often used together, but you can use them independently of each other. **JSX is a syntax extension**, while **React is a JavaScript library**.
+ Rules of JSX:
    1. Return a single root element. To return multiple elements from a component, **wrap them with a single parent tag** (`<div></div>` or `<></>`)
    2. Close all the tags
    3. camelCase most of the things
---
+ JavaScript in JSX is written with **Curly Braces**.
---
+ React components use `props` to communicate with each other. Every parent component can pass some information to its child components by giving them props.
+ React component functions accept a single argument, a `props` object. Usually you don't need the whole `props` object itself, so you *destructure* it into individual props.
+ If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting `=` and the default value right after the parameter.
+ Some components forward all of their props to their children. Because they don't use any of their props directly, it makes sense to use a more concise "spread" syntax. `...props`.
    + **Use spread syntax with restraint**. If you're using it in every other component, something is wrong. Often, it indicates that you should split your components and pass children as JSX.
+ When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`.
+ Props are `immutable`. When a component needs to change its props, it will have to "ask" its parent component to pass it *different props*.
---
+ In React, you can **conditionally render** JSX using JavaScript syntax like `if` statements, `&&`, and `? :` operators.
---
+ You can use the JavaScript array methods to manipulate an array of data. `.map(), .filter()`.
+ You need to give each array item a `key` --a string or a number that uniquely identifies it among other items in that array.
---
+ A `pure` function should always return the same result.
+ Components should only *return* their JSX, and not *change* any objects or variables that existed before rendering.
---
+ React lets you add `event handlers` to your JSX. Event handlers are your own functions that will be triggered in response to user interactions like clicking, hovering, focusing on form inputs, and so on.
+ To add an event handler, you will first define a function and then *pass it as a prop* to the appropriate JSX tag.
+ Event handler functions:
    + Are usually defined *inside* your components.
    Have names that state with `handle`, followed by the name of the event.
+ By convention, event handler props should start with `on`, followed by a capital letter.
+ Because event handlers are declared inside of a component, they have access to the component's props.
+ Event handlers will also catch events from any children your component might have. We say that an event `"bubbles"` or `"propagates"` up the tree, it starts with where the event happend, and then goes up the tree.
+ Event handlers receive an **event object** as their only argument. By convention, it's usually called `e`, which stands for "event".
+ If you want to prevent an event from reaching parent components, you need to call `e.stopPropagation()`.
+ Some browser events have default behavior associated with them. For example, a **<form>** submit event, which happens when a button inside of it is clicked, will reload the whole page by default. You can call `e.preventDefault()` on the event object to stop this from happening.
+ Unlike rendering functions, event handlers don't need to be `pure`.
---
+ Components need to "remember" things: the current input value, the current image, the shopping cart, etc. In React, this kind of component-specific memory is called `state`.
+ To update a component with new data, two things need to happen:
    1. **Retain** the data between renders.
    2. **Trigger** React to render the component with new data (re-rendering).
+ `Hooks` are special functions that are only available while React is rendering. They let you *"hook into"* different React features.
+ You can have as many state variables of as many types as you like in one component. It is a good idea to have multiple state variables if their state is unrelated.
+ State is local to a component instance on the screen. In other words, **if you render the same component twice, each copy will have completely isolated state**.
---



---
+ Before your components are displayed on the screen, they must be rendered by React. This process of requesting and serving UI has three steps:
    + **Triggering** a render
    + **Rendering** the component
    + **Committing** to the DOM
+ React state behaves more like a snapshot. **Setting it does not change the state variable you already have, but instead triggers a re-render**.
