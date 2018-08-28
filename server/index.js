const express = require('express');
var bodyParser = require("body-parser");
let app = express();
var path = require("path");

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});


let port = 3000;

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});