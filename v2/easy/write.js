// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week2/lecture4/exercises/easy/write.md


// För att kunna se vad som händer i den här filen öppnar jag terminalen, letar mig rätt till mappen där den här filen ligger i och kör kommandot:
// node write.js

const fs = require("fs");
// åter igen en import av file system.



fs.writeFile("text.txt",
// först filen där vi vill att texten ska uppdateras.

"\nadded moar text yolo",
// Vad för text som ska uppdateras? Det kan också vara en variabel ist för fast text. Använder mig av \n för att det ska bli radbrytning.

{ flag: "a" }, 
// flag a, är för appending. Mer om alla flaggor:
// https://nodejs.org/api/fs.html#file-system-flags

(error) => {
  // callback igen.
  if (error) throw error;
  // kastar ett error och avslutar ifall det blir ett fel.
  console.log("filen har sparats!");
  // Om inte så console-loggar det att filen har sparats.
});
