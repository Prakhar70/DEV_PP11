const fs = require("fs");
let files = ["./f1.txt", "./f2.txt", "./f3.txt"];
let promises = [];
for (let i = 0; i < files.length; i++) {
    promises.push(fs.promises.readFile(files[i]));
    promises[i].then(function (data) {
        console.log(data + "");
    })
}