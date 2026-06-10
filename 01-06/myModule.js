var myModule={
    sumFun: function(a,b){
        var c;
        c=a+b;
        return(c);
    },
    factFun: function(n){
        var f=1;
        while(n>0){
            f=f*n;
            n--;
        }
        return(f);
    }
}
module.exports=myModule;