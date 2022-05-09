// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week2/lecture4/exercises/medium/customers.md

// För att kunna se vad som händer i den här filen öppnar jag terminalen, letar mig rätt till mappen där den här filen ligger i och kör kommandot:
// node customers.js (namn) (ålder)




const fs = require("fs");
// åter igen en import av file system.

const inputData = {
  name: process.argv[2],
  age: process.argv[3],
};
// inputdatan tar vi emot via process.argv. Jag tar emot den som ett objekt.

fs.readFile(
  "customers.json",
  // jag vill läsa av innehållet i jsonfilen, och det börjar jag med här.
  (err, data) => {
    if (err) throw err;
    // kastar fel om fel uppkommer. the usual.

    const json = data;
    const parsedData = JSON.parse(json);
    // Eftersom att jsonfilen är en array med objekt så vill jag parsa den, så att den lättare ska kunna läsas i terminalen.
    console.log(parsedData);
    // Och här läser jag den i terminalen :p

    parsedData.customers.push(inputData);
    // pushar in datan som kommer i min input, eller ja i terminalen, in i parsedData.customers-variabeln.

    const stringData = JSON.stringify(parsedData, null, "\t");
    // Med stringData-variabeln så görs så att parsedDatan blir till en string.
    // Detta för att vi ska kunna stoppa in den i vår json-fil.
    //  null ersätter replacern, då vi inte vill att ngt ska ersättas och "\t" använder jag för radbrytning. Fungerar lika bra utan de två sista argumenten, men för en snyggare kod och lättare läsning så la jag till dessa. 
    // mer om detta här: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_space_argument

    fs.writeFile("customers.json",
    // filen jag vill skriva in i, i detta fallet är det customers.json.
    stringData, 
    // vad jag vill skriva in i filen, i detta fall infon som är i stringData-variabeln.
    (err) => {
      if (err) throw err;
      console.log("added customer");
      // Error kastas om error finns, annars en liten logg om att kund är tillagd.
    });
  }
);
