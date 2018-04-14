var express = require('express');
var bodyParser = require('body-parser');
var info = require('../database-mongo');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));


// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.get('/', function (req, res) {
  res.send('index.html')
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

