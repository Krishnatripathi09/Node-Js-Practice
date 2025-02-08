const crypto = require("node:crypto");
const fs = require("fs");
// Async Function

  process.env.UV_THREADPOOL_SIZE = 2;


crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1- First Key is generated");
});

// fs.readFile("./file.txt", "utf8", () => {
//   console.log("File Reading CB");
// });

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 2: - Second Key is generated");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 3: - third Key is generated");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 4: - fourth Key is generated");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 5th: - Fifth Key is generated");
});
