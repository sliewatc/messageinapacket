const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db  = mongoose.connect('mongodb://localhost:27017/myapp');


app.listen(port, () => console.log(`Listening on port ${port}`));