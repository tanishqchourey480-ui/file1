//read data from browser & save in JSON file
var http=require("http");
var url=require("url");
var qs=require("querystring");
var fs=require("fs");
const PORT=8088;

http.createServer((req,res)=>{
    var udata=url.parse(req.url);
    var qdata=qs.parse(udata.query);
    fs.readFile("./STDNT.json","utf-8",(err,data)=>{
        if(err){
            res.write(err);
            res.end();
        }
        else{
            res.write("Hello JSON Demo ");
            var slist=JSON.parse(data);
            var obj={
                rno:qdata.rno,
                sname:qdata.sname,
                marks:qdata.marks
            };
            slist.push(obj);
            var ulist=JSON.stringify(slist);
            fs.writeFile("./STDNT.json",ulist,()=>{
                res.write("Data Saved");
                res.end();
            });
        }
    });
}).listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
});
//run program in terminal, then open http://localhost:8088/?rno=102&sname=ZYX&marks=500 in browser