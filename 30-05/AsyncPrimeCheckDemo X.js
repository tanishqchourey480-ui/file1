//factorial using asynchronous programming
const PrimeCheck = (num) =>{
    return new Promise((resolve, reject) =>{
        if(typeof num=='number'){
            var res,num,b,c;
            for (b=1;b<=num;b++){
                if(num%b==0){
                    c++;
                }
            }
            if(c==2){
                res="Prime";
            }
            else{
                res="Not Prime";
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
        const result = await PrimeCheck(2);
        console.log('Result: '+result);
    } catch (err){
        console.log('Error: '+err)
}})();