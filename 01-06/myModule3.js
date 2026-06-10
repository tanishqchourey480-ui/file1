//check armstrong
//check palindrome
//check even/odd
//print table

var myModule3={
    checkArmstrong: function(n){
        var b,o,t,h;
        o=n%10;
        console.log(o+"\n");
        t=((n%100)-o)/10;
        console.log(t+"\n");
        h=(n-((t*10)+o))/100;
        console.log(h+"\n");
        b=(o*o*o)+(t*t*t)+(h*h*h);
        console.log(b+"\n");
        if(b==n){
            return("Number is Armstrong.");
        }
        else{
            return("Number is not Armstrong.");
        }
    },
    checkPalindrome: function(n){
        var rev=0,temp=n;
        while(n>0){
            rev=(rev*10)+(n%10);
            n=parseInt(n/10)
        }
        if(rev==temp){
            return("Number is Palindrome.");
        }
        else{
            return("Number is not Palindrome.");
        }
    },
    checkEvenOdd: function(n){
        if(n%2==0){
            return("Number is Even.");
        }
        else{
            return("Number is Odd.");
        }
    },
    numTable: function(n){
        var i=1,p,t="";
        while(i<=10){
            p=n*i;
            t=t+"\n"+n+"*"+i+"="+p;
            i++;
        }
        return("Table of "+n+t);
    }
}
module.exports=myModule3;