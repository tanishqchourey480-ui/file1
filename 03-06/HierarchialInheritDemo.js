class School{
    constructor(){
        this.scode;
        this.sname;
    }
    setSchData(scode,sname){
        this.scode=scode;
        this.sname=sname;
    }
    showSchData(){
        console.log("School Code: "+this.scode);
        console.log("School Name: "+this.sname);
    }
}
class Student extends School{
    constructor(){
        super();
        this.rno;
        this.sname;
    }
    setStuData(rno,sname){
        this.rno=rno;
        this.sname=sname;
    }
    showStuData(){
        console.log("Roll Number: "+this.rno);
        console.log("Student Name: "+this.sname);
    }
}
class RegularStudent extends Student{
    constructor(){
        super();
        this.attendance;
    }
    setRegStuData(attendance){
        this.attendance=attendance;
    }
    showRegStuData(){
        console.log("Attendance Rate: "+this.attendance);
    }
}
class PrivateStudent extends Student{
    constructor(){
        super();
        this.fees;
    }
    setPrivStuData(fees){
        this.fees=fees;
    }
    showPrivStuData(){
        console.log("Fees: "+this.fees);
    }
}
class Faculty extends School{
    constructor(){
        super();
        this.fid;
        this.fname;
    }
    setFacData(fid,fname){
        this.fid=fid;
        this.fname=fname;
    }
    showFacData(){
        console.log("Faculty ID: "+this.fid);
        console.log("Faculty Name: "+this.fname);
    }
}
class PermanentFaculty extends Faculty{
    constructor(){
        super();
        this.salary;
    }
    setPermFacData(salary){
        this.salary=salary;
    }
    showPermFacData(){
        console.log("Permanent Faculty Salary: "+this.salary);
    }
}
class GuestFaculty extends Faculty{
    constructor(){
        super();
        this.workhours;
    }
    setGuestFacData(workhours){
        this.workhours=workhours;
    }
    showGuestFacData(){
        console.log("Guest Faculty Working Hours: "+this.workhours);
    }
}
var regstu=new RegularStudent();
regstu.setSchData(1,"IPS");
regstu.setStuData(1001,"Amit Sharma");
regstu.setRegStuData("70%");

var prvstu=new PrivateStudent();
prvstu.setSchData(1,"IPS");
prvstu.setStuData(1002,"Sumit Jain");
prvstu.setPrivStuData(5000);

var permfac=new PermanentFaculty();
permfac.setSchData(1,"IPS");
permfac.setFacData(10001,"SK Verma");
permfac.setPermFacData(80000);

var guestfac=new GuestFaculty();
guestfac.setSchData(1,"IPS");
guestfac.setFacData(10002,"RK Desai");
guestfac.setGuestFacData("90Hrs/Week");

console.log("Regular student details:")
regstu.showSchData();
regstu.showStuData();
regstu.showRegStuData();

console.log("\nPrivate student details:")
prvstu.showSchData();
prvstu.showStuData();
prvstu.showPrivStuData();

console.log("\nPermanent faculty details:")
permfac.showSchData();
permfac.showFacData();
permfac.showPermFacData();

console.log("\nGuest faculty details:")
guestfac.showSchData();
guestfac.showFacData();
guestfac.showGuestFacData();