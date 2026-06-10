const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var fs=require("fs");
var str;

readline.question("Enter Input: ", text =>{
    str=text;
    fs.writeFile("FunFact.txt",str,()=>{
    console.log("Text saved in file.");
});
});