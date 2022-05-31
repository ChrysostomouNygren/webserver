// För att använda express så måste importera det.
// npm install express
// npm init -y
const express = require("express");

// Tilldelar variabeln app all kraft i express
const app = express();

// En tom array för cars.
const cars = [];

// Med den här slipper vi chunks och json.stringify
app.use("/cars", express.json());

// GET
app.get("/cars", (req, res) => {
  res.sendStatus("Hello Cars");
});

// POST
app.post("/cars", (req, res) => {
  // Om regnr saknas:
  if (!req.body.reg) {
    return res.status(400).json({ error: "regnr saknas" });
  }
  // Om regnr inte är exakt 6 symboler.
  if (req.body.reg.length !== 6) {
    return res.status(400).json({ error: "felaktigt regnr" });
  }

  // Pushar in ett objekt in i arrayen cars.
  cars.push({
    // Id:
    id: cars.length + 1,
    // Regnr som tas emot via req.body
    reg: req.body.reg,
    // Manufaktör, anges ingenting så blir det default SAAB
    maker: req.body.maker || "SAAB",
    // Model, anges ingenting så blir det default ...fem
    model: req.body.model || "...fem",
    // Ägare, anges ingenting så blir det default DEFAULT
    owner: req.body.owner || "DEFAULT",
  });
  // Avslutar med res.send
  res.send(cars);
});

// PUT
// /cars/:id
// Ändrar ett helt objekt.
app.put("/cars/:id", (req, res) => {
  // Ger bilarna ett index, så att dess id blir den relevanta siffran istället för numret i arrayen, då det räknas från 0.
  const carIndex = cars.findIndex((car) => car.id === parseInt(req.params.id));

  // Måste finnas en tillverkare.
  if (!req.body.maker) {
    return res
      .status(404)
      .json({ error: "Duuuu... den tillverkaren finns inte" });
  }

  // Måste finnas ett id.
  if (carIndex === -1) {
    return res
      .status(404)
      .json({ error: "finns ingen bil med det id't beetch" });
  }

  // Orginalinformationen finns i den här variabeln.
  const originalCar = cars[carIndex];

  // Här skrivs historien om, det enda som består är id:t.
  cars[carIndex] = {
    id: originalCar.id,
    reg: req.body.reg,
    maker: req.body.maker,
    model: req.body.model,
    owner: req.body.owner,
  };
  res.status(200).json(cars);
});


// PATCH
// /cars/:id
// Ändrar delar i ett objekt
app.patch("/cars/:id", (req, res) => {
    // Ger bilarna ett index, så att dess id blir den relevanta siffran istället för numret i arrayen, då det räknas från 0.
  const carIndex = cars.findIndex((car) => car.id === parseInt(req.params.id));

  // Det verkar vara ett vanligt problem med -1, så vi langar in en if-sats för säkerhets skull, så att användaren får reda på att det inte finns en bil med det id:t.
  if (carIndex === -1) {
    return res
      .status(404)
      .json({ error: "finns ingen bil med det id't beetch" });
  }

  //   uppdaterar regnr
  if (req.body.reg) {
    cars[carIndex].reg = req.body.reg;
  }
  //   uppdaterar ägare
  if (req.body.owner) {
    cars[carIndex].owner = req.body.owner;
  }
  res.json(cars);
});

app.listen(4000, () => {
  console.log("servern kör på port 4000");
});
