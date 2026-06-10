const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var a,b,c;
readline.question("Enter value of A: ", num => {
    a=parseInt(num);
    readline.question("Enter value of B: ", num => {
    b=parseInt(num);
    readline.question("Enter value of c: ", num => {
    c=parseInt(num);
    readline.close();
    if(a>b && a>c){
        console.log("A is greatest.");
    }
    if(b>a && b>c){
        console.log("B is greatest.");
    }
    if(c>b && c>a){
        console.log("C is greatest.");
    }
    });
    });
});