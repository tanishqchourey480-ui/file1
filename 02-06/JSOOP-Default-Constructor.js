class Student{
    constructor(){//Default/Zero-Argument Constructor
        this.rno=100;
        this.sname="guest";
        this.marks=50;
        console.log("Default Constructor invoked.")
    }
    showDetails(){
        console.log("Roll Number: "+this.rno+"; Student Name: "+this.sname+"; Marks: "+this.marks);
    }
}
var s1=new Student();
var s2=new Student();
s1.showDetails();
s2.showDetails();