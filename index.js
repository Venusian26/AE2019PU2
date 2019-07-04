var mongoose = require ('mongoose');
//importando controlador de clientes
const clienteController = require("./controllers/clientes.controller");

mongoose.connect('mongodb://localhost:27017/AE2019PU2', { useNewUrlParser: true },function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });

var cliente = {
    RFC:'VECJ880326XXX',
    nombre:'Juan Figueroa',
    domicilio:{
        ciudad:'Tepic',
        pais:'Mexico',
        cp:'12331',
        numero:'23'
    },
    telefono:'328219398',
    email:'jurafigueroa@ittepic.edu.mx'
}

var clienteB = {
    RFC:'VECJ880326XXX'
}

 clienteController.register(cliente);
 clienteController.buscarCliente(clienteB);
 clienteController.consultarClientes();