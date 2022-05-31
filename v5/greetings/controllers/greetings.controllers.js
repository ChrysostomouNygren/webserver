// import av models
const greetingModel = require("../models/greetings.models");

// CONTROLLERS
// Det här är självaste kugghjulen i servern

// GET
const greetingsGet = (req, res) => {
  res.send(greetingModel.greetings);
};

// POST
const greetingPost = (req, res) => {
  res.send(`${req.body.greetingModel} World`);
};

// GET /random
const greetingRandomGet = (req, res) => {
  res.send(greetingModel.getRandom())
}


// exports
module.exports = {
    greetingsGet,
    greetingPost,
    greetingRandomGet
}