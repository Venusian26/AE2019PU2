//importat mongoose
var mongoose = require('mongoose');
//importando schema
var schema = require("../models/clientes.model");


var Cliente = mongoose.model('Cliente', schema, 'clientes');

async function register(cliente){
   var clienteCreado =  await Cliente.create(cliente)
    .then((data)=>{
        console.log("------REGISTRANDO CLIENTE--------");
        console.log("Cliente registrado con exito");
        console.log("DETALLES:"+"\n"+data);
        
    }).catch((error)=>{
        console.log("ERROR cliente no registrado"+"\n");
        console.log(error)
    })
    return clienteCreado;
    
}


//Exportando la funcion para registrar clientes
module.exports.register = register;


async function buscarCliente(parametro){ 
    await Cliente.find(parametro,function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('-------Consulta parametro---------');
    console.log(docs);
    console.log("Operacion Terminada");
       
}
)};

module.exports.buscarCliente = buscarCliente;

//consulta general
async function consultarClientes(){
    await Cliente.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('-------Consulta general---------');
    console.log(docs);
    console.log("Operacion Terminada");
    
})};
module.exports.consultarClientes = consultarClientes;
//CREAR CONSULTA GENERAL
// UNA CONSULTA POR RFC O NOMBRE