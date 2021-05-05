let matchLink = "https://www.espncricinfo.com/series/bangladesh-tour-of-sri-lanka-2021-1255822/sri-lanka-vs-bangladesh-2nd-test-1255829/full-scorecard"
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

// request is a high order function

request( matchLink , cb );
function cb(error , response , data){
    // console.log("got the data !!!");
    // console.log(data);
    // fs.writeFileSync("./match.html" , data);
    getHighestWicketTaker(data);
}


function getHighestWicketTaker(data){
    let myDocument = cheerio.load(data);
    let bothBowlingTables = myDocument(".table.bowler");
    
    // {
    //     "0" : {bowling table} ,
    //     "1" : {bowling table}
    // }
    // console.log(bothBowlingTables);
    
    let highestWicketTakenName;
    let highestWicketsTaken;
    let economyOfHighestWicketTaker;
    // console.log(bothBowlingTables.length);
    
    for(let i=0 ; i<bothBowlingTables.length ; i++){
        let bowlingTable = myDocument(bothBowlingTables[i]);
        // fs.writeFileSync("./bowlingTable.html",bowlingTable.html());
        // console.log(bowlingTable);
        let allTableRows = bowlingTable.find("tbody tr")
        // fs.writeFileSync("./bowlingTable.html",allTableRows.html());
        // console.log(allTableRows);
        
    //     // {
    //     //     "0" : {tr},
    //     //     "1" : {tr},
    //     //     "2" : {tr}
    //     // }
        for(let j=0 ; j<allTableRows.length ; j++){
             // wicket "4"
            // name "0"
            // economy "5"
            let allTds = myDocument(allTableRows[j]).find("td");
            // {  0 : {} , 1: {} , 2: {}  ,3:{}  }
            if(i==0 && j==0){
                highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                highestWicketsTaken = myDocument(allTds[4]).text();
                economyOfHighestWicketTaker = myDocument(allTds[5]).text();
            }
            else{
                let currentWickets = myDocument(allTds[4]).text();
                let currentEconomy = myDocument(allTds[5]).text();
                if(currentWickets > highestWicketsTaken  || (currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker)){
                    // update if current bowler have high wickets !!
                    highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                    highestWicketsTaken = currentWickets;
                    economyOfHighestWicketTaker = currentEconomy;
                }
            }
        }
    
    }
    
    
    console.log("Name Of Highest Wicket Taker = " + highestWicketTakenName);
    console.log("Wickets Taken = " + highestWicketsTaken)
    console.log("Economy = " + economyOfHighestWicketTaker)
}