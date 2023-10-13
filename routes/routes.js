module.exports = function(app){
	//CONTACTO WEB
    app.set('port', process.env.PORT || 8400);
    var contact = require('.././controllers/contact');
    app.get('/contact/getAll', contact.findAll);
    app.get('/contact/getMsg/', contact.findMessage);//RECIBE ID DE MSG
    app.post('/contact/newMessage', contact.add);
    app.put('/contact/updateUser/:id', contact.update);
    app.delete('/contact/deleteUser/:id', contact.delete);
}