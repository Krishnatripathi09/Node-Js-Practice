***Any Application That can be written in JS will eventually be written in JS*** - Jeff Atwood-2007 (Founder-StackOverflow)


# What is NODE JS
- Node Js is a Cross Platform,Open-source JS Runtime Environment that can run on windows,unix,linux,macOs and many More And It was built using Chrome's v8 Engine. Initially JS Was built to run only on Browser's but with Node we can run JS Outside Browser.
Js needs a JS Engine to Run and it can-not run without JS Engine.
Where-ever there is JS there is also a JS Engine to Run the Code.

 
- It was developed in 2009 by Ryan-Dahl.Initially when Ryan started development of Node he started it with SpiderMonkey which is also a JS Engine on FireFox.

For eg: Google Chrome ---> v8
Firefox ---> SpiderMonkey
Safari ----> JavaScriptCore
Edge ----> Chakra 
So all these browser's have there own JS Engine to Execute JS Code.

But after starting the development he decided to drop the idea of development with SpiderMonkey and then he started the Development with chrome's JS (v8) Engine due to its superior performance and design( Performance Optimization,Modern Features,Non-blocking I/O Philosophy
) and He never looked Back.
And there was also a company __(Joyent)__ which was also working on something similar so they asked and hired Ryan to work on this Development by funding his Development.

When Ryan has Developed Node JS he had named it __Web Js__ But later he realized it's potential that it is bigger than web so he Re-named it as __Node JS__.

# Reason Why Node JS Was Created:-
Initially to create the servers there was this __APACHE__ HTTP Server and other servers and these servers were a blocking Server(***More understanding of this concept below What is Blocing Server etc.*** ).And Ryan Wanted to create a non Blocking server and that's why he created Node JS. The __Advantage__ of Non-Blocking servers is It Can handle multiple Requests With Lesser Number of threads.

# NPM - 
In 2010 when Node Js was also Being Developed So a Developer from Joyent(Isaac Z. Schlueter) created NPM which is a package manager for Node. It is a Registry where we can add a packages(for eg: Package for Images,Package for Time and Date,Package of Servers etc.). And all these packages are available on npm and it was very significant step in the success of Node Js. Node Js would not be as successful as it is now without _NPM_(It's Pacakage Manager).

# Windows Support :-
Initially when Node JS was built It was only built for Linux and MacOs and in 2011 the support for Windows also 
Came up which was lead by Joyent and Microsoft making it much more accessible with much bigger Developer's 
Community.

# 2012
In _2012_ Ryan left the project (handling Node Js) and handed it to _Issac_ (A developer in joyent) and
after he Left The pace of Development of Node JS Become very Slow. 
- So In 2014 a developer named Fedor created the fork of Node Js named _IO.js_ as Joyent was limiting the Releases of Node and the Development process also become Very Slow and it was not Actively managed.So some people started using and Maintaining _IO.js_.
- So In _2015_(Sep) These 2 different forks _Node Js_ and _IO Js_ Got merged and there was one committee formed which is Known as Actual
Node JS that we use.
- In _2019_ Again there is one community known as JS foundation and Node Js foundation were again Merged to Create a Open JS Foundation commmitte
 which took control over Node Js which now maintains Node Js.

# Node Js ON the Server
- A server is a remote or local computer (or a virtual machine) that runs software and services to handle client requests over a network. It processes requests, hosts websites, serves APIs, manages databases, and performs other computing tasks
**Exapmple**
- A web server (like Apache, Nginx, or Express.js) serves websites.
- A database server (like MongoDB, PostgreSQL) manages databases.
- A file server stores and shares files over a network

For Eg: When a client using  Internet write's Google.com and Hit's enter in Browser So Now Every Domain will Map to an IP (112.625.123.8) address of the server where that site is hosted On. So now this IP points to the server and server will serve the info which client has Requested.

# CHROME JS Engine(V8)
- Chrome's JavaScript engine is called V8. It's a high-performance engine that compiles JavaScript And it is written in C++.
To Confirm this go-to Browser and Search __v8 Github__ if you click on the first link of v8 ( https://github.com/v8/v8 )
and when you scroll down to Language Section you will see that 78% of code is written in C++ for JS Engine. And Other Languages are also there like JS itself, pyhton, TypeScript etc.
![Languages Used to Write V8 Engine ](/images/image.png)
We can also find the Reference for this at v8 Engines Official Website (https://v8.dev/)
***V8 can be embedded in Any C++ Application*** - So the creator of Node just embedded this v8 engine into a c++ Application and we call it Node Js.

![JS Engine Diagram](/images/Js-Engine.jpeg)

Node Js has V8 Engine + Other __SuperPowers__(will continue Below later) which are API's On server.So V8 Engine's only Job is to execute JS on server. But to get more Features Node JS has other powers along with v8 which is why it's called JS RunTime.

![Lnaguages used in Node Js](/images/image-1.png)

# Why v8 is a C++ Code.
Our Compouters Understand's Binary Code (0 and 1's) and on top of Binary code we have Assembly Code and on Top of Assembly code we have Machine Code and on Top of Machine Code we have High Level Code (C++ etc.) On Top of high level language we have JS. so this JS engine takes this JS code and converts it into Machine Code (which is also known as low Level Code).
![Machine Code](/images/image-2.png) 

 And this is the JOB of our JS engine to convert the Code into Machine Understandable Code :
 ![V8 Engine Conversion Flow](/images/image-3.png)

If we go-to Repository of Node we will find v8 as an Dependency of Node. (https://github.com/nodejs/node/tree/main/deps/v8)


# ECMA Script -->
- ECMA Script is a Standard for JavaScript. It is a specification that defines the syntax and semantics of the JavaScript language. It is maintained by the ECMA International organization.It Basically defines the Rules that JS syntax uses. 
__For Eg__: If we say that (===) operator means strictly equal to operator so this rule was made by ECMA Script Standard Organizantion.
And Js Engine Follows these Standards while executing the code.
[ECMA SCRIPT Official Documentation Site](https://tc39.es/ecma262/)

# NODE REPL(Read,Evaluate,Print & LOOP)
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
__globalThis__ Points to Global Object in all the Environments(Node JS, Chrome,Safari,Edge.)As different Environments had different keywords which point to global Objet in different environments. In 2020 ECMA Finalized __globalThis__ as the Object which will refer to global Object in all the Envrionments.

# Node.js Modules 
Any piece of code written in a separate file which is private to itself is a module.Each file in Node.js acts as a module by default. To enable interaction between modules, we use __module.exports__ and __require()__ (CommonJS) or __export__ and __import__ (ES Modules) for exporting and importing functionality.
To make two modules work together, we use module.exports to expose functionality and require (CommonJS) or import (ES Modules) to use them in other files.

require function is available to us anywhere in our Node Js Code. Whenever we run any program in Node Js require is always there just like global is always there similarly require is also there.So we can just require any file/module into another.

# Node.js Modules System
We can-not access private variables or functions which are there in a module in any other module  without the module in which they are present exporting them. 
Modules protects their variables and functions from leaking.So to access any function or variables into another module we cannot just require 
them in another file and use them. To use them into another module we have to first export our variables and functions.
For eg: In our sum.js we have a function to calculate the sum of 2 numbers but we cannot import the file sum.js in our app.js
and use calcuolateSum function directly instead to use them first we have to export them in our sum module then we can import them in our
app.js file
For eg:
function calculateSum(a,b){
    const sum =a+b;
console.log(sum)
}

module.exports =calculateSum; ***First we have to export the function calculateSum in our sum.js file then we have to import it in the file we want to use it  ***
for eg:- 
const calculateSum =require('./sum.js') //***Here we have imported the function calculate sum in our app.js and then we can use this function to calculate sum in the app.js file ***


If we had multiple things to import in our Sum.js file like a variable x and a function calculateSum then we can export it as an Object.
for eg:-
var a=120;
function calculateSum(a,b){
    const sum =a+b;
    console.log(sum)
    }
module.exports={
    a:a,
    calculateSum:calculateSum
}//***when exporting multiple things at once we can export it as an Object.***

Now again to use this export in our app.js we can import it as 
const obj = require("./sum.js") ***As we have exported our variables snd functions as an Object we can access them in an Object***
for Eg:
***we can use them as***
obj.calculateSum(a,b) and also 
obj.a

we can also do console.log(obj.x)

We Can also directly destructure our objects directly while exporting and then we use them without writing Obj
for eg:- const {calculateSum,x} =require("./sum.js") // imported them directly in our app.js with Object destructuring

and then we can use them without obj
calculateSum(a,b) and also 
we can also do console.log(x)

We can also directly export our function and variables directly withot as a key value Pair.
module.exports={
    a
    calculateSum
}

while importing a module using require we can avoid writing the extension for the file as It will assume that it is (.js) file
for eg: require("./sum") // ***here we do not need to write the extension.***


These type Of Import and Export of modules is Known as Common JS Modules(CEJS). There is one more type of import and export which is known as ES Modules
By default In our app we have commonjs modules in but when we want to use ES Modules we have to create a __package.json__ file and in that we have to specify type as module;
{
    type:"module"
} 


then we can use import and export directly instead of using require and module.exports
for eg: for importing we use
import {x,calculateSum} from "./sum.js"
and for exporting we can use export var x=10 or export function (){}

When commonJs requires the modules in a synchronous way means if we require any file then unless and until the file is not loaded it will not move to next file.
But ES Modules are loaded in an asynchronous way means if we import any file then it will not wait
for the file to be loaded it will move to next file and it will load the file in the
background.
Code in common JS modules Run in Non-strict Mode but in ES modules code runs in Strict Mode.

## Module exports
while exporting functions and variables in our modules when we write module.expports ={x,calculateSum}
so here the module.exports is a an empty object and we can check this by using a __console.log(module.exports)__
and it will return an empty object.

so while exporting we can also write like
***module.exports.x=x***
***module.exports.calculateSum=calculateSum***



# Exporting a folder as Module 
We can also export a folder as a module for eg: we have a folder called calculate and inside that we have 2 functions multiply and sum 
and which we are exporting and then importing separately in our app.js but we can create a __index.js__ file in our calculate folder 
and inside that we can import our sum and multiply functions from there files.
And then we can export them as from index.js file as One 
for eg: 
const { calculateSum } = require("./sum");
const { calculateMultiply } = require("./multiply");

module.exports = { calculateSum, calculateMultiply };

Here we have imported calculateSum, and calculateMultiply from there files and then we have exported them as a centralized export

Similarly we can import them in our App.js directly as folder 
for eg: const { x, calculateSum, calculateMultiply } = require("./calculate");

And then we can directly use them.
var a = 10;
var b = 20;
calculateMultiply(a, b);

calculateSum(a, b);
console.log(x);

And like this we can import a folder as a module .\
## Importing a json file
We can also use require to import a json file for eg: we have a data.json file which has data 
{
    "name":"Krishna",
    "age":25,
    "city":"Pune"
} 

then we can import it in our App.js file as ***const data = require("./data.json");***
and we can do __console.log(data)__ to view the data in the file

# Diving Into the Node JS GitHub Repo :-
All the code that we write inside a module is firts Wrapped in a function then executed. This is why we cannot access variables or functions outside a function without exporting them.It is not a normal Function it is  IIFE(Immediately invoked function expression) function
for eg:
 (function (){

 })();
 here we have a anonymous function and we are immediately calling it {()}. 
 So whatever code we write inside a module and when we __require__ that module node Js will take that code and will wrap it inside a function(IIFE) and then execute it. 

[IIFE](/images/IIFE.jpeg)

We need an IIFE Because:
1) It Immediately invokes the code.
2) It keeps variables and functions Safe.

__Question:__ How are variables and functions private in different Module?
Beacause of IIFE and require when we require a module it wraps that module inside an  IIFE and Then executes them.

__Question:__ How do we get access to module.export ?
Node JS passes module as a parameter to the IIFE in which the code is wrapped.
We can access module.export because it is a property of the module object which is passed to the I
IFE function when we require a module.

All the code that we write inside a module will have module and require functions inside them and it is given to them by Node.

Suppose we have module /xyz.js so node Js take our code wraps it inside a function(IIFE) and then it also add module and require functions.
for eg:-
(fucntion(module,require){
/xyz.js  // Code here 
})();

And after wrappping it inside IIFE it will pass it to V8 Engine then V8 Engine will execute that code and the variables and functions inside the IIFE will not interfere with other code.

__5 Step Mechanism Of Require__
When we do a require there are 5 steps that happen:
1) - Resolving the Module
In this step It checks what type of data is coming. Whether it is coming from a node_module, whether it is coming from .json file whether it is coming from ./localpath and accordingly it resolve the module.
2) - Loading the Module 
In this step file content is loaded according to file type.
3) - Wrapping the Module inside an IIFE
4) - Code Evaluation (In this step module.export happens)
5) - Caching Happens(Then the Module is cached)
    For Eg: If we have a module which is required by multiple different modules then the node will cache that particular module that is the code 
    for that file will run only once. And the node will cache that module means it will not keep running that module on every require it will just run it once and cache it then it will load the result for what ever file that module is required.


## V8 GitHub Repo
https://github.com/nodejs/node/tree/main/deps/v8

# Lib-UV GitHub Repo Path
https://github.com/nodejs/node/tree/main/deps/uv

## CJS and ESM Modules Documentation
https://github.com/nodejs/node/tree/main/lib/internal/modules


## LIB-UV and Async 
[LIB-UV](/images/Lib-UV.png)

Node-Js has an event-driven architecture capable of asynchronous I/O.
The event-driven architecture is based on the libuv library, which is a cross-platform library that provides
a set of APIs for asynchronous I/O operations.

 *** How Synchronous Code is executed in JS ***

 [Sync Code Execution example](/images//Sync%20code%20execution%20in%20Js.jpeg)
As we know JS is a single threaded language so it just has one call Stack.So whatever code we write in JS is executed in Call Stack.
JS Engine also has a Memory Heap whenever we have a variable (a=45678) so memory heap will allocate a place for variable __a__ and it will put the value of variable __a__ inside it. So Memory heap will store all the variables or functions that we have inside memory heap.

JS Engine also has __Garbage collector__. So suppose we have the variable __a__ and suppose later in the program we don't use __a__ any-further so the memory for that variable will be cleared. So JS __Garbage collector__ collects the unused variables and functions to clear the memory.
So Garbage Collector works in Sync with Memory Heap and keeps collecting the Garbage(Unused Variables and Functions) as the program runs.
For Eg: We have a piece of Code in above image so all the code will run inside the call Stack inside a Global execution Context. 
So when we run the code a Global execution Context is created and it is pushed inside the callstack and all our code is wrapped and executed inside the Execution Context. And all this code will be running in a synchronous single Threaded way that means it will execute one line at  a time.
So In our code our variables will be first stored inisde the memory heap and our function will also be stored inside the memory it will not be excuted as we have not called it yet. 
So Once we call our function in the next line with variable __c__ One more Function Execution Context is Created and this funcntion Execution Context is Pushed inside the callStack. We also have our GEC (Global Execution Context inside the CallStack) so the call stack will not push our __GEC__ out of the call Stack as the code is still Running.
So whatever we have in our Function Execution Context (FUC) will also Run and it will Run in Synchronous way Line by Line.

And result of our __a*b__ will stored in the memory Heap.Now the next line will be executed (return result) so whatever is there in memory heap of (FEC) will be returned back from the FEC(Function execution context) to the GEC(Global Execution Context).
[FEC to GEC](/images/FC_to_GEC.jpeg)

And Once the execution of Function Execution Context is finished it is removed from the CallStack
[FEC Removal from CallStack](/images/FEC_Removal.jpeg)

So the GEC(Global Execution context) has left at the the Line where the function was called will again Start Running and as multiplyFn has returned the value of result so the ressult will stored in c and that will again stored in the Memory heap where C was stored.
So Once the whole code is executed the GEC will also go from the call Stack and CallStack will becomes empty.
[CallStack Empty](/images/CallStack_Empty.jpeg)


 *** How Asynchronous Code is executed in JS ***
[Async_Execution](/images/Async_Execution.jpeg)
As we know JS is a synchrounus single threaded language and it cannot perform Asynchronous operations by itself So Here Node comes into 
Picture and it gives JS Engine these super powers (kind of ) to interact with system and do that.
[Node_Gives_Powers_to_JS](/images/Node_Gives_Powers_to_JS.jpeg)
 
So suppose we have a file which is on the server and JS engine wants to Read that File so JS engine needs to talk to OS to know the location of 
the file and all these location information will come from the OS so JS engine will have to contact the OS and get the location and data from the file. Now JS Engine does not have any capability to connect to database it will need some powers to connect to database.
Similary It also does not have the concept of time it will need to connect to OS to get the time info as operating system manages time.
So JS Engine will need some powers to get access to all these features and these powers are given to JS by Node-JS and Node JS is doing that by a library __LibUV__. LibUV is a library that provides a set of APIs for asynchronous I/O operations. So whatever task JS Engine needs to do which it cannot directly do it,It will offload that task to Lib-UV and Lib-UV will perform that task and will get back the Response and will give it back to V8 engine.

[Liv-Uv](/images/Lib-Uv.jpeg)

**How Liv-Uv Performs Asynchronous Operation**
[LIV-UV Async](/images/LIV-UV%20Async.jpeg)

With Lib-Uv Async I/O is made simple.
So whenever the v8 engine sees a API call or file read Operation the v8 Engine will offload that task to the Lib-UV and Lib-Uv will complete that task and will give the result back to V8 Engine. 

***Execution of code inside Lib-UV***
![Code execution Inside Lib-UV](<Execution Inside  Liv-Uv.jpeg>) 
So here we will how mixture of Synchronous and Asynchronous Code is implemented in JS

So JS Engine has a Memory Heap whenever we have a variable (a=45678) so memory heap will allocate a place for variable __a__ and it will put the value of variable __a__ inside it. So Memory heap will store all the variables or functions that we have inside memory heap.

So when we run the code a Global execution Context is created and it is pushed inside the callstack and all our code is wrapped and executed inside the Execution Context. And all this code will be running in a synchronous single Threaded way that means it will execute one line at  a time.

When the script starts, a Global Execution Context (GEC) is created and pushed onto the Call Stack.
Any variables and functions are stored in the Memory Heap, but functions are not executed until they are called.
2️⃣ Synchronous Code Runs in the Call Stack
Any synchronous operations (e.g., variable assignments, mathematical operations, function calls) execute immediately inside the Call Stack.
The Call Stack executes these operations line by line.
3️⃣ Encountering an Asynchronous Operation
When JavaScript encounters asynchronous operations (e.g., setTimeout(), API calls, file system operations), it offloads them to the Libuv (or Web APIs in the browser).
These operations do not block the Call Stack. Instead, they are delegated to the Libuv (or Web APIs), allowing the synchronous code to continue executing.


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



