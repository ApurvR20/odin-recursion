const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
 });

const fibs = (n) => {

    if(n == 0) return [0];
    if(n == 1) return [0,1];
    const arr = fibs(n-1);
    return [...arr, arr[n-1]+arr[n-2]];

}


rl.question(`Enter no. of terms : `, n => {
    console.log(fibs(n-1));

    rl.close();
})
