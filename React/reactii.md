# Components Interaction

React apps are made out of components, but what makes React special isn't the components themselves. What makes React special is the ways in which components *interact*.

Each React component is responsible for one piece of the interface. As the application grows in complexity, components need to be able to interact with each other to support the features needed.

So far, we've explored components that return JSX elements where the React component is not interacting with other components. However, you can have components interact with each other by passing information or even returning other components.

```javascript
function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}
 
function ItemBox() {
  return (
    <div>
      <h1>50% Sale</h1>
      <h2>Item: Small Shirt</h2>
      <PurchaseButton />
    </div>
  );
}
```

In the example above, `ItemBox` return an instance of `PurchaseButton`. This is an example of how a component can reference other components!

```javascript
import Button from './Button'
 
function App() {
  return <Button />;
}
 
export default App;
```

The example above shows us the ability to separate components into smaller functions in modules and connect them together to make more complex components!