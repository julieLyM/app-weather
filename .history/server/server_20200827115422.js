const express = require("express");
const cors = require("cors");
const app = express();

const cityRouter = require("./routes.js");

app.use(cors());

app.get("/", (req, res) => {
  res.send("test");
});
app.use("/cities", cityRouter);


app.listen(process.env.PORT || 4242, console.log(`j'ecoute le port 4242`));
