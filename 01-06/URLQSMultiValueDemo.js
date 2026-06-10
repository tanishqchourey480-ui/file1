var http=require("http");
var url=require("url");
var qs=require("querystring");
const PORT=5689;

http.createServer((req,res)=>{
    var udata=url.parse(req.url);
    var qdata=qs.parse(udata.query);
    console.log("Name received from client: "+qdata.sname);
    console.log("Roll Number received from client: "+qdata.rollno);
    console.log("Marks received from client: "+qdata.marks);
    res.write("Welcome. This is a HTTP, URL, & QueryString demo application.");
    res.end();
}).listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
});
//run program in terminal with node, then open http://localhost:5689/?sname=XYZ&rollno=21&marks=10 in a browser to see