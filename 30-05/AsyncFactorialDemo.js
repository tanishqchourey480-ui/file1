//factorial using asynchronous programming
const factorial = (num) =>{
    return new Promise((resolve, reject) =>{
        if(typeof num=='number'){
            var i,f=1;
            for(i=1;i<=num;i++){
                f=f*i;
            }
            resolve(f);
        }
        else{
            reject('Provided value must be a Number.');
        }
    });
};
//calling of async function
(async () => {
    try{
        const result = await factorial(5);
        console.log('Factorial: '+result);
    } catch (err){
        console.log('Error= '+err)
}})();