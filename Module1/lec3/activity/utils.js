const fs=require('fs');
function getFilesData(files) {
    let filesData = "";
    for (let i = 0; i < files.length; i++) {
      if (!fs.existsSync(files[i])) {
        console.log("One or more Files Doesn't Exist !");
        return;
      }
      if (i == files.length - 1) {
        filesData += fs.readFileSync(files[i]);
      } else {
        filesData += fs.readFileSync(files[i]) + "\r\n";
      }
    }
    return filesData;
  }
function applySFlag(f1KaData) {
    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = f1KaData.split("\r\n");
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
function applyBFlag(data){
    count=0;
    let splittedData = data.split("\r\n");
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
    for(let i=0;i<splittedData.length;i++){
            splittedData[i]=`${count}. ${splittedData[i]}`;
            count++;
    }
    let NFlaggedString=splittedData.join("\n");
    return NFlaggedString;
}
module.exports={
    applySFlag:applySFlag,
    applyBFlag:applyBFlag,
    applyNFlag:applyNFlag,
    getFilesData:getFilesData,
}