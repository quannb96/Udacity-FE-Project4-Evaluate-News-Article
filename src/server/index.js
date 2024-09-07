var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'))
app.use(express.json())

console.log(__dirname);

const axios = require("axios")
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1"
const API_KEY = process.env.API_KEY

// Variables for url and api key
app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
});

// POST Route
// app.post('/analyse', analyse)
app.post("/", async (req, res) => {
  // const { body: { url } } = req;
  const url = req.body.url;
  const response = await axios.get(`${meaningCloud}?key=${API_KEY}&url=${url}&lang=en`);
  const result = response.data;
  res.send(result);
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('App listening on port 8000!');
});


