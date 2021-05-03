const fs = require("fs");
let f1KaData = fs.readFileSync("./f1.txt", "utf8");
let f2KaData = fs.readFileSync("./f2.txt", "utf8");
function applySFlag(f1KaData) {
    let emptyIncluded = false;
    let removedSpaces = [];
    // let prak=f1KaData.split("");
    // console.log(prak);
    let splittedData = f1KaData.split("\r\n");
    console.log(splittedData);
    for (let i = 0; i < splittedData.length; i++) {
        if (splittedData[i] == "" && emptyIncluded == false) {
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;
        } else if (splittedData[i] != "") {
            removedSpaces.push(splittedData[i]);
            if (i < splittedData.length - 2) emptyIncluded = false;
        }
    }
    let removedSpacesString = removedSpaces.join("\r\n");
    return removedSpacesString;
}
function applySFlagself(f1KaData){
    let splittedData = f1KaData.split("\r\n");
    console.log(splittedData);
    removedSpaces=[];
    for(let i=0;i<splittedData.length;i++){
        if(i==0){
            removedSpaces.push(splittedData[i])
        }
        else{
            if(splittedData[i]!=""){
                removedSpaces.push(splittedData[i]);
            }
            else{
                if(splittedData[i-1]!=""){
                    removedSpaces.push(splittedData[i])
                }
            }
        }
    }
    let removedSpacesString = removedSpaces.join("\r\n");
    return removedSpacesString;
}
function applyBFlag(data){
    count=0;
    let splittedData = data.split("\r\n");
    console.log(splittedData);
    for(let i=0;i<splittedData.length;i++){
        if(splittedData[i]!=""){
            splittedData[i]=`${count}. ${splittedData[i]}`;
            count++;
        }
    }
    let bFlaggedString=splittedData.join("\n");
    return bFlaggedString;
}
function applyNFlag(data){
    count=0;
    let splittedData = data.split("\r\n");
    // console.log(splittedData);
    for(let i=0;i<splittedData.length;i++){
            splittedData[i]=`${count}. ${splittedData[i]}`;
            count++;
    }
    let NFlaggedString=splittedData.join("\n");
    return NFlaggedString;
}
module.exports={
    "s function":applySFlag,
    "b function":applyBFlag,
    "c function":applyNFlag,
}
let removedSpacesString = applyNFlag(f1KaData);
console.log(removedSpacesString);
console.log(module);