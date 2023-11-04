# React Router V6
## What is Routing?

*Routing* is the process by which a web application uses the current browser **URL** (Uniform Resource Locator) to determine what content to show a user.

By organizing an application's content and displaying only what the user has requested to see, routing allows for rich, engaging, and clear user experiences.

![URL example](https://static-assets.codecademy.com/Courses/Learn-Node/http/url-dark.png)

Every URL is essentially a request for some resource and each component of the URL serves to specify which resource is desired. URLs consist of several components, some of which are mandatory and some of which are optional:

1. `The scheme` (eg. `HTTP`, `HTTPS`, `mailto`, etc.), which specifies what protocol should be used to access the resource.
2. `The domain` (eg. `codecademy.com`), which specifies the website that hosts the resource. The domain serves as the entry point of your application.
3. `The path` (eg. `/articles`), which identifies the specific resource or page to be loaded and displayed to the user. This is where routing begins!
4. `The optional query string` (eg. `?search=node`), which appears after a '**?**' and assigns values to parameters. Common uses of query strings include search parameters and filters.

## Installing React Router

In order to use React Router, you will need to include the `react-router-dom`.package.

> npm install --save react-router-dom@6

React Router provides multiple routers, however, the most common one is `createBrowserRouter`.

To add a router to our project, we can import it at the top of our file:

```javascript
import { createBrowserRouter } from 'react-router-dom';
```

Next, we'll initialize our router by calling `createBrowserRouter`. This method accepts a list of JSX components.

```javascript
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter(
    // application routes are defined here
)
```

The `router` serves as the basis for all the React Router logic. Without it, we'd get errors if we tried using React Router components or methods.

## Providing A Router

In the React Router paradigm, the different views of your application, also called *routes* are just React components. To include them in your application, you will need to render them.

The first step is to make our router available to our entire application by using React Router's `RouterProvider`.

```javascript
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter( /* application routes are defined here */ );

export default function App () {
  return (
    <RouterProvider router={ router } />
  );
}
```

`createBrowserRouter` will define a router that prevents URL changes from causing the page to reload. Instead, URL changes will allow the `router` to determine which of its defined routes to render while passing along information about the current URL's path as props. We make our router available application-wide by providing it using `RouterProvider` at the root of our application.