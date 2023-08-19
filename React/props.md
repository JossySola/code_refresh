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

```javascript
function App() {
    return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}
```

In the example above, `App` is the parent and `Product` is the child. `App` passes three props to `Product` (`name`, `price`, and `rating`), which can then be read inside the child component.

Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.

## Render Different UI Based on props

You can also use props to make decisions:

```javascript
function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}
```

In this example, we use the props passed in to make a decision rather than rendering the value to the screen.

## Put an Event Handler in a Function Component

You can, and often will, pass functions as `props`. It is especially common to pass *event handler* functions. We have to *define* an event handler before we can pass one anywhere.

We define an event handler as a method on the function component!

```javascript
function Example() {
  function handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  return (
      <h1 onClick={handleEvent}>
        Hello world
      </h1>
    );
}
```

## Pass an Event Handler as a Prop

```javascript
function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk} />;
}
```

## Receive an Event Handler as a Prop

```javascript
function Button(props) {
  return (
    <button onClick={props.talk}>
      Click me!
    </button>
  );
}
```

## handleEvent, onEvent, and props.onEvent

When you pass an *event handler* as a prop, there are two names that you have to choose. Both naming choices occur in the *parent* component, the component that defines the event handler and passes it.

The first name that you have to choose is the name of the event handler itself.

The second name that you have to choose is the name of the prop that you will use to *pass* the event handler. This is the same thing as the attribute name.

These two names can be whatever we want. However, there is a naming convention that is commonly used.

Here's how the naming convention works:
First, think about what **type** of **event** you are listening for. Your prop name should be the word `on`, plus the event type.

```javascript
...
  return <Child onHover={handleHover} />;
...
```

## props.children

Every component's `props` object has a property named `children`.

`props.children` will return everything in between a component's opening and closing JSX tags.

`props.children` would return everything in between `<MyFunctionComponent>` and `</MyFunctionComponent>`.

By using `props.children`, we can separate the outer component from the content, which makes it flexible and reusable.

If a component has more than one child between its JSX tags, then `props.children` will return those children in an array. However, if a component has only one child, then `props.children` will return the single child, not wrapped in an array.

## Giving Default Values to props

