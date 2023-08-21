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

