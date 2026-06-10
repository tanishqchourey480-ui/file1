class Student{
    constructor(rno,sname,marks){//Parameterized/With-Argument Constructor
        this.rno=rno;
        this.sname=sname;
        this.marks=marks;
        console.log("Parameterized Constructor invoked.")
    }
    showDetails(){
        console.log("Roll Number: "+this.rno+"; Student Name: "+this.sname+"; Marks: "+this.marks);
    }
}
var s1=new Student(1,"Bhargav",50);
var s2=new Student(2,"Jahnvi",68);
s1.showDetails();
s2.showDetails();