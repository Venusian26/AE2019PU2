var mongoose = require("mongoose");

productSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        length: 16
    },
    pcompra:{
        type: Number,
        required: true 
    },
    pventa: {
        type: Number,
        required: true
    },
    marca:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Marca',
        required: true,
    },
    cantidad: {
        type: Number,
        required: true
    },
    minimo:{
        type: Number,
        required: true
    },
    maximo:{
        type: Number,
        required: true
    }
});

module.exports = productSchema;