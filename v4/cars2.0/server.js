// Import av paketet express.
const express = require("express");
// Import av paketet body-parser, som egentligen är helt onödigt då det numera finns i express.
const bodyParser = require("body-parser");
// Import av paketet uuid, som skapar unika id:n
const uuid = require("uuid");

const app = express();

// detta är vårt owners-objekt
let owners = [];
/**
 * {
 *  id: string,
 *  name: string,
 *  age: number,
 *  email: string,
 *  license: boolean
 * }
 */

// detta är vårt cars-objekt
let cars = [];
/**
 * {
 *  id: string,
 *  maker: string,
 *  model: string,
 *  reg: string,
 *  mileage: number,
 *  year: number,
 *  combi: boolean
 * }
 */

// detta är vårt relations-objekt
const relations = [];
/**
 * {
 * carId: string,
 * ownerId: string
 * }
 */

// middlewares
app.use(bodyParser.json());

// POST /relations
// Kombinerar relationen mellan bilen och ägaren.
app.post("/relations", (req, res) => {
  relations.push({
    carId: req.body.carId,
    ownerId: req.body.ownerId,
  });
  res.json(relations);
});

// Router för owners
// Router är inbyggt i express.
const ownersRouter = express.Router();

// GET /owners
ownersRouter.get("/owners", (req, res) => {
  res.json(owners);
});
// GET /owners/:id
ownersRouter.get("/owners/:id", (req, res) => {
  const foundOwner = owners.find((owner) => owner.id === req.params.id);

  // 1. filtrerar ut de relevanta relationerna
  const foundRelations = relations.filter(
    (rel) => rel.ownerId === req.params.id
  );
  //   2. På de relationerna vi fått fram så behöver vi hitta respektive bil per id
  const foundCars = foundRelations.map((rel) => {
    const foundCar = cars.find((car) => car.id === rel.carId);
    return foundCar;
  });

  res.json({
    owner: foundOwner,
    cars: foundCars,
  });
});
// POST /owners
ownersRouter.post("/owners", (req, res) => {
  owners.push({
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    license: req.body.license,
  });

  res.json(owners);
});

// DELETE /owners/:id
ownersRouter.delete("/owners/:id", (req, res) => {
  owners = owners.filter((owner) => owner.id !== req.params.id);
  res.json(owners);
});

// Router för cars
const carsRouter = express.Router();

// GET /cars
carsRouter.get("/cars", (req, res) => {
  res.json(cars);
});
// GET /cars/:id
carsRouter.get("/cars/:id", (req, res) => {
  const foundCar = cars.find((car) => car.id === req.params.id);

  res.json(foundCar);
});
// POST /cars
carsRouter.post("/cars", (req, res) => {
  cars.push({
    id: uuid.v4(),
    maker: req.body.maker,
    model: req.body.model,
    reg: req.body.reg,
    mileage: req.body.mileage,
    year: req.body.year,
    combi: req.body.combi,
  });

  res.json(cars);
});
// DELETE /cars/:id
carsRouter.delete("/cars/:id", (req, res) => {
  cars = cars.filter((car) => car.id !== req.params.id);
  res.json(cars);
});

app.use(ownersRouter);
app.use(carsRouter);

app.listen(4000, () => {
  console.log("servern hänger i port 4000 bruh");
});
