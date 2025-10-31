const fs = require("fs");
const http = require("http");

let js = "";
fs.readFile("promise_asynawait.js",(err,data) => {
    if(err) throw err;
    console.log("read the js file");
    js = data;
});

let server = http.createServer((request,response) => {
    response.writeHeader(200,{"Content-type":"text/javascript"});
    response.write(js);
    response.end();
});

server.listen(3000);