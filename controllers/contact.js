console.log('##### LLEGO A CONTROLLER PORTAL PITUTOS #####');

var mongoose = require('mongoose'),
ContactData = mongoose.model('ContactData');

var ContactData = require('.././models/contact');

var db = mongoose.connection;

mongoose.set('debug', true);


exports.findAll = async function(req, res){
  console.log('##### FIND ALL #####');
  const findAllMsg = await ContactData.find({},'id name email message').catch((error) => {
    console.log(error);
	return res.send(error);
  });
  
  console.log(findAllMsg);
  return res.send(findAllMsg);
};

//FUNCION DE ENCONTRAR MENSAJES POR ID DESDE LA WEB
exports.findMessage = function(req, res) {

  console.log('##### FIND BY ID #####');
 var id = req.params.id;
  ContactData.findOne({'id':id},'id name email message',function(err, result) {
  
  if (err) {throw err;
    console.log(err);}
    return res.send(result);
  });
};


//FUNCION DE ACTUALIZAR DATOS DE MENSAJES DE LA WEB PORTAL
exports.update = function(req, res) {
var id = req.params.id;
  var updates = req.body;

  ContactData.update({"id":id}, req.body, function (err, numberAffected) {
      if (err) {
		console.log(err);
		return res.send(err);
	  }
		  
      console.log('Updated %d message', numberAffected);
      return res.send(202);
  });
};


//FUNCION DE AGREGAR MENSAJE DE LA WEB A MONGO
exports.add = async function (req, res){
  console.log("##### ENTRO EN ADD MESSAGE");
  res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

  console.log("REQUEST BODY: "+req.body);
	const addMessage = await ContactData.create(req.body).catch((error) => {
		var message;

		console.log(error);
      // Some other error
      return res.status(500).send('No se pudo ingresar el mensaje. Lo sentimos.');
  });
    console.log(addMessage);
    return res.send(202);
};

//FUNCION DE ELIMINAR MENSAJES POR _ID
exports.delete = function(req, res) {
var id = req.params.id;
  UserTest.remove({'id':id},function(result) {
    return res.send(result);
  });
};