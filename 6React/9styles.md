# React Styles

### Inline Styling

```javascript
<h1 style={{fontSize: 48, marginTop: 0}}>Rock Paper Scissors</h1>
```

### Object Variable Styling

Outside the function component:

```javascript
const choiceStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: 40
}
```

Inside the function component as JSX:

```html
<div style={choiceStyles}>
```

### CSS Module Styling

Separated in an external `.css` normal file, it is imported into the `.js` file where the function component is.

```javascript
import React, { useState } from "react";
import styles from "./Game.module.css";
```

And we use it into the JSX with dot notation:

```javascript
<button
className={styles.button} // <---
key={choice.name}
onClick={() => handlePlayerChoice(choice)}
aria-label={choice.name}
>
```

---
 _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._