const express = require('express');
const router = express.Router();
const axios = require('axios');
const api_key = require('./auth');
const url = 'http://api.openweathermap.org/data/2.5/
