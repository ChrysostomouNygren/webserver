const http = require("http");

const port = 3000;

// array med objekt av studenter.
const students = [
  { id: 1, name: "Oscar" },
  { id: 2, name: "Macke" },
  { id: 3, name: "Adam" },
];

const app = http.createServer((req, res) => {
  // console.loggar till terminalen vilken metod som används till vilken sökväg.
  console.log(`${req.method} till url: ${req.url}`);

  //   delar upp url-en till en array med strings där den delas vid varje /
  const items = req.url.split("/");

  if (items[1] === "students") {
    // GET
    // Hämtar alla studenter, genom /students
    if (req.method === "GET" && items.length === 2) {
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log("varför hämtar den denhär ist?");
      res.end(JSON.stringify(students));
    }
    // GET
    // Hämtar en student, genom /student/nr i arrayen.
    // Servern kraschar här, why?
    // I v2>kontaktlista>server.js så fungerar det prima, använd det exemplet istället.
    if (req.method === "GET" && items.length === 3) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      const studentIndex = parseInt(items[2]);
      console.log("hej baberiba");
      res.end(JSON.stringify(students[studentIndex]));
    }

    // POST
    // lägger till en ny student.
    if (req.method === "POST") {
      req.on("data", (chunk) => {
        console.log(chunk.toString());
        const data = chunk.toString();
        const newStudent = JSON.parse(data);

        students.push(newStudent);
      });

      res.statusCode = 201;
      res.end();
    }
  } else if (items[1] === "courses") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    // dessa är samma som res.writehead.

    // Haram. Vem vill egentligen skriva en frontend såhär? Usch.
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> webservrar & databaser</li>");
    res.write("<li>Javascript-ramverk</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
  // Om ngt är fel så skickas statuskod 404 (hittas ej) och anropet avslutas.
  else {
    res.statusCode = 404;
    res.end();
  }

  // Första argumentet är statuskod, andra vad för typ av content som det kommer att vara
  // exempelvis text/plain, application/json, text/html mm:
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  res.writeHead(200, { "Content-Type": "application/json" });

  // .end måste vara med för att kunna avsluta anropet.
  // det kan vara sträng, html, objekt osv..
  //   res.end(JSON.stringify({ message: "hello world" }));
});

app.listen(port, () => {
  console.log(`servern är LOBad i port ${port}`);
});
