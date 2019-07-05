var mongoose = require("mongoose");
module.exports = new mongoose.Schema({
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cliente"
    },
    fecha:{
        type:Date
    },
    productos:[{
        producto_id: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Producto"
        },
        cantidad:Number
        }],
    subTotal:{
        type: Number,
        required: true
    },
    iva:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
});