# APIs and HTTP Requests

HTTP stands for **Hypertext Transfer Protocol** and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network.

The transfer of resources happens using TCP (**Transmission Control Protocol**). TCP manages the channels between your browser and the server. TCP is used to manage many types of internet connections in which one computer or device wants to send something to another.

## HTTP & TCP: How it Works

*http://codecademy.com*

1. Browser grabs the `http` part and recognizes the **network protocol to use**.
2. It takes the domain name from the URL (**Uniform Resource Locator**), in this case `codecademy.com`
3. It asks the internet **Domain Name Server** (DNS) to return an **Internet Protocol** (IP) address
4. With the IP address, the browser opens a connection to the server at that address, using the `http` protocol as specified
5. It will initiate a GET request to the server which contains the IP address of the host and optionally a data payload. The GET request contains the following text:

> GET / HTTP/1.1
> Host: www.codecademy.com
