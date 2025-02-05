const { x, calculateSum, calculateMultiply } = require("./images/calculate");
const data = require("./data.json");
let name = "Node Js";
console.log(data);
console.log(globalThis === global);
var a = 10;
var b = 20;
calculateMultiply(a, b);

calculateSum(a, b);
console.log(x);
