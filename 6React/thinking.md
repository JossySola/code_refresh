# Thinking in React

When you build a user interface with React, you will first break it apart into pieces called *components*. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them.

## Start with a Mockup

To implement a UI in React, you will usually follow the same five steps.

## Step 1: Break the UI into a component hierarchy

Start by drawing boxes around every component and subcomponent in the mockup and naming them.

Depending on your background, you can think about splitting up a design into components in different ways:

+ **Programming**... Use the same techniques for deciding if you should create a new function or object. One such technique is the [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle), that is, a component should ideally only do **one thing**. If it ends up growing, it should be decomposed into smaller subcomponents.

+ **CSS**... Consider what you would make class selectors for. (However, components are a bit less granular)

+ **Design**... Consider how you would organize the design's layers.

Separate your UI into components, **where each component matches one piece of your data model**.

Now that you have identified the components in the mockup, **arrange them into a hierarchy**. Components that appear within another component in the mockup should appear as a child in the hierarchy:

+ `FilterableProductTable`
    + `SearchBar`
    + `ProductTable`
        + `ProductCategoryRow`
        + `ProductRow`

## Step 2: Build a static version in React

The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity... yet! It's often easier to build the static version first and add interactivity later.

To build a static version of your app that renders your data model, you'll want to build `components` that reuse other components and pass data using `props`. Props are a way of passing data from parent to child.

You can either build "top down" by starting with building the components higher up in the hierarchy or "bottom up" by working from components lower down. It's usually easier to go top-down, and on larger projects, it's easier to go bottom-up.

Because this is a static app, the components will only return JSX. The component at the top of the hierarchy will take your data model as a prop. This is called *one-way data flow* because the data flows down from the top-level component to the ones at the bottom of the tree.

> At this point, your should not be using any `state` values. That's for the next step!

+ **Props** are like arguments you pass to a function.
+ **State** is like a component's memory.

## Step 3: Find the minimal but complete representation of UI state

To make the UI interactive, you need to let users change your underlying data model. You will use `state` for this.

Think of state as the minimal set of changing data that your app needs to remember. The most important principle for structuring state is to keep it **DRY (Don't Repeat Yourself)**. Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand. For example, if you're building a shopping list, you can store the items as an array in state. If you want to also display the number of items in the list, don't store the number of items as another state value --instead, read the length of your array.

## Step 4: Identify where your state should live

For each piece of state in your application:

1. Identify every component that renders something based on that state.
2. Find their closest common parent component --a component above them all in the hierarchy.
3. Decide where the state should live:
    1. Often, you can put the state into some component above their common parent.
    2. You can also put the state into some component above their common parent.
    3. If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

## Step 5: Add inverse data flow

Currently your app renders correctly with props and state flowing down the hierarchy. But to change the state according to user input, you will need to support data flowing the other way: the form components deep in the hierarchy need to update the state located in the parent component.

---
 _All the information written above is taken from [React.dev](https://react.dev/learn/thinking-in-react), **Thinking in React**._