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


+ Enable routing by using `RouterProvider` and providing a `router`
+ Creating a router using `createBrowserRouter()`
+ Use `createRoutesFromElements()` to configure a router using JSX
+ Use the `Route` component to add static and dynamic routes to an application
+ Use `Link` and `NavLink` components to add links to an application
+ Access the values of URL parameters using React Router's `useParams` hook
+ Create nested routes using `Route`, `Outlet`, and relative `path`s
+ Declaratively redirect users by rendering React Router's `Navigate` component
+ Imperatively redirect users via the `useNavigate` hook
+ Access and set the value of query parameters using React Router's `useSearchParams` hook

To access the webpage for the applied topic visit:
