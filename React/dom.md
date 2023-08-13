# React: The Virtual DOM

In React, for every `DOM Object`, there is a corresponding "virtual DOM object". A virtual DOM object is a *representation* of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster because nothing get drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

1. When you render a JSX element, every single virtual DOM object gets updated
2. React compares the virtual DOM with a virtual DOM *snapshot* that was taken right before the update
3. React figures out *exactly which virtual DOM objects have changed*. This process is called `"diffing"`
4. React **updates only those objects** on the real DOM
5. Changes on the real DOM cause the screen to change

##### _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._