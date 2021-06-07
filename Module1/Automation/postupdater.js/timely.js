const cron=require('node-cron');
const shell=require('shelljs');

cron.schedule("*/1 * * * *",function(){
    console.log("node.js script is running")
    if(shell.exec("node test.js").code!==0){
        console.log("Something went wrong");
    }
})