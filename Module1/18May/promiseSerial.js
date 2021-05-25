const fs=require("fs");
let f1Kapromise=fs.promises.readFile("./f1.txt");
f1Kapromise.then(function(data){
    console.log(data+"")
    let f2Kapromise=fs.promises.readFile("./f2.txt");
    f2Kapromise.then(function(data){
        console.log(data+"");
        let f3Kapromise=fs.promises.readFile("./f3.txt");
        f3Kapromise.then(function(data){
            console.log(data+"");
        })


    })
})

