const fs = require("fs");
const http = require("http");
const minimist = require("minimist");

let content_home = "";
let content_project = "";
let content_registration = "";
let content_reg_script = "";

fs.readFile("reg_script.js", (err,reg_script) => {
    if(err) throw err;
    content_reg_script = reg_script;
});

fs.readFile("home.html", (err,home) => {
    if(err) throw err;
    content_home = home;
});
fs.readFile("project.html", (err,project) => {
    if(err) throw err;
    content_project = project;
});
fs.readFile("registration.html", (err,registration) => {
    if(err) throw err;
    content_registration = registration;
});

const args = minimist(process.argv.slice(2));

let port = parseInt(args.port);

let server = http.createServer((request, response) => {
    let url = request.url;
    switch(url) {
        case "/project.html" :
            response.writeHeader(200,{"Content-type" : "text/html"});
            response.write(content_project);
            response.end();
            break;
        case "/registration.html" :
            response.writeHeader(200,{"Content-type": "text/html"});
            response.write(content_registration);
            response.end();
            break;
        case "/reg_script.js" :
            response.writeHeader(200, {"Content-type":"text/javascript"});
            response.write(content_reg_script);
            response.end();
            break;
        default:
            response.writeHeader(200,{"Content-type": "text/html"});
            response.write(content_home);
            response.end();
            break;
    }
});
server.listen(port);

