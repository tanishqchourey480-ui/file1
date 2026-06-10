class Student{
    constructor(){
        this.rno;
        this.sname;
        this.marks;
    }
    setDetails(rno,sname,marks){
        this.rno=rno;
        this.sname=sname;
        this.marks=marks;
    }
    showDetails(){
        console.log("Roll Number: "+this.rno);
        console.log("Student Name: "+this.sname);
        console.log("Marks: "+this.marks);
    }
}
var s1=new Student();
var s2=new Student();
s1.setDetails(101,"Himanshu",479);
s2.setDetails(102,"Ashish",321);
s1.showDetails();
s2.showDetails();