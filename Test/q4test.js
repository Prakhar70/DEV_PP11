function flatten(obj){
    for (const item in obj) {
        obj[item]
      }
}











obj={
    name: {
        first: "robin",
        last: "negi",
    },
    address: {
        city: {
        name: "Gwalior",
        },
        landmark: "Badri Marg",
        street: "22",
    },
    };
flatten(obj)