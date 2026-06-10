//callback function is a special function that can pass as argument in another function
//It is executed after the main function's execution completes
function mainFunction(callback){
    console.log("Performing Operation...");
    setTimeout(function() {
        callback("Operation Complete.");
    }, 10000);
}
//define callback function
function callbackFunction(result){
    console.log("Result: "+result);
}
//call main function with callback function
mainFunction(callbackFunction);