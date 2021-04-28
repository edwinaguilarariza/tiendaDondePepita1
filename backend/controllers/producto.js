let Producto = require("../modelo/producto");

const registrarProducto = (req, res) => {
    //obtenemos los datos del json
    let params = req.body;
    //creamos nueva instacia de categoria
    let producto = new Producto();
    //guardamos los datos del req en la coleccion
    producto.nombre = params.nombre;
    producto.descripcion = params.descripcion;
    producto.precio = params.precio;
    //save guardamos la info en mongo db
    producto.save((err, saveProducto) => {
        //si llega un error desde el servidor de mongo
        if (err) {//porque solo es true
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
            if (saveProducto) {
                res.status(200).send({producto: saveProducto});
            } else {
                res.status(401).send({mensaje: "no se puedo registrar la producto"})
            }
        }
    });
  };
  
  const buscarProducto = (req, res) => {
    //obtenemos el id de la categoria
    let id = req.params["id"];
    //buscamos la categoria por el id
    Producto.findById({_id:id}, (err, datosProducto) => {
        //si hay error al conectar momgo
        if (err) {
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
           if (datosProducto) {
            res.status(200).send({producto: datosProducto});
           } else {
            res.status(401).send({mensaje: "el producto no existe"});
           } 
        }
    });
};

const listaProducto = (req, res) => {
    //si tenemos filtro nombre lo guardamos
    let nombre = req.params["nombre"];
      //let params = req.body;

    //busqueda de las categorias
    Producto.find({nombre : new RegExp(nombre, "i")},(err, datosProducto) => {
        //si hay error al conectar momgo
        if (err) {
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
           if (datosProducto) {
            res.status(200).send({producto: datosProducto});
           } else {
            res.status(401).send({mensaje: "No hay productos"});
           } 
        }
    });
};

const editarProducto = (req, res) => {
    //obtenemos el id de la categoria
    let id = req.params["id"];
    //obrtenemos los datos que llegan de la api
    let params = req.body;
    //buscar la categoria por id y editarla 
    Producto.findByIdAndUpdate({ _id: id }, {nombre: params.nombre, descripcion: params.descripcion, precio: params.precio}, (err, datosProducto) => {
        if (err) {
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
           if (datosProducto) {
            res.status(200).send({producto: datosProducto});
           } else {
            res.status(401).send({mensaje: "el producto no se pudo editar"});
           } 
        }
    });
};


const eliminarProducto = (req, res) => {
    //obtener el id de la categoria
    let id = req.params["id"];
    //eliminamos la categoria por el id
    Producto.findByIdAndDelete({ _id: id },  (err, datosProducto) => {
        if (err) {
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
           if (datosProducto) {
            res.status(200).send({producto: datosProducto});
           } else {
            res.status(401).send({mensaje: "el producto no se pudo eliminar"});
           } 
        }
    });
};



  module.exports = {
    registrarProducto,
    buscarProducto,
    listaProducto,
    editarProducto,
    eliminarProducto,
  }