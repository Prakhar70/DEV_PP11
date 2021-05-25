const fs=require("fs");
let f1Kapromise=fs.promises.readFile("./f1.txt");
let f2Kapromise=fs.promises.readFile("./f2.txt");
let f3Kapromise=fs.promises.readFile("./f3.txt");
f1Kapromise.then(function(data){
    console.log(data+"")
    
    f2Kapromise.then(function(data){
        console.log(data+"");
        
        f3Kapromise.then(function(data){
            console.log(data+"");
        })


    })
})
