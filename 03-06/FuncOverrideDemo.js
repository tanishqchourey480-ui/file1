class School{
    constructor(){
        this.scode;
        this.sname;
    }
    setDetails(code,name){
        this.scode=code;
        this.sname=name;
    }
    showDetails(){
        console.log("School Code: "+this.scode);
        console.log("School Name: "+this.sname);
    }
}
class Student extends School{
    constructor(){
        super();
        this.stcode;
        this.stname;
    }
    setDetails(stc,stnm){
        super.setDetails(101,"IPS");
        this.stcode=stc;
        this.stname=stnm;
    }
    showDetails(){
        super.showDetails();
        console.log("Student Code: "+this.stcode);
        console.log("Student Name: "+this.stname);
    }
}
var s1=new Student();
s1.setDetails(1,"Yash Kumar");
s1.showDetails();