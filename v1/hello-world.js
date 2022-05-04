// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week1/lecture1/exercises/myfirstnodeapp.md

const process = require("process");
// samma sak som: import process from "process";

console.log(process.argv);
// visar en array med sökvägen till node och till den här filen.
// i konsollen skriver vi node hello-world.js (dennas filnamn dvs) och sen lite agument så hamnar de argumenten efter sökvägarna i arrayn

// process.env visar miljön/enviroment på datorn. 


console.log('hello world');
// öppnar node i kommandotolken, om en skriver .help så får vi reda på vad en kan göra.
// i den här uppgiften så vill jag skriva en console.log i det här dokumentet, och inuti node så skriver jag då bara console.log('hello world')
// för att spara detta i den här filen så skriver jag bara .save hello-world.js, som den här filen heter, och vips, så ligger den kodsnippen här!
// för att öppna det här i node så skriver vi node hello-world.js, så kommer svaren från console.log
// öppnar jag ist på följande sätt node > .load hello-world.js så öppnas hela dokumentet med alla tusen anteckningar.
