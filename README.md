***Any Application That can be written in JS will eventually be written in JS*** - Jeff Atwood-2007 (Founder-StackOverflow)


## What is NODE JS
- Node Js is a Cross Platform,Open-source JS Runtime Environment that can run on windows,unix,linux,macOs and many More And It was built using Chrome's v8 Engine. Initially JS Was built to run only on Browser's but with Node we can run JS Outside Browser.
Js needs a JS Engine to Run and it can-not run without JS Engine.
Where-ever there is JS there is also a JS Engine to Run the Code.

 
- It was developed in 2009 by Ryan-Dahl.Initially when Ryan started development of Node he started it with SpiderMonkey which is also a JS Engine on FireFox.

For eg: Google Chrome ---> v8
Firefox ---> SpiderMonkey
Safari ---> JavaScriptCore
So all these browser's have there own JS Engine to Execute JS Code.

But after starting the development he decided to drop the idea of development with SpiderMonkey and then he started the Development with chrome's JS (v8) Engine and He never looked Back.
And there was also a company __(Joyent)__ which was also working on something similar so they asked and hired Ryanto work on this Development by funding his Development.

When Ryan has Developed Node JS he had named it Web Js But later he realized it's potential that it is bigger than web so he Re-named it as __Node JS__.

## Reason Why Node JS Was Created:-
Initially to create the servers there was this __APACHE__ HTTP Server and other servers and these servers were a blocking Server(***More understanding of this concept below What is Blocing Server etc.*** ).And Ryan Wanted to create a non Blocking server and thet's why he created Node JS. The __Advantage__ of Non-Blocking servers is It Can handle multiple Requests With Lesser Number of threads.

## NPM - 
In 2010 when Node Js was also Being Developed So a Developer from Joyent created NPM which is a package manager for Node. Which is a Registry where we can add a package(for eg: Package for Images,Package for Time and Date,Package of Servers etc.). And all these packages are available on npm and it was very significant step in the success of Node Js. Node Js would not be as successful as it is now without _NPM_(It's Pacakage Manager).

## Windows Support :-
Initially when Node JS was built It was only built for Linux and MacOs and in 2011 the support for Windows also 
Came up which was lead by Joyent and Microsoft making it much more accessible with much bigger Developer's 
Community.

## 2012
In _2012_ Ryan left the project (handling Node Js) and handed it to _Issac_ (A developer in joyent) and
after he Left The pace of Development of Node JS Become very Slow. 
- So In 2014 a developer named Fedor created the fork of Node Js named _IO.js_ as Joyent was limiting the Releases of Node and the Development process also become Very Slow and it was not Actively managed.So some people started using and Maintaining _NodeJS_.
- So In _2015_(Sep) These 2 different forks _Node Js_ and _IO Js_ Got merged and there was one committee formed which is Known as Actual
Node JS that we used.
- In _2019_ Again there is one community known as JS foundation and Node Js foundation were again Merged to Create a Open JS Foundation commmitte
 took control over Node Js which now maintains Node Js.

## Node Js ON the Server
- A server is a remote or local computer (or a virtual machine) that runs software and services to handle client requests over a network. It processes requests, hosts websites, serves APIs, manages databases, and performs other computing tasks
**Exapmple**
- A web server (like Apache, Nginx, or Express.js) serves websites.
- A database server (like MongoDB, PostgreSQL) manages databases.
- A file server stores and shares files over a network

For Eg: When a client using  Internet write's Google.com and Hit's enter in Browser So Now Every Domain will Map to an IP (112.625.123.8) address of the server where that site is hosted. So now this IP points to the server and server will serve the info which client has Requested.



## NODE - JS  Practice From Basics

Created a Node Js Server which listens on port (3000)
"const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/getData") {
    res.end("Data Chahi Re 🤨");
    return;
  } else {
    res.end("Sun raha hu be: :|");
  }
});
server.listen(3000);

Here first installed the node js and imported the built in http module from node and then I Created an http server using __http.createserver()__ method available on http module I created a server and which takes a callBack function with 2 parameters 
req (request) → contains details about the incoming request (like the URL).
res (response) → used to send a response back to the client

Inside the Callback function i Checked if requested url is "/getData" if that is true then sent a response using native node method res.end
"Data chahi Re" Other wise if requested url is not that then sent a response "Sun Raha hu be :|" 
- Finally i started my server on port 3000 using __server.listen(3000)__ to listen to incoming http responses.

# Global Objects in Node-JS
Global Objects are the Objects that are available in all Scope and we can can use them anywhere in Project. They provide core functionalities without needed to require them exxplicitly in our Code.

<ref *1> Object [global] {
  global: [Circular *1],formation.
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}

Global Objects and functions In Node.js
## NODE - JS  Practice From Basics

Created a Node Js Server which listens on port (3000)
"const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/getData") {
    res.end("Data Chahi Re 🤨");
    return;
  } else {
    res.end("Sun raha hu be: :|");
  }
});
server.listen(3000);

Here first installed the node js and imported the built in http module from node and then I Created an http server using __http.createserver()__ method available on http module I created a server and which takes a callBack function with 2 parameters 
req (request) → contains details about the incoming request (like the URL).
res (response) → used to send a response back to the client

Inside the Callback function i Checked if requested url is "/getData" if that is true then sent a response using native node method res.end
"Data chahi Re" Other wise if requested url is not that then sent a response "Sun Raha hu be :|" 
- Finally i started my server on port 3000 using __server.listen(3000)__ to listen to incoming http responses.
