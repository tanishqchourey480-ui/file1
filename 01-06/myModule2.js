var myModule2={
    checkPrime: function(n){
        var c=0,i;
        for(i=1;i<=n;i++){
            if(n%i==0){
                c++;
            }
        }
        if(c==2){
            return("Number is Prime.");
        }
        else{
            return("Number is not Prime.");
        }
    },
    countDigits: function(n){
        var count=0;
        while(n>0){
            count++;
            n=parseInt(n/10);
        }
        return("Number of digits= "+count);
    },
    sumDigits: function(n){
        var sum=0;
        while(n>0){
            sum=sum+(n%10);
            n=parseInt(n/10);
        }
        return("Sum of digits= "+sum);
    }
}
module.exports=myModule2;