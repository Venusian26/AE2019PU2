var mongoose = require("mongoose");
var schemaVentas = require("./models/ventas.model");

var Ventas = new mongoose.model("Ventas",schemaVentas,"ventas");

function registrarVentas(objVenta){
    var venta = new Ventas({
        cliente:objVenta["cliente"],
        fecha:objVenta["fecha"],
        subTotal:objVenta["subTotal"],
        iva:objVenta["iva"]
    })
}