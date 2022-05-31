// import av paketet express.
const express = require("express");

// import av controllers
const controllers = require("../controllers/greetings.controllers");
// deklarering av router.
const greetingsRouter = express.Router();

// GET på /
greetingsRouter.get("/", controllers.greetingsGet);
//  GET på /random
greetingsRouter.get("/random", controllers.greetingRandomGet);
//  POST på /
greetingsRouter.post("/", controllers.greetingPost);

// exportering.
module.exports = greetingsRouter;
