/*URL module: has inbuilt functions to read URL
QueryString module: provides functions to read data from URL. querystring is used to send data in the URL of WebApp from clientside to serverside.
Syntax for sending single variable: url?variable_name=value
Syntax for sending single variable: url?variable_name=value&variable_name=value&variable_name=value&...
*/
var http=require("http");
var url=require("url");
var qs=require("querystring");
const PORT=5689;

http.createServer((req,res)=>{
    var udata=url.parse(req.url);
    var qdata=qs.parse(udata.query);
    console.log("Data received from client: "+qdata.sname);
    res.write("Welcome. This is a HTTP, URL, & QueryString demo application.");
    res.end();
}).listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
});
//run program in terminal with node, then open http://localhost:5689/?sname=XYZ in a browser to see