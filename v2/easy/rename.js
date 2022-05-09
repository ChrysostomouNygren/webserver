// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week2/lecture4/exercises/easy/rename.md


// För att kunna se vad som händer i den här filen öppnar jag terminalen, letar mig rätt till mappen där den här filen ligger i och kör kommandot:
// node delete.js

const fs = require("fs");
// åter igen en import av file system.

fs.rename("text.txt",
// första argumentet är den berörda filen som ska döpas om.
"text1.txt", 
// andra argumentet är vad det nya namnet ska vara.
(err) => {
  if (err) throw err;
  console.log("filnamnet bytt");
    // Samma callback som vanligt, kastar ett fel ifall fel uppstår, annars en console.log om att filen har bytt namn.
});
