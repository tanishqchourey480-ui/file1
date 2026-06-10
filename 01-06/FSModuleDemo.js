var fs=require("fs");
var str="A number is always equal to itself."
fs.writeFile("MathFact.txt",str,()=>{
    console.log("Text saved in file.")
});