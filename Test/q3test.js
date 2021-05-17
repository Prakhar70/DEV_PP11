function rainDance(rainfallobj) {
    myObj = []
    for (let i = 0; i < rainfallobj.length; i++) {
        let newobj = {};
        newobj["name"] = rainfallobj[i]["name"];
        let avgRainfall = 0;
        let arr = rainfallobj[i]["rainfall"];
        for (let j = 0; j < arr.length; j++) {
            avgRainfall += arr[j]
        }
        avgRainfall = avgRainfall / (arr.length);
        newobj["avgRainfall"] = avgRainfall;
        myObj.push(newobj);
    }
    return myObj;
}

obj = [
    { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
    { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
    { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
    { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
]
console.log(rainDance(obj));