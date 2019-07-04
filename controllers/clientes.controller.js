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
    console.log('-------CONSULTA POR PARAMETRO---------');
    console.log(docs);
    console.log("OPERACION TERMINADA");
    
   
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
    console.log('-------CONSULTA GENERAL---------');
    console.log(docs);
    console.log("OPERACION TERMINADA");
    
})};
module.exports.consultarClientes = consultarClientes;

async function actualizarCliente(id,cliente){
    await Cliente.findByIdAndUpdate(id,{cliente},function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log('-------REGISTRO ACTUALIZADO---------');
        console.log(docs);
        console.log("OPERACION TERMINADA");
        
    })};

module.exports.actualizarCliente = actualizarCliente;

async function deleteCliente(id){
    await Cliente.findByIdAndRemove(id).then((docs)=>{
        console.log('-------REGISTRO ELIMINADO CON EXITO---------');
        console.log(docs);
        console.log("OPERACION TERMINADA");
    }).catch((err)=>{
        console.log("ERROR :"+"\n"+err);
        process.exit(1);
    })
}

module.exports.deleteCliente = deleteCliente;