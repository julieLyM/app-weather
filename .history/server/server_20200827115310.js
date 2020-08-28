const express = require("express");
const cors = require("cors");
const cityRouter = require("./cities.js");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("test");
});
app.use("/cities", cityRouter);


app.listen(process.env.PORT || 4242, console.log(`j'ecoute le port 4242`));
