//Importar modulo de mongose
var mongoose = require('mongoose');


//Esquema clientes
clienteSchema = new mongoose.Schema({
RFC:{
    type:String,
    required:true,
   // match:/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/g
},
nombre:{
    type:String,
    required:true
},
domicilio:[{
    ciudad:{
        type:String,
        required:true
    },
    pais:{
        type:String,
        required:true
    },
    cp:{
        type:String,
        required:true
    },
    numero:{
        type:String,
        required:true,
       
    }
}],
telefono:{
    type:String,
    required:true,
    length:10,
   // match:/^([0-9]{5})+((-{1})*)+([0-9]{6})/g
},
email:{
    type:String,
    required:true,
    match:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/g

}});

module.exports = clienteSchema;