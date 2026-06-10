//display data from JSON in Browser
var http=require("http");
var fs=require("fs");
const PORT=8089;

http.createServer((req,res)=>{
    fs.readFile("./STDNT.json","utf-8",(err,data)=>{
        if(err){
            res.write(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });
}).listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
});
//run program in terminal, then open http://localhost:8089 in browser