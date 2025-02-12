function createPromise(condition) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise is Resolved");
    }, 3000);
  });
}

function handlePromise(condition) {
  createPromise(condition)
    .then((result) => {
      console.log(result);
      return "Promise Step 1 Completed";
    })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.log("This is error =====> ",err);
    });
}
handlePromise(false);
