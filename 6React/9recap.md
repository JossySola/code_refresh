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

## Adding Interactivity

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
+ Before your components are displayed on the screen, they must be rendered by React. This process of requesting and serving UI has three steps:
    + **Triggering** a render
    + **Rendering** the component
    + **Committing** to the DOM
+ After you trigger a render, React calls your components to figure out what to display on screen. **"Rendering" is React calling your components**. React will call the function component whose state update triggered the render.
+ After rendering (calling) your components, React will modify the DOM.
+ After rendering is done and React updated the DOM, the browser will repaint the screen (browser rendering).
+ You can use `Strict Mode` to find mistakes in your components.
+ React does not touch the DOM if the rendering result is the same as last time.
---
+ State actually "lives" in React itself, outside the component/function.
+ React state behaves more like a snapshot. **Setting it does not change the state variable you already have, but instead triggers a re-render**.
+ **Setting state only changes it for the *next* render**. A state variable's value never changes within a render.
+ For an interface to react to an event, you need to *update the state*.
+ The JSX you return from a component is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated **using its state at the time of the render**.
+ When React re-renders a component:
    1. React calls your function again.
    2. Your function returns a new JSX snapshot.
    3. React then updates the screen to match the snapshot you've returned.
+ Variables and event handlers don't "survive" re-renders. Every render has its own event handlers.
+ Event handlers created in the past have the state values from the render in which they were created.
---
+ **React waits until *all* code in the event handlers has run before processing your state updates**. This lets you update multiple state variables without triggering too many re-renders. But this also means that the UI won't be updated until *after* your event handler, and any code in it, completes. This behavior, also known as `batching`, makes your React app run much faster.
+ **React does not `batch` across *multiple* intentional events like clicks**, each click is handled separately. This ensures that, for example, if the first button click disables a form, the second click would not submit it again.
+ If you would like to update the same state variable multiple times before the next render, instead of passing the *next state value* like `setNumber(number + 1)`, you can pass a *function* that calculates the next state based on the previous one in the queue, like `setNumber(n => n + 1)`. It is a way to tell React to "do something with the state value". This `n => n + 1` is called an **updater function** when you pass it to a state setter.
    + **An updater function** (e.g. `n => n + 1`) gets added to the queue.
    + **Any other value** (e.g. number `5`) adds *"replace with `5`"* to the queue, ignoring what's already queued.
    + **Updater functions must be pure** and only *return* the result. Don't try to set state from inside of them or run other side effects.
+ It's common to name the updater function argument by the first letters of the corresponding state variable, repeat the full state variable name, or use a prefix.
---
+ Numbers, strings, and booleans are "immutable", meaning unchangeable or "read-only". You can trigger a re-render to *replace* a value `setX(5);`.
+ In React, you should treat Objects **as if** they were immutable, even though they are technically mutable. Instead of mutating them, **you should always replace them**.
+ Mutation is only a problem when you change *existing* objects that are already in state. Mutating an object you've just created is okay because *no other code references it yet*, this is called a **local mutation**.
+ You can use the `...` **object spread** syntax so that you don't need to copy every property separately.
+ Arrays are mutable in JavaScript, but you **should treat them as immutable when you store them in state**.
+ The **array spread syntax** also lets you prepend an item by placing it *before* the original `...prev`.
+ To remove from an array, you can use the `filter()` method.
+ To transform an array, you can use the `map()` method. 
+ To replace items in an array, you can use the `map()` method as well. Inside the `map` call, **you will receive the item index as the second argument**.
+ Making other changes to an array can be done by **making a copy of the array first, and then make changes to it**.

## Managing State

+ The most important principle is that state shouldn't contain redundant or duplicated information.
+ You will describe the UI you want to see for the different visual states of your component ("initial state", "typing state", "success state") and then trigger the state changes in response to user input.
+ When you want the state of two components to always change together, move the state in each component to their closest common parent, and then pass it down to them via props ("lifting state up").
+ By default, React preserves the parts of the tree that "match up" with the previously rendered component tree.
+ React lets you override the default behavior, and *force* a component to reset its state by passing it a different `key`, like `<Chat key={email} />`. This tells React that if the recipient is different, it should be considered a *different* `Chat` component that needs to be recreated from scratch with the new data (*this refers to an example in the article where there are three different chats (recipients), one text area (chat) and a submit button*).
+ You can consolidate all the state update logic outside your component in a single function, called `"reducer"`.
+ The reducer function specifies how the state should update in response to each action.
+ `Reducers` let you consolidate a component’s state update logic. `Context` lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.
+ `Context` lets the parent component make some information available to any component in the tree below it without passing it explicitly through props.
---
| **IMPERATIVE** | **DECLARATIVE** |
| -------------- | --------------- |
| Exact instructions to manipulate the UI depending on user actions. It's *imperative* because you have to "command" each element, telling the computer *how* to update the UI. | You **declare what you want to show**, and React figures out how to update the UI. |
| <ol><li>When you type something into the form, then "Submit" button **becomes enabled**.</li><li>When you press "Submit", both the form and the buttom **become disabled**, and a spinner **appears**.</li><If the network request succeeds, the form **gets hidden**, and the "Thank you" message **appears**.</li><li>If the network request fails, an error message **appears**, and the form **becomes enabled** again.</li></ol> | <ul><li>**Empty**: Form has a disabled "Submit" button.</li><li>**Typing**: Form has an enabled "Submit" button.</li><li>**Submitting**: Form is completely disabled. Spinner is shown.</li><li>**Success**: "Thank you" message is shown instead of a form</li><li>**Error**: Same as Typing state, but with an extra error message.</li></ul> |
+ **Thinking about UI declaratively**
    1. **Identify** your component's different visual states
    2. **Determine** what triggers those state changes
    3. **Represent** the state in memory using `useState`
    4. **Remove** any non-essential state variables
    5. **Connect** the event handlers to set the state
+ Mocking lets you quickly iterate on the UI before you wire up any logic. If a component has a lot of visual states, it can be convenient to show them all on one page, pages like this are often called "living styleguides" or "storybooks".
+ To help visualize the state changes flow, try drawing each state on paper as a labeled circle, and each change between two states as an arrow. You can sketch out many flows this wat and sort out bugs long before implementation.
![State Changes flowchart](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fresponding_to_input_flow.dark.png&w=750&q=75)

+ Here are some questions you can ask about your state variables when refactoring:
    + **Does this state cause a paradox?** For example, `isTyping` and `isSubmitting` can't both be `true`. A paradox usually means that the state is not constrained enough. There are four possible combinations of two booleans, but only three correspond to valid states. To remove the "impossible" state, you can combine these into a `status` that must be one of three values: `'typing'`, `'submitting'`, or `'success'`.
    + **Is the same information available in another state variable already?** Another paradox: `isEmpty` and `isTyping` can't be `true` at the same time. By making them separate state variables, you risk them going out of sync and causing bugs. Fortunately, you can remove `isEmpty` and instead check `answer.length === 0`.
    + **Can you get the same information from the inverse of another state variable?** `isError` is not needed because you can check `error !== null` instead.

```javascript
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
```

+ Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
