const main = require('./public_html/scripts/push.js')
const later = require('later');
const path = require('path');  // Core package
const express = require('express');

const app = express()
// Express Middleware to load HTML files
app.use(express.static(path.join(__dirname, 'public_html')))


// Server Initialising
const port = 3001;
app.listen(port, function(){
    console.log('Server started on Port: ' + port);
})