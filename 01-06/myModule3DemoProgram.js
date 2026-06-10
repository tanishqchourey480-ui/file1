const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var obj1=require("./myModule3");

readline.question("Enter Number to check Armstrong: ", num =>{
    var n1=parseInt(num);
    var res1=obj1.checkArmstrong(n1);
    console.log(res1);
    readline.question("Enter Number to check Palindrome: ", num =>{
    var n2=parseInt(num);
    var res2=obj1.checkPalindrome(n2);
    console.log(res2);
    readline.question("Enter Number to check even/odd: ", num =>{
    var n3=parseInt(num);
    var res3=obj1.checkEvenOdd(n3);
    console.log(res3);
    readline.question("Enter Number to print table: ", num =>{
    n4=parseInt(num);
    var res4=obj1.numTable(n4);
    console.log(res4);
    readline.close;
});
});
});
});