// import av paketet express.
const express = require("express");
// import av paketet cors. (fan vad skönt att slippa CORS-helvetet)
const cors = require("cors");

// import av router.
const greetingsRouter = require("./routers/greetings.routers");

const app = express();

app.use(cors());
app.use(express.json());

app.use(greetingsRouter)

app.listen(4000, () => {
  console.log("Servern lyssnar på port 4000");
});
