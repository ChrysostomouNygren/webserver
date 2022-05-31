// import av res. Vet inte riktigt när den importerades in, används liksom inte?
const res = require("express/lib/response");

// MODELS

// De olika hälsningsfraserna:
const greetings = [
  "Hello",
  "Greetings",
  "Goodday",
  "How do you do",
  "Long time, no see",
  "Howdy",
];

// Randomize hälsningsfraser:
function getRandom() {
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  return randomGreeting;
}

// exports
module.exports = {
  greetings,
  getRandom,
};
