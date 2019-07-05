//importat mongoose
var mongoose = require('mongoose');
//importando schema
var schema = require("../models/marcas.model");

var Marca = mongoose.model('Marca', schema, 'marcas');

async function crearMarca(marca){
    var marcaCreada =  await Marca.create(marca)
     .then((data)=>{
        return data;
     }).catch((error)=>{
        console.log(error);
     })
     return marcaCreada;
 }

 //consulta general
async function consultarMarcas(){
    await Cliente.find({},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs); 
    })
}

async function buscarMarca(id){ 
    await Cliente.find({"_id":id},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs);
    })
}

async function deleteMarca(id){
    await Cliente.findByIdAndRemove({"_id":id},function(error,docs){
        if(error){
            console.log(error);
        }
        else{
            console.log("Marca eliminada");
        }
        })
}


 //Exportando las funciones
module.exports.crearMarca = crearMarca;
module.exports.buscarMarca = buscarMarca;
module.exports.consultarMarcas = consultarMarcas;
module.exports.deleteMarca = deleteMarca;