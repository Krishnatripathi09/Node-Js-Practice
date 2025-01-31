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
