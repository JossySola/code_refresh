# Intro to GET Requests using Fetch

GET requests using `fetch()`:

The `fetch()` function:
+ Creates a request object that contains relevant information that an API needs
+ Sends that request object to the API endpoint provided
+ Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back

```javascript
// fetch GET

fetch('http://api-to-call.com/endpoint')
.then(response => {
    if(response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message))
.then(jsonResponse => {
    // Code to execute with jsonResponse
});
```

1. Call the `fetch()` function and pass it a URL as a string, determining the endpoint of the request
2. The `.then()` method is chained and in its first argument, the reponse of the GET request is passed to the callback arrow function. **The `.then()` method will fire only after the promise status of `fetch()` has been resolved**
3. If `response.ok` is `true`, it will return `response.json()`
4. If `response.ok` is `false`, our code will `throw` an error
5. The second argument passed to `.then()` will **handle rejection**
6. A second `.then()` method will run after the previous `.then()` method has finished running without error. It takes `jsonResponse`, which contains the returned `response.json()` as its parameter and can now be handled

# Intro to POST Requests using Fetch

```javascript
// fetch POST

fetch('http://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({id: '200'})
})
.then(response => {
    if(response.ok) {
        return response.ok();
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message))
.then(jsonResponse => {
    // Code to execute with jsonResponse
});
```

1. Notice that the `fetch()` call takes two arguments: an endpoint and an object that contains information needed for the POST request
2. The second argument contains two properties: `method: 'POST'` and `body: JSON.stringify({id: '200'});`
3. The second argument determines that this request is a POST request and what information will be sent to the API
4. A successful POST request will return a response body
5. The rest of the request is identical to the GET request

## Handling a POST Request

We set up the POST request by providing the endpoint and the object containing all the necessary information. 

The request returns a Promise which will either be resolved or rejected. If the promise resolves, we can check and return that response. We will chain another `.then()` method and handle the returned JSON object and display the information to our webpage.

```javascript
// ...
const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    
    fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
    })
    .then((response) => {
        if(response.ok) {
        return response.json();
        }
        throw new Error('Request failed!');
    }, (networkError) => {
        console.log(networkError.message);
    })
    .then((jsonResponse) => {
        renderResponse(jsonResponse);
    })
}
//...
```

# Intro to async GET Requests

We're going to take what we've learned about chaining Promises and make it simpler using functionality introduced in ES8: `async` and `await`. We will use the new keywords `async` and `await`, as well as the `try` and `catch` statements.

```javascript
// async await GET

const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint');
        if(response.ok) {
            const jsonResponse = await response.json();
            // Code to execute with jsonResponse
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}
```

+ The `async` keyword is used to declare an `async` function that returns a promise
+ The `await` keyword can only be used within an `async` function. `await` suspends the program while waiting for a promise to resolve
+ In a `try...catch` statement, code in the `try` block will be run and in the event of an exception, the code in the `catch` statement will run

# Intro to async POST Requests

We still have the same structure as the GET request, but in the `fetch()` call, we now have to include an additional argument that contains more information like `method` and `body`.

```javascript
// async await POST
const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({id: 200})
        })
        if(response.ok) {
            const jsonResponse = await response.json();
            // Code to execute with jsonResponse
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}
```

##### _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._