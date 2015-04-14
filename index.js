// var http = require('http');

// var Router = require("routes-router");
// var router = Router(); 

// var st = require('st');

// // index.html can be handled in the same route!
// router.addRoute("/*", st({
//   path: __dirname + "/public",
//   // The 'index' property maps the route '/' onto '/public/index.html'
//   index:'/index.html'
// }));


// var server = http.createServer(router);
// var port = process.argv[2] || 5000;
// console.log('server listening on port # '+port);
// server.listen(port);

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
