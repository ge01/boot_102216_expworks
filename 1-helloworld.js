// Import the express.js library
// which we'll install "locally" later
var express = require('express');
// create an express app by instatiating
var app = express();
// create a first route
app.get('/home', function(req, res) {
  res.end('Hello World!');
});
app.listen(process.argv[2] || 3000);
