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
var s=[]
s[0]=new Student();
s[1]=new Student();
s[2]=new Student();
s[0].setDetails(1,"Bhargav",50);
s[1].setDetails(2,"Jahnvi",68);
s[2].setDetails(3,"Kushal",43);
var i;
for(i=0;i<s.length;i++){
    s[i].showDetails();
}