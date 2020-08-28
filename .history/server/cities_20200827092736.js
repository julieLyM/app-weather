const express = require("express");
const router = express.Router();
const axios = require("axios");
const api_key = require("./auth");
const url = "http://api.openweathermap.org/data/2.5/";

router.get("/", async function(req, res) {
  const { data } = await axios.get(
    `${url}weather?&appid=${api_key}&units=metric`,
    {
      params: {
        q: req.query.q
      }
    }
  );
  res.send(data);
});

module.exports = router;
