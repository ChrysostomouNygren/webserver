// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week1/lecture2/exercises/count.md

const process = require("process");
const count = process.argv.splice(2);


console.log(`this is a few words`);
count.forEach(element => console.log(`${element.length}`));
