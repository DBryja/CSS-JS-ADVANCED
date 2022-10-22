const fs = require("fs");

fs.readFile("./teksta.txt", "utf-8", (err, file) => {
  console.log("Blad: " + err + "\n", "Wszystko ok: " + file);
});
