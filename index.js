var mongoose = require ('mongoose');
//importando controlador de clientes,products,marcas,ventas
const clienteController = require("./controllers/clientes.controller");
const productoController = require("./controllers/products.controller");
const marcaController = require("./controllers/marcas.controller");
const ventaController = require("./controllers/ventas.controller");

mongoose.connect('mongodb://localhost:27017/AE2019PU2', { useNewUrlParser: true },function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });

 //----OPERACIONES DE CLIENTES----
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
 //clienteController.register(cliente);
 //clienteController.buscarCliente(clienteB);
 //clienteController.actualizarCliente(id,clienteU);
 //clienteController.deleteCliente(idDelete);
 //clienteController.consultarClientes();

  //----OPERACIONES DE CLIENTES----


  //----OPERACIONES DE PRODUCTOS----
  //insertar producto
  var producto = {
      codigo:"12334asdaas",
      pcompra:30,
      pventa:35,
      cantidad:40,
      minimo:30,
      maximo:50
  }

  //productoController.crearProducto(producto);

  //Consultar los productos
  //productoController.consultaProductos();

   //----OPERACIONES DE PRODUCTOS----

    //----OPERACIONES DE VENTAS----

    //registrar venta
    var venta = {
        cliente:"5d1edce7444d433b7c367c02",
        fecha:"2019-07-04",
        productos:[
            {
                producto_id:"5d1ee0997049d04dd8ba0a22",
                cantidad:4
            }
        ],
        subTotal:100,
        iva:16,
        total:116
    }

    //ventaController.registrarVenta(venta);

    //consultar ventas
    ventaController.consultarVentas();
