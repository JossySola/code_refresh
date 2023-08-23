# What is REST?

## REpresentational State Transfer

It is an architectural style for providing **standards between computer systems on the web**, making it easier for systems to communicate with each other. **RESTful** systems are characterized by how they are stateless and separate the concerns of client and server. 

## Separation of Client and Server

In the REST architectural style, the implementation of the client and the implementation of the server can be done independently without each knowing about the other. This means that **the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client**.

*As long as each side knows what format of messages to send to the other*, they can be kept `modular and separate`. 

Separating the user interface (client) concerns from the data storage (server) concerns, we improve the `flexibility` of the interface across platforms and improve `scalability` by simplifying the server components. Additionally, the separation allows each component the ability to `evolve independently`.

## Statelessness

Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa. Both the server and the client can understand any message received.

This constraint of statelessness is enforced through the use of `resources`, rather than `commands`. Resources are the nouns of the Web - they describe any object, document, or thing that you may need to store or send to other services.

Because REST systems interact through standard operations on resources, they do not rely on the implementation of interfaces.

Components can be managed, updated, and reused without affecting the system as a whole, even during operation of the system.

## Communication between Client and Server

1. `Client Request`

    - HTTP verb (*GET, POST, PUT, DELETE*)
    - Header (*type of content, MIME Types*)
    - Path to a resource
    - Optional message body containing data

2. `Sending Response`

    - Content Type (*content-type*)
    - Response Code 
        - **200 (OK)**
        - **201 (CREATED)**
        - **204 (NO CONTENT)**
        - **400 (BAD REQUEST)**
        - **403 (FORBIDDEN)**
        - **404 (NOT FOUND)**
        - **500 (INTERNAL SERVER ERROR)**
    - Data

##### _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._