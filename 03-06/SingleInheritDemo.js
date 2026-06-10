class College{
    constructor(){
        this.ccode;
        this.cname;
    }
    setCollData(ccode,cname){
        this.ccode=ccode;
        this.cname=cname;
    }
    showCollData(){
        console.log("College Code: "+this.ccode);
        console.log("College Name: "+this.cname);
    }
}
class Faculty extends College{
    constructor(){
        super();//used to invoke base class constructor from derived class constructor. Always written in 1st line of derived class constructor 
        this.fid;
        this.fname;
        this.fsal;
    }
    setFacData(fid,fname,fsal){
        this.fid=fid;
        this.fname=fname;
        this.fsal=fsal;
    }
    showFacData(){
        console.log("Faculty ID: "+this.fid);
        console.log("Faculty Name: "+this.fname);
        console.log("Faculty Salary: "+this.fsal);
    }
}
var f1=new Faculty();
f1.setCollData(1,"LNCT");
f1.setFacData(1008,"AK Bangal",80000);
f1.showCollData();
f1.showFacData();