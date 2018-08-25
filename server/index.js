const express = require('express');
var bodyParser = require("body-parser");
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.post('/', function (req, res) {
  res.send();

});


let port = 3000;

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});