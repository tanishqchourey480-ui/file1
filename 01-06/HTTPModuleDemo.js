var http=require("http");
const PORT=5688;//port should be 4digit & >5000, as <5000 is used for system processes
http.createServer((req,res)=>{
    res.write("Welcome. This is a server application.");
    res.end();
}).listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
});
//run program in terminal with node, then open http://localhost:5688 in a browser to see