// För att starta servern letar du rätt på mappen som denna fil ligger i, i konsollen.
// (webserverprogrammering/v2/server)
// kör då bara node index.js



// importerar http
// dess dokumentation hittar du här:
// https://nodejs.org/docs/latest-v16.x/api/http.html
const http = require("http");


// här bestämmer vi vilken "port" vi ska använda.
// det är siffran som hamnar efter localhost: i webläsaren.
const port = process.env.PORT || 2000;

const server = http.createServer((req, res) => 
// här skapar vi den faktiska servern. Vi använder oss inte av request, men responsen är det som vi skickar in till servern.
{
  res.statusCode = 200;
//   Statuskod 200, dvs allt är okej!

  res.setHeader("Content-Type", "text/html");
//   Header-informationen, content-type dvs det innehåller content. Vi specifierar det som text/html.

  res.end("<h1>HILLO WoRLD</h1>");
});
// Avslutningsvis, innehållet i servern.



// Här lyssnar vi efter att porten ska aktiveras, vilket vi gör i terminalen, när den startas igång så ser vi det genom console-loggen i callbackfunktionen som berättar för oss vilken port servern sprang in i.
server.listen(port, () => {
  console.log(`Servern springer in i port ${port}`);
});
