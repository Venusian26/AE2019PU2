var mongoose = require ('mongoose');
//importando controlador de clientes
const clienteController = require("./controllers/clientes.controller");

mongoose.connect('mongodb://localhost:27017/AE2019PU2', { useNewUrlParser: true },function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });

 //Crear un nuevo cliente
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

//Buscar un cliente por RFC
var clienteB = {
    RFC:'VECJ880326XXX'
}
//Para actualizar un cliente
var clienteU = {
    RFC:'VECJ8803XXXXX',
    nombre:'Lucas',
    domicilio:{
        ciudad:'Tepic',
        pais:'Mexico',
        cp:'123qwwq',
        numero:'24'
    },
    telefono:'328212398',
    email:'jurafwroa@ittepic.edu.mx'
}
var id = '5d1b87762be5bc38885d46e0';

//para eliminar un cliente por ID
var idDelete = '5d1b87762be5bc38885d46e0';
 clienteController.register(cliente);
 //clienteController.buscarCliente(clienteB);
 //clienteController.actualizarCliente(id,clienteU);
 //clienteController.deleteCliente(idDelete);
 clienteController.consultarClientes();