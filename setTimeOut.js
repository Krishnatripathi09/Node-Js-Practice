console.log("Hello world");

var a = 1078666;
var b = 20986;

setTimeout(() => {
  console.log("Call Me After 1 SEC:");
}, 1000);
setTimeout(() => {
  console.log("Call Me  Instantly:");
}, 0);

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication Result is:-", c);
