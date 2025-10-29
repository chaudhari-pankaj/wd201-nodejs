// const readline = require("readline");

// const lineDetail = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// lineDetail.question(`please provide your name -`, (name) => {
//     console.log(`hi ${name}`);
//     lineDetail.close();
// });

// const args = process.argv
// const num1 = parseInt(args[2]);
// const num2 = parseInt(args[3]);

// console.log(num1 + num2);

const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const num1 = parseInt(args.num1);
const num2 = parseInt(args.num2);

console.log(num1 + num2);
