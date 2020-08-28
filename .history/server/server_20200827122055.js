const express = require("express");
const cors = require("cors");
const app = express();

const cityRouter = require("./routes/cityRouter.js");

app.use(cors());


app.listen(process.env.PORT || 4242, console.log(`j'ecoute le port 4242`));
