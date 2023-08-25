# Hooks

`React Hooks`, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.

## Update Function Component State

The **State Hook** is the most common Hook used for building React components.

```javascript
import React, { useState } from 'react';
```

When we call the `useState()` function, it returns an array with two values:

1. The *current state*: The current value of this state.
2. The *state setter*: A function that we can use to update the value of this state.

We can use these two values to track the current state of a data value or property and change it when we need to. To extract the two values from the array, we can assign them to local variables by using array destructuring:

```javascript
const [currentState, setCurrentState] = useState();
```

Example using the State Hook:

```javascript
import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
```

With the State Hook, updating the state is as simple as calling a state setter function. Calling the state setter signals to React that the component needs to re-render, so the whole function defining the component is called again. The magic of `useState()` is that it allows React to keep track of the current value of the state from one render to the next!

### Initialize State

Like how you used the State Hook to manage a variable with string values, we can use the State Hook to manage the value of any primitive data type and even data collections like arrays and objects!

To initialize our state with any value we want, we simply pass the initial value as an argument to the `useState()` function call.

```javascript
const [isLoading, setIsLoading] = useState(true);
```

There are three ways in which this code affects our component:

1. During the first render, the *initial state argument* is used.
2. When the state setter is called, React ignores the initial state argument and uses the new value.
3. When the component re-renders for any other reason, React continues to use the same value from the previous render.

If we don't pass an initial state value when calling `useState()`, the current value of the state during the first render will be `undefined`.

It's a convention to **name the setter variable** using the current state variable (for example, `email`) with **"set"** prepended (`setEmail`).

### Use State Setter Outside of JSX

```javascript
import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}
```

In the example above, our event handler is defined inside of the definition for our function component, but outside of our JSX.

It's common in React code to simplify this:

```javascript
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
```

to this:
```javascript
const handleChange = (event) => setEmail(event.target.value);
```

or, using object restructuring, this:
```javascript
const handleChange = ({target}) => setEmail(target.value);
```

### Set From Previous State

In the previous exercise, we learned to update the state by passing a new value `setState(newStateValue);`. However, React state updates are *asynchronous*. This means that there are some scenarios where portions of your code will run before the state is finished updating.

This is a good and a bad thing! Grouping the state updates together can improve performance in your application, but it can result in outdated state values. Consequently, it is best practice to update a state with a callback function, preventing accidental outdated values.

```javascript
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
```

When a button is pressed, the `increment()` event handler is called. Inside this function, we use our `setCount()` state setter with a callback function.

Because the next value of `count` depends on the previous value of `count`, we pass a callback function as the argument for `setCount()` instead of a value.

```javascript
setCount(prevCount => prevCount + 1)
```

When our state setter calls the callback function, this state *setter callback function* takes our previous `count` as an argument. The value returned by this state setter callback function is used as the next value of `count`.

We can also just call `setCount(count + 1)` and it would work the same but it is safer to use the callback method.

### Arrays in State

JavaScript arrays are the best data model for managing and rendering JSX lists.

```javascript
import React, { useState } from 'react';

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? 'Remove ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}
```

The `options` array contains *static data*, meaning that it does not change. It's best practice to define static data models outside of function components since they don't need to be recreated each time our component re-renders. In our JSX, we use the JavaScript `.map()` method to render a button for each of the topping in our `options` array.

The `selected` array contains *dynamic data*, meaning that it changes, usually based on a user's actions. We initialize `selected` as an empty array. When a button is clicked, the `toggleTopping()` event handler is called. Notice how this event handler uses information from the event object to determine which topping was clicked.

When updating an array in a state, we do not just add new data to the previous array. We replace the previous array with a brand new array. This means that any information that we want to save from the previous array needs to be explicitly copied over to our new array. That's what this **spread syntax** does for us: `...prev`.

Notice how we use the `.includes()`, `.filter()`, and `.map()` methods of our arrays. 

### Object in State

When we work with a set of related variables, it can be very helpful to group them into an object.

```javascript
export default function Login() {
  const [formState, setFormState] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}
```

Once again, when updating the state with `setFormState()` inside a function component, we do not modify the same object. We must copy over the values from the previous object when setting the next value of a state. Thankfully the spread syntax (`...prev`) makes this super easy to do!

Anytime one of the input values is updated, the `handleChange()` function will be called. Inside this event handler, we use object destructuring to unpack the `target` property from our `event` object, then we use object destructuring again to unpack the `name` and `value` properties from the `target` object.

Inside our state setter callback function, we wrap our curly brackets in parentheses like so:

```javascript
setFormState((prev) => ({...prev}))
```

This tells JavaScript that our curly brackets refer to a new object to be returned. We use `...`, the spread operator, to fill in the corresponding fields from our previous state. Finally, we overwrite the appropriate key with its updated value.

The square brackets around the `name` is a **Computed Property Name** allowing us to use the string value stores by the `name` variable as a property key.

### Separate Hooks for Separate States

It's best to create multiple state variables based on which values tend to change together.

```javascript
function Subject() {
  const [currentGrade, setGrade] = useState('B');
  const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
  const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
  const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
  // ...
}
```

Managing dynamic data with separate state variables has many advantages, like making our code more simple to write, read, test, and reuse across components.

---
#### Review

+ With React, we feed static and dynamic data models to JSX to render a view to the screen

+ Hooks are used to "hook into" the internal component state for managing dynamic data in function components

+ We employ the State Hook using the code below. The `currentState` references the current value of the state and `initialState` initializes the value of the state for the component's first render
```javascript
const [currentState, stateSetter] = useState( initialState );
```
+ State setters can be called in event handlers

+ We can define simple event handlers inline in our JSX and complex event handlers outside of our JSX

+ We use a state setter callback function when our next value depends on our previous value

+ We use arrays and objects to organize and manage related data that tend to change together

+ Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: `setArrayState((prev) => [...prev])` and `setObjectState((prev) => ({...prev}))`

+ It's best practice to have multiple, simpler states instead of having one complex state object
---

## useEffect()

Before Hooks, function components were only used to accept data in the form of props and return some JSX to be rendered. However, as we learned in the last lesson, the State Hook allows us to manage dynamic data, in the form of component state, within our function components.

There are three key moments when the Effect Hook can be utilized: 

1. When the component is first added, or *mounted*, to the DOM and renders.
2. When the state or props change, causing the component to re-render.
3. When the component is removed, or *unmounted*, from the DOM.

### Function Component Effects

The Effect Hook tells our component to do something every time it's rendered (or re-rendered). When React renders our component, it will update the DOM as usual, and then run our effect after the DOM has been updated. This happens for every render, including the first and last one.

```javascript
import React, { useState, useEffect } from 'react';
 
function PageTitle() {
  const [name, setName] = useState('');
 
  useEffect(() => {
    document.title = `Hi, ${name}`;
  });
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}
```

### Clean Up Effects

Some effects require **cleanup**. When we add event listeners to the DOM, it is important to remove those event listeners when we are done with them to avoid memory leaks.

```javascript
useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  // Specify how to clean up after the effect:
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})
```

If our effect returns a function, then the `useEffect()` Hook always treats that as the cleanup function. React will call this cleanup function before the component re-renders or unmounts. Since this cleanup function is optional, **it is our responsability to return a cleanup function** from our effect when our effect code could create memory leaks.

### Control When Effects Are Called

The `useEffect()` function calls its first argument (the effect) after each time a component renders. It is common, when defininf function components, to run an effect only when the component mounts (renders the first time), but not when the component re-renders. If we want to only call our effect after the first render, we pass an empty array to `useEffect()` as the second argument. This second argument is called the **dependency array**.

The dependency array is used to tell the `useEffect()` method when to call our effect and when to skip it. 

We will be using an empty dependency array to call an effect when a component first mounts, and if a cleanup function is returned by our effect, calling that when the component unmounts.

```javascript
useEffect(() => {
  alert("component rendered for the first time");
  return () => {
    alert("component is being removed from the DOM");
  };
}, []); 
```

### Fetch Data

When our effect is responsible for fetching data from a server, we pay extra close attention to when our effect is called. Unnecessary round trips back and forth between our React components and the server can be costly in terms of:

+ Processing
+ Performance
+ Data usage for mobile users
+ API service fees

When the data that our components need to render doesn't change, we can pass an empty dependency array so that the data is fetched after the first render. When the response is received from the server, we can use a state setter from the State Hook to store the data from the server's response in our local component state for future renders. Using the State Hook and the Effect Hook together in this way is a powerful pattern that saves our components from unnecessarily fetching new data after every render!

> An empty dependency array signals to the Effect Hook that our effect never needs to be re-run.

> A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect after re-renders unless the value of one of the variables in our dependency array has changed.

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes
```

### Rules of Hooks

There are two main rules to keep in mind when using Hooks:

1. Only calls Hooks at the top level
2. Only calls Hooks from React functions

React keeps track of the data and functions that we are managing with Hooks **based on their order in the function component's definition**.

Instead of confusing React with code like this:
```javascript
if (userName !== '') {
  useEffect(() => {
    localStorage.setItem('savedUserName', userName);
  });
}
```

We can accomplish the same goal while consistently calling our Hook every time:
```javascript
useEffect(() => {
  if (userName !== '') {
    localStorage.setItem('savedUserName', userName);
  }
});
```

### Separate Hooks for Separate Effects

When multiple values are closely related and change at the same time, it can make sense to group these values in a collection like an object or array. Packaging data together can also add complexity to the code responsible for managing that data. Therefore, it is a good idea to separate concerns by managing different data with different Hooks.

Compare the complexity here, where data is bundled up into a single object:
```javascript
// Handle both position and menuItems with one useEffect hook.
const [data, setData] = useState({ position: { x: 0, y: 0 } });
useEffect(() => {
  get('/menu').then((response) => {
    setData((prev) => ({ ...prev, menuItems: response.data }));
  });
  const handleMove = (event) =>
    setData((prev) => ({
      ...prev,
      position: { x: event.clientX, y: event.clientY }
    }));
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);
```

To the simplicity here, where we have separated concerns:
```javascript
const [menuItems, setMenuItems] = useState(null);
useEffect(() => {
  get('/menu').then((response) => setMenuItems(response.data));
}, []);

// Handle position with a separate useEffect hook.
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMove = (event) =>
    setPosition({ x: event.clientX, y: event.clientY });
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);
```

---
#### Review

+ We can import the `useEffect()` function from the `'react'` library and call it in our function components.

+ *Effect* refers to a function that we pass as the first argument of the `useEffect()` function. By default, the Effect Hooks calls this effect after each render.

+ The *cleanup function* is optionally returned by the effect. If the effect does anything that needs to be cleaned up to prevent memory leaks, then the effect returns a cleanup function, then the Effect Hook will call this cleanup function before calling the effect again as well as when the components is being unmounted.

+ The *dependency array* is the optional second argument that the `useEffect()` function can be called with in order to prevent repeatedly calling the effect when this is not needed. This array should consist of all variables that the effect depends on.

The Effect Hook is all about scheduling when our effect's code gets executed. We can use the dependency array to configure when our effect is called in the following ways:

| **Dependency Array** | **Effect called after first render & ...** |
| -------------------- | ------------------------------------------ |
| undefined            | every re-render                            |
| Empty array          | no re-renders                              |
| Non-empty array      | when any value in the dependency array changes |

---
 _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._