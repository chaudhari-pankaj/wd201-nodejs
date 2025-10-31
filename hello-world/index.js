const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    const stream = fs.createReadStream("sample.txt");
    stream.pipe(res);
});

server.listen(3000);
// fs.writeFile("sample.txt",
//     "hey this is a sample file created using fs_module of nodejs",
//     (err) => {
//         if(err) throw err;
//         console.log("new file created");
//     }
// );
// fs.readFile("sample.txt",
//     (err,data) => {
//         if(err) throw err;
//         console.log(data.toString());
//     }
// );
// fs.rename("renamed.txt","sample.txt",
//     (err) => {
//         if(err) throw err;
//         console.log("file_renamed");
//     }
// );
// fs.unlink("sample.txt",
//     (err) => {
//         if(err) throw err;
//         console.log("file_deleted");
//     }
// )