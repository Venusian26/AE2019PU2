//importat mongoose
var mongoose = require('mongoose');
//importando schema
var schema = require("../models/products.model");

var Producto = mongoose.model('Producto', schema, 'productos');
var marcacontroler = require('./marcas.controller');

async function crearProducto(producto){
    var marca= { marca: "Kellogs"};
    var marcacreada = marcacontroler.crearMarca(marca);
    producto["marca"]= marcacreada._id;
    var productocreado =  await Producto.create(producto)
     .then((data)=>{
       
     }).catch((error)=>{
        
     })
     return productocreado;
 }

 async function consultaProductos(){
    await Producto.find({},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs); 
    })
}

async function buscarProducto(id){ 
    await Producto.find({"_id":id},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs);
    })
}

async function actualizarProducto(id,producto){
    await Producto.findByIdAndUpdate(id,{producto},function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log('producto actualizado');
        console.log(docs);
        console.log("OPERACION TERMINADA");
        
    })};

    async function eliminarproducto(id){
        await Producto.findByIdAndRemove(id).then((docs)=>{
            console.log('producto eliminado');
            console.log(docs);
            console.log("OPERACION TERMINADA");
        }).catch((err)=>{
            console.log("ERROR :"+"\n"+err);
            process.exit(1);
        })
    }


function comprobarstock(id){
    Producto.find({"_id":id})
    .then((data)=>{
       var stock = data["cantidad"]
       var minimo = data["minimo"]
       var maximo = data["maximo"]
       var resta= maximo-stock
       if(stock < minimo){
           console.log("Tienes menos del minimo compra "+resta+" para tener el maximo");
       }
    }).catch((error)=>{
       console.log("No se encontro el producto solicitado");
    })
}

 module.exports.crearProducto = crearProducto;
 module.exports.comprobarstock = comprobarstock;
 module.exports.consultaProductos = consultaProductos;
 module.exports.buscarProducto = buscarProducto;
 module.exports.actualizarProducto = actualizarProducto;
 module.exports.eliminarproducto = eliminarproducto;