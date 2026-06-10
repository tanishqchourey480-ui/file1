//JS provides predefined module/library to read user i/p from user in console screen.
//The readline library provides the question() function to get i/p at rintime of program in console screen.
//question() reads data in text form

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var name;
readline.question("Enter Name: ", text => {
    name=text;
    console.log("Welcome "+name);
});