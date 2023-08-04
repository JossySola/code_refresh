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

    1.1 HTTP verb (*GET, POST, PUT, DELETE*)
    1.2 Header (*type of content, MIME Types*)
    1.3 Path to a resource
    1.4 Optional message body containing data

2. `Sending Response`

    2.1 Content Type(*content-type*)
    2.2 Response Code 
        2.2.1 **200 (OK)**
        2.2.2 **201 (CREATED)**
        2.2.3 **204 (NO CONTENT)**
        2.2.4 **400 (BAD REQUEST)**
        2.2.5 **403 (FORBIDDEN)**
        2.2.6 **404 (NOT FOUND)**
        2.2.7 **500 (INTERNAL SERVER ERROR)**
    2.3 Data

##### _All the information written above is taken from [Codecademy](https://www.codecademy.com), **Front-End Career Path**._