//..............Include Express..................................//
const express = require('express');
const ejs = require('ejs');
const methodOverride = require('method-override');
//..............Create an Express server object..................//
const app = express();

let server = require('http').Server(app);
let io = require('socket.io')(server);
//..............Apply Express middleware to the server object....//
app.use(express.json()); 
//Used to parse JSON bodies (needed for POST requests)
app.use(express.urlencoded());

app.use(methodOverride('_method'));//middleware for CRUD:UPDATE and DELETE

app.use(express.static('public')); //specify location of static 
app.set('views', __dirname + '/views'); //specify location of templates
app.set('view engine', 'ejs'); //specify templating library
app.use(require('./controllers/auth'));
app.use(require('./controllers/index'));
app.use(require('./controllers/consumer_controller'));
app.use(require('./controllers/admin_controller'));
app.use(require('./controllers/staff_controller'));
app.use(require('./controllers/index'));


let socketapi = require('./controllers/socketConnections');socketapi.io.attach(server);//attach sockets to the server

app.use("", function (request, response) {
  response.redirect('/error?code=400');});
//..............Start the server...............................//
const port = process.env.PORT || 3000;
app.set('port', port); //let heroku pick the port if needed
server.listen(port, function () {
  console.log('Server started at http://localhost:' + port + '.')
});