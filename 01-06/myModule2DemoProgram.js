const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var obj1=require("./myModule2");

readline.question("Enter Number to check Prime: ", num =>{
    var n1=parseInt(num);
    var res1=obj1.checkPrime(n1);
    console.log(res1);
    readline.question("Enter Number to count digits: ", num =>{
    var n2=parseInt(num);
    var res2=obj1.countDigits(n2);
    console.log(res2);
    readline.question("Enter Number to add digits: ", num =>{
    n3=parseInt(num);
    var res3=obj1.sumDigits(n3);
    console.log(res3);
    readline.close;
    });
});
});