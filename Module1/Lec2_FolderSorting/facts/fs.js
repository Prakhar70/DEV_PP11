const fs=require("fs");
console.log(fs);
let fskadata=fs.readFileSync("./f1.txt");
console.log(fskadata+" ");//stringify the buffer (binary data)
fs.writeFileSync("./index.txt","rtt");