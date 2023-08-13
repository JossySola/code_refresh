# Why React?

React.js is a JavaScript library developed by engineers at Facebook.

+ React is *fast*
+ React is *modular*
+ React is *scalable*
+ React is *flexible*

## What is JSX?

JSX is a syntax extension for JavaScript. It was written to be used with React.

If a JavaScript file contains JSX code, then that file will have to be compiled. This means that before the files reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

---

A basic unit of JSX is called `JSX element`.

```html
<h1>Hello world</h1>
```

JSX elements are treated as *JavaScript expressions*. They can go anywhere that JavaScript expressions can go. This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array, etc.

```javascript
const navBar = <nav>I am a nav bar</nav>;
```
---

JSX elements can have `attributes`, just like how HTML elements can.

A single JSX element can have many attributes, just like in HTML:

```javascript
const panda = <img src='images/panta.jpg' alt='panda' width='500px' height='500px'>
```
---

You can `nest JSX elements` inside of other JSX elements.

```html
<a href='https://www.example.com'><h1>Click me!</h1></a>
```

To make this more readable, you can use HTML-style `line breaks` and `indentation`.

If a JSX expression takes up more than one line, then you must **wrap the multi-line JSX expression in parentheses*.

```html
(
    <a href="https://www.example.com">
        <h1>
            Click me!
        </h1>
    </a>
)
```
---

There's a rule that we haven't mentioned: **a JSX expression must have exactly one `outermost element`.**

```javascript
const paragraphs = (
    <div id="i-am-the-outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);
```

The first *opening tag* and the *final closing tag* of a JSX expression must belong to the same JSX element!

---

## Rendering JSX

To *render* a JSX expression means to make it appear on screen.

React relies on two things to render: **what** content to render and **where** to place the content at.

```javascript
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
```

We use `createRoot()` from the `react-dom/client` library, which creates a React root from `container` and stores it in `root`. `root` can be used to render a JSX expression. This is the **"where to place the content"** part of React rendering.

Then it uses the `render()` method of `root` to render the content passed in as an argument. Here we pass an `<h1>` element, which displays `Hello world`. This is the **"what content to render"** part of React rendering.

The `render()` method's argument doesn't need to be JSX, but it should *evaluate* to a JSX expression. The argument could also be a variable, so long as that variable evaluates to a JSX expression.

```javascript
const toDoList = (
    <ol>
        <li>Learn React</li>
        <li>Become a Developer</li>
    </ol>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(toDoList);
```

One special thing about React root's `render()` is that it *only updates DOM elements that have changed*. That means that if you render the exact same thing twice in a row, the second render will do nothing.

## Advanced JSX

### Grammar in JSX

Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. The most frequent of these involves the word `class`.

In JSX, you can't use the word `class`! You have to use `className` instead:

```html
<h1 className="big">Title</h1>
```

### Self-closing tags

In JSX, the *self-closing* tags **have** to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

```javascript
// Fine in JSX:
<br />

// NOT FINE AT ALL in JSX
<br>
```

### Curly Braces in JSX

Any code in between the tags of a JSX element will read as JSX, not as regular JavaScript! In order to add JavaScript in a JSX element, you can do this by wrapping the code in *curly braces*

```html
<h1>{2 + 3}</h1>
```

When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.

### Variable Attributes in JSX

When writing JSX, it's common to use variable to set *attributes*. *Object properties* are also often used to set attributes.

```javascript
const sideLength = "200 px";
const pic = {
    panda: "http://bit.ly/1Tqltv5"
}

const panda = (
    <img
    src={pic.panda}
    alt="panda"
    height={sideLength}
    width={sideLength} />
);
```

### Event Listeners in JSX

JSX elements can have *event listeners*, just like HTML elements can. Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special *attribute*

```html
<img onClick={clickAlert} />
```

An event listener attribute's name should be something like `onClick` or `onMouseOver`: the word `on` plus the type of event that you're listening for. In JSX, event listener names are written in camelCase.

An event listener attribute's value should be a function.

### JSX Conditionals

You cannot inject an `if` statement into a JSX expression. 

1. One option is to write an `if` statement and *not* inject it into JSX
    + The words `if` and `else` are *not* injected in between JSX tags. The `if` statement is on the outside, and no JavaScript injection is necessary. The JSX element is inside the condition code block and it is either returned or assigned to a variable.
2. **Ternary Operator** ( *x ? y : z* ): 
    ```javascript
    const headline = (
        <h1>
            { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
        </h1>
    );
    ```
3. `&&` works best for conditionals that will sometimes do an action but other times do *nothing at all*. **If the expression on the left of the `&&` evaluates as true, then the JSX on the right of the `&&` will be rendered, otherwise, it will be ignored and not rendered**
    ```javascript
    const tasty = (
        <ul>
            <li>Applesauce</li>
            { !baby && <li>Pizza</li> }
            { age > 15 && <li>Brussels Sprouts</li> }
            { age > 20 && <li>Oysters</li> }
            { age > 25 && <li>Grappa</li> }
        </ul>
    );
    ```

### .map in JSX

The `.map()` array method comes up often in React.
