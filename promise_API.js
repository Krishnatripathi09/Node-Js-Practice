function createPromise() {
  const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 1 is Resolved");
    }, 1000);
  });
  const p2 = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Promise 2 is Rejected");
    }, 2000);
  });
  const p3 = new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 3 is Resolved");
    }, 3000);
  });

  return [p1, p2, p3];
}

async function handlePromise() {
  try {
    const result = await Promise.allSettled(createPromise());
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();
