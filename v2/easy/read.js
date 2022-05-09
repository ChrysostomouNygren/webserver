// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week2/lecture4/exercises/easy/read.md

// För att kunna se vad som händer i den här filen öppnar jag terminalen, letar mig rätt till mappen där den här filen ligger i och kör kommandot:
// node read.js


const fs = require("fs");
// importerar fs! Fs står för file system, och det använder vi typ till allt.!

fs.readFile("text.txt", "utf8", (error, data) => {
    // import av text-filen, utf8 för att konvertera till text och sen error + data är det vi använder i vår hatälskade callback.
  if (error) {
    console.log(`Fail: ${error.message}`);
    // console-loggar felmeddelandet. Om inte ngt går fel så hoppar den över det här steget.
    return;
  }
  console.log(data);
  // console-loggar vår data, dvs allting inne i vår text.txt-fil!
});
