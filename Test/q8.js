function decToBin(num) {
    let n = Number(num);
    let bn = 0;
    let inc = 1;
    // console.log(num+5);
    while (n != 0) {

        let d = Math.floor(n % 2);
        // console.log(d);
        bn = bn + d * inc;
        n = Math.floor(n / 2);
        inc = inc * 10;
    }
    return bn;
}
