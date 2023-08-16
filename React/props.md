# Props

When thinking in the frame of a React application, components are small pieces of a whole. Together, they make up the interface that users will see.

With each component playing a role in the interface, there are times when components must be able to communicate with other components.

You will learn another way that components can interact (other than *rendering*): a component *passing information* to another component.

Information that gets passed from one component to another is known as **props**.

`Props` can be used to customize the output of each component depending on the information that is passed in.

By allowing components to communicate with each other, we can add a level of flexibility that was not possible before.

## Access a Component's props

A component's `props` is an object. It holds information about that component.

Props serve the same purpose for components as arguments do for functions.

You can reference the `props` object and its properties with dot notation.

```javascript
props.name
```

This would retrieve the `name` property from the `props` object.

## Pass `props` to a Component

How do we pass `props`? By giving the component an *attribute*. Let's say that you want to pass a component, the message: "We're great!". Here's how you can do it:

```html
<SloganDisplay message="We're great!" />
```

As you can see, to pass information to a component, you need a *name* for the information that you want to pass.

If you want to pass information that isn't a string, then wrap that information in curly braces

```javascript
<Greeting myInfo={["Astronaut","Narek","43"]} />
```

```javascript
<Greeting
name="The Queen Mary"
city="Long Beach, California"
age={56}
haunted={true} />
```

## Render a Component's props

You will often want a component to *display* the information that you pass.

To make sure that a function component can use the `props` object, define your function component with `props` as the parameter:

```javascript
function Button(props) {
  return <button>{props.displayText}</button>;
}
```

Alternatively, since `props` is an object, you can also use **destructuring** syntax like so:

```javascript
function Button({displayText}) {
  return <button>{displayText}</button>;
}
```

## Pass props From Component to Component

You have learned how to **pass** and how to **access** a `prop`. The most common use of `props` is to pass information to a component from a *different component*.

Props in React travel in **one-way direction**, from top to bottom, **parent to child**.

