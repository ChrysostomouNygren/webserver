const http = require("http");

// Array med objekt.
let people = [
  {
    id: 1,
    name: "Kalle Karlsson",
    number: "044-123456",
  },
  {
    id: 2,
    name: "Kurt Kurtsson",
    number: "044-5323523",
  },
  {
    id: 3,
    name: "Yvonne Yvonnesdotter",
    number: "0709-230195",
  },
  {
    id: 4,
    name: "Gert",
    number: "080-642343",
  },
];

// Skapar servern.
const app = http.createServer((req, res) => {
  // Delar upp url:en vid varje /
  const items = req.url.split("/");

  //   GET /api/persons
  if (req.method === "GET" && items[2] === "persons" && items.length === 3) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(people));
  }

  // GET /info
  else if (req.method === "GET" && items[1] === "info") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write("<html>");
    res.write("<body>");
    res.write(`<p>Din kontaktlista innehåller ${people.length} kontakter.</p>`);
    res.write(`<p>${new Date().toString()}</p>`);
    res.write("</body>");
    res.write("</html>");
    console.log("info laddat");
    res.end();
  }

  //   GET /api/persons/[id]
  else if (
    req.method === "GET" &&
    items[2] === "persons" &&
    items.length === 4
  ) {
    const requestedId = parseInt(items[3]);
    const requestedPerson = people.find((person) => person.id === requestedId);
    // Hittas personen:
    if (requestedPerson) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(JSON.stringify(requestedPerson));
      console.log("person laddad");
    }
    // Annars:
    else {
      res.statusCode = 404;
      res.end();
    }
  }
  //   DELETE konsollen i webläsaren:
  // fetch("http://localhost:3000/api/persons/:id", { method: "DELETE" })
  else if (
    req.method === "DELETE" &&
    items[2] === "persons" &&
    items.length === 4
  ) {
    const requestedId = parseInt(items[3]);
    people = people.filter((person) => person.id !== requestedId);

    res.statusCode = 204;
    res.end();
  }
  //   POST konsollen i webläsaren:
  //   fetch("http://localhost:3000/api/persons", { method: "POST", body: JSON.stringify({name: "Phteven", number: "1337" }), headers: {"Content-Type": "applicaation/json"}})
  else if (req.method === "POST" && items[2] === "persons") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      console.log(data);
      people.push({
        //   skapar ett hyffsat unikt ID :)
        id: +(
          new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
        ),
        ...data, //<--- inte göra såhär egentligen :p
        // (det är inte speciellt säkert, men i det här lilla fjantprojektet fungerar det bra)
      });
    });
    res.end();
  }
  res.end();
});

app.listen(3000, () => {
  console.log("appen körs i port 3000");
});
