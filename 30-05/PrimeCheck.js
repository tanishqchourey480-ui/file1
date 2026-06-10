const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var a,b,c=0;
readline.question("Enter value of number: ", num => {
    a=parseInt(num);
    readline.close();
    for (b=1;b<=a;b++){
        if(a%b==0){
            c++;
        }
    };
    if(c==2){
        console.log("Number is Prime.");
    }
    else{
        console.log("Number is not Prime.");
    };
});