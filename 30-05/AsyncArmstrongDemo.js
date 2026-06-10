//factorial using asynchronous programming
const checkArms = (num) =>{
    return new Promise((resolve, reject) =>{
        if(typeof num=='number' && num>100 && num<999){
            var h,t,u,sum,res;
            h=parseInt(num/100);
            t=parseInt(num/10)%10;
            u=num%10;
            sum=(h*h*h)+(t*t*t)+(u*u*u);
            if(sum==num){
                res="Armstrong";
            }
            else{
                res="Not Armstrong";
            }
            resolve(res);
        }
        else{
            reject('Provided value must be 3-Digit Number.');
        }
    });
};
//calling of async function
(async () => {
    try{
        var num=153;
        const result = await checkArms(num);
        console.log('Result: '+result);
    } catch (err){
        console.log('Error= '+err)
}})();