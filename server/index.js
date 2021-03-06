var express = require('express');
var bodyParser = require('body-parser');
var info = require('../database-mongo/index.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/info', function (req, res) {
  info.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/', function (req, res) {
  res.send('index.html')
});


app.post('/info',function(req,res){

info.save(req.body)
res.send()

})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

