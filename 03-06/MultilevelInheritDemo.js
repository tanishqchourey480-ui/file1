class Company{
    constructor(){
        this.ccode;
        this.cname;
    }
    setCompData(ccode,cname){
        this.ccode=ccode;
        this.cname=cname;
    }
    showCompData(){
        console.log("Company Code: "+this.ccode);
        console.log("Company Name: "+this.cname);
    }
}
class Department extends Company{
    constructor(){
        super();
        this.dno;
        this.dname;
    }
    setDeptData(dno,dname){
        this.dno=dno;
        this.dname=dname;
    }
    showDeptData(){
        console.log("Department Number: "+this.dno);
        console.log("Department Name: "+this.dname);
    }
}
class Employee extends Department{
    constructor(){
        super();
        this.ecode;
        this.ename;
        this.esal;
    }
    setEmpData(ecode,ename,esal){
        this.ecode=ecode;
        this.ename=ename;
        this.esal=esal;
    }
    showEmpData(){
        console.log("Employee Code: "+this.ecode);
        console.log("Employee Name: "+this.ename);
        console.log("Employee Salary: "+this.esal);
    }
}
var e1=new Employee();
e1.setCompData(1,"TCS");
e1.setDeptData(1001,"Development");
e1.setEmpData(11,"Ashish",40000);
e1.showCompData();
e1.showDeptData();
e1.showEmpData();