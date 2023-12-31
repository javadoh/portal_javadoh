var mongoose = require('mongoose'), 
Schema = mongoose.Schema;
//,autoIncrement = require('mongoose-auto-increment');//FUNCIONANDO OK

mongoose.set('debug', true);

var ContactData = new Schema({ 
  id: Number, 
  name: String,
  email: String, 
  message: String, 
  selecciones: String, 
  fecha: String, 
  hora: String 
});

console.log("Está en el model");
//ContactData.plugin(autoIncrement, {collection: 'webmsg_counter', field: 'id'});//FUNCIONA EXCELENTE
var ContactData = mongoose.model('ContactData', ContactData, 'webmsg');
module.exports = ContactData;
