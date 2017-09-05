// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const jsonData = require('./data.json')

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.use(express.static('/Users/bnutt/oca/startnow-web101-san-diego-top-spots'));

app.get('/data', function(req, res) {
    res.status(200).json(jsonData);
});


// finally export the express application
module.exports = app;
