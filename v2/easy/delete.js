// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week2/lecture4/exercises/easy/delete.md


// För att kunna se vad som händer i den här filen öppnar jag terminalen, letar mig rätt till mappen där den här filen ligger i och kör kommandot:
// node delete.js

const fs = require("fs");
// åter igen en import av file system.


// ******************** OBS *********************
// med unlink så tas filen bort PERMANENT. Den hamnar dvs inte i papperskorgen eller dylikt.
fs.unlink("text.txt",
// första argumentet är som tidigare vilken fil det är som showen handlar om. I detta, och så många andra fall är det text.txt idag.
(err) => {
  if (err) throw err;
  console.log("filen borttagen!");
  // Samma callback som vanligt, kastar ett fel ifall fel uppstår, annars en console.log om att filen är raderad.
});
