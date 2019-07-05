var mongoose = require("mongoose");
var schemaVentas = require("../models/ventas.models");

var Ventas = new mongoose.model("Ventas",schemaVentas,"ventas");

async function registrarVenta(objVenta){
    var ventaCreada =  await Ventas.create(objVenta)
    .then((data)=>{
        console.log("Venta registrada con exito");
        console.log("DETALLES:"+"\n"+data);
        
    }).catch((error)=>{
        console.log("ERROR venta no registrado"+"\n");
        console.log(error)
    })
    return ventaCreada;
}

 //consulta general
 async function consultarVentas(){
    await Ventas.find({},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs); 
    }).populate("cliente").populate("producto_id");
}

async function buscarVenta(id){ 
    await Ventas.find({"_id":id},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs);
    })
}

async function deleteVenta(id){
    await Cliente.findByIdAndRemove({"_id":id},function(error,docs){
        if(error){
            console.log(error);
        }
        else{
            console.log("Venta eliminada");
        }
        })
}

module.exports.registrarVenta = registrarVenta;
module.exports.consultarVentas = consultarVentas;
module.exports.buscarVenta = buscarVenta;
module.exports.deleteVenta = deleteVenta;
