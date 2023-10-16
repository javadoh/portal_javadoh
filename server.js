var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://127.0.0.1/portal_pitutos';
mongoose.connect(mongoUri);
var db = mongoose.connection;

var cors = require('cors')

db.on('error', function (error) {
  console.log('Error: '+error);
  throw new Error('unable to connect to database at ' + mongoUri);
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to portal_pitutos database');
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination to the database portal_pitutos'); 
    process.exit(0); 
  }); 
});

var app = express();

try{
  app.use(cors());
  app.use(express.bodyParser());
//OBTENEMOS LOS MODELOS DE BD
require('./models/contact');

require('./routes/routes')(app);

//app.listen(app.get('port'), '0.0.0.0');
app.listen(8400);
console.log('Listening on port 8400...');

}catch(err){console.log('An error has happen:',err);}

//LO DE ANTES
//var socketServer = require('./socketServer');
//socketServer.init(80, 9000);