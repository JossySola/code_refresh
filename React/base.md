# Destructuring with JavaScript

`Destructuring, or destructuring assignment`, is a JavaScript feature that makes it easier to `extract data from arrays and objects`, introduced in ES6.

## Destructuring Arrays

```javascript
let cars = ['ferrari','tesla','cadillac'];
let [car1, car2,car3] = cars;
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac
```

In the code above, we created three variables (**car1**,**car2**,**car3**) that correspond to the three elements in the **cars** array. Each variable name in the new array will be assigned the value of the corresponding element.

## Destructuring Objects

With the simplified destructuring syntax, we access the values by matching the variable names to the property names.

```javascript
let destinations = { x: 'LA', y: 'NYC', z: 'MIA'};
let { x, y, z} = destinations;
console.log(x, y, z); // Prints: LA NYC MIA
```

Using destructuring syntax, we're able to create new variables directly from an object's properties.

## Destructuring Function Parameters

Instead of accepting a complete object as an argument, a function can use destructuring to capture specific properties as named parameters.

```javascript
let truck = {
    model: '1977 Mustang convertible',
    maker: 'Ford',
    city: 'Detroit',
    year: '1977',
    convertible: true
};

const printCarInfo = ({model, maker, city}) => {
    console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};

printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit
```
The **printCarInfo** function uses objects destructuring to create three parameter variables: **model**, **maker**, and **city**. When the function is invoked with the **truck** object, these parameters are assigned the corresponding values from that object.
