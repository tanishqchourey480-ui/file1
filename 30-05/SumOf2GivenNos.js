const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var a,b,c;
readline.question("Enter value of A: ", num => {
    a=parseInt(num);
    readline.question("Enter value of B: ", num => {
    b=parseInt(num);
    readline.close();
    c=a+b;
    console.log("Sum of A and B= "+c);
    });
});