//factorial using asynchronous programming
const NumTable = (num) =>{
    return new Promise((resolve, reject) =>{
        if(typeof num=='number'){
            var res="",i,t;
            for(i=1;i<=10;i++){
                t=num*1;
                res=res+"\n"+num+"*"+i+"="+t;
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
        const result = await NumTable(17);
        console.log('Result: '+result);
    } catch (err){
        console.log('Error= '+err)
}})();