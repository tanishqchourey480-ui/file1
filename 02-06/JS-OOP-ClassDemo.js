class A{
    constructor(){
        this.a;
        this.b;
        this.c;
    }
    setData(a,b){
        this.a=a;
        this.b=b;
    }
    sumFun(){
        this.c=this.a+this.b;
        console.log("Sum= "+this.c);
    }
    multiFun(){
        this.c=this.a*this.b;
        console.log("Product= "+this.c);
    }
}
var obj1=new A();
obj1.setData(5,8);
obj1.sumFun();
obj1.multiFun();
