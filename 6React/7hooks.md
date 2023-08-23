## Hooks

`React Hooks`, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.

### Update Function Component State

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

## Initialize State

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

## Use State Setter Outside of JSX

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

