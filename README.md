***Any Application That can be written in JS will eventually be written in JS*** - Jeff Atwood-2007 (Founder-StackOverflow)


## What is NODE JS
- Node Js is a Cross Platform,Open-source JS Runtime Environment that can run on windows,unix,linux,macOs and many More And It was built using Chrome's v8 Engine. Initially JS Was built to run only on Browser's but with Node we can run JS Outside Browser.
Js needs a JS Engine to Run and it can-not run without JS Engine.
Where-ever there is JS there is also a JS Engine to Run the Code.

 
- It was developed in 2009 by Ryan-Dahl.Initially when Ryan started development of Node he started it with SpiderMonkey which is also a JS Engine on FireFox.

For eg: Google Chrome ---> v8
Firefox ---> SpiderMonkey
Safari ----> JavaScriptCore
Edge ----> Chakra 
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

## CHROME JS Engine(V8)
- Chrome's JavaScript engine is called V8. It's a high-performance engine that compiles JavaScript And it is written in C++.
To Confirm this go-to Browser and Search __v8 Github__ if you click on the first link of v8 ( https://github.com/v8/v8 )
and when you scroll down to Language Section you will that 78% of code is written in C++ for JS Engine. And Other Languages are also there like JS itself pyhton TypeScript etc.
![Languages Used to Write V8 Engine ](image.png)
We can also find the Reference for this at v8 Engines Official Website (https://v8.dev/)
***V8 can be embedded in Any C++ Application*** - So the creator of Node just embedded this v8 engine into a c++ Application and we call it Node Js.

![JS Engine Diagram](Js-Engine.jpeg)

Node Js has V8 Engine + Other __SuperPowers__(will continue Below later) which are API's On server.So V8 Engine's only Job is to execute JS on server. But to get more Features Node JS has other powers along with v8 which is why it's called JS RunTime.

![Lnaguages used in Node Js](image-1.png)

## Why v8 is a C++ Code.
Our Compouters Understand's Binary Code (0 and 1's) and on top of Binary code we have Assembly Code and on Top of Assembly code we have Machine Code and on Top of Machine Code we have High Level Code (C++ etc.) On Top of high level language we have JS. so this JS engine takes this JS code and converts it into Machine Code (which is also known as low Level Code).
![Machine Code](image-2.png) 

 And this is the JOB of our JS engine to convert the Code into Machine Understandable Code :
 ![V8 Engine Conversion Flow](image-3.png)

If we go-to Repository of Node we will find v8 as an Dependency of Node. (https://github.com/nodejs/node/tree/main/deps/v8)


## ECMA Script -->
- ECMA Script is a Standard for JavaScript. It is a specification that defines the syntax and semantics of the JavaScript language. It is maintained by the ECMA International organization.It Basically defines the Rules that JS syntax uses. 
__For Eg__: If we say that (===) operator means strictly equal to operator so this rule was made by ECMA Script Standard Organizantion.
And Js Engine Follows these Standards while executing the code.
[ECMA SCRIPT Official Documentation Site](https://tc39.es/ecma262/)

## NODE REPL(Read,Evaluate,Print & LOOP)
The Quickest way to run our code in our machine after installing Node is to go to terminal and Type Node there and hit enter it will open Node REPL(command Line for Node). It first Reads the code, Then Evaluates the code then it Print's the output and then start Again (i.e Loop)
Inside the REPL we can write any JS code. 

# Global Objects in Node-JS
Global is an one of the superpowers which is given to us by Node-Js.(It is not given us by v8 Engine)
Global Objects are the Objects that are available in all Scope and we can can use them anywhere in Project. They provide core functionalities without needed to require them explicitly in our Code.

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
Window,this,self,frames all these keywords refer to Global Object in Browser's.
__globalThis__ Points to Global Object in all the Environments(Node JS, Chrome,Safari,Edge.)


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
