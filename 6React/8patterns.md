# REACT PROGRAMMING PATTERNS

## Separate Container Components from Presentational Components

If a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn't also have to render JSX.

This pattern focuses on splitting complex components into `stateful` (container) and `stateless` (presentational) components, where `stateful` components **manage complex state/logic** and `stateless` components **only render JSX**.

Steps taken in unit at Codecademy:

1. Identified that the original component **needed to be refactored**: it handled calculations/logic and presentation/rendering
2. Created a **container** component **containing all the stateful logic**
3. Created a **function that calls the state setter** method provided by `useState()`
4. **Created and exported presentational components** containing only JSX
5. Imported the **presentational** components **into the container component**
6. Used the presentational components in the return statement of the container component
7. Passed **state and functions** used to change state **as props to the rendered presentational components**

---
 _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._