const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// synchronous
fs.readFileSync("./file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

//Asynchronous
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

//Synchronous
function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
