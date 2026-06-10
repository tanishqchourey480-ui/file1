const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var a,b;
readline.question("Enter value of number: ", num => {
    a=parseInt(num);
    readline.close();
    for (b=1;b<=10;b++){
        console.log(a+"*"+b+"="+a*b);
    }
});