
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
// var path = require('path');
// var morgan = require('morgan');
const cors = require('cors');
var fs = require('fs');
var port = process.env.PORT || 3200;
app.use(cors());
app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

var options = {
    key: fs.readFileSync('C:\\Users\\opc\\Documents\\certificate\\localhost.key'),
    cert: fs.readFileSync('C:\\Users\\opc\\Documents\\certificate\\localhost.crt')
  };

var routes = require('./routes/appRoute'); //importing route
routes(app);



process.on('uncaughtException', function(err) {
   
    console.log("Node NOT Exiting...",err);
});
// const server = app.listen(port, function() {
//     console.log('Server listening on port ' + port)
// });
// https.createServer(options, function(req, res){
//     // const server = app.listen(port, function() {
//     //     console.log('Server listening on port ' + port)
//     // });  
// }).listen(port, function() {
//     console.log('Server listening on port ' + port)
// });
https.createServer(options,app).listen(443);