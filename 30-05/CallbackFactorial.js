function mainFunction(callback){
    console.log("Calculating Factorial...");
    setTimeout(function() {
        var n=5;
        callback(n);
    }, 5000);
}
function callbackFactFun(num){
    var f=1,i;
    for(i=num;i>=1;i--){
        f=f*i;
    }
    console.log("Factorial of "+num+"= "+f);
}
//call main function with callback function
mainFunction(callbackFactFun);