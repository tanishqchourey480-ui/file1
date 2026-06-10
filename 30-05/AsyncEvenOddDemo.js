//factorial using asynchronous programming
const OddEven = (num) =>{
    return new Promise((resolve, reject) =>{
        if(typeof num=='number'){
            var res;
            if(num%2==0){
                res="Even.";
            }
            else{
                res="Odd.";
            }
            resolve(res);
        }
        else{
            reject('Provided value must be a Number.');
        }
    });
};
//calling of async function
(async () => {
    try{
        const result = await OddEven(2);
        console.log('Result: '+result);
    } catch (err){
        console.log('Error= '+err)
}})();