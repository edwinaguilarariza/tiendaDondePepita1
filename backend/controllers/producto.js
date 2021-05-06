let Producto = require("../modelo/producto");
let fs = require("fs");
let path = require("path");
let moment = require("moment");

const registrarProducto = (req, res) => {
    //obtenemos los datos del json
    let params = req.body;
    //creamos nueva instacia de categoria
    let producto = new Producto();

    if (params.nombre &&
        params.descripcion &&
        params.precio 
    ) {
        let imagenPath = req.files.imagen.path;
        let nameImg = moment().unix();
        let rutaServer = "./uploads/imgproducto/" + nameImg + path.extname(imagenPath);
        fs.createReadStream(imagenPath).pipe(fs.createWriteStream(rutaServer));
        let dbImg = nameImg + path.extname(imagenPath);
    
        producto.nombre = params.nombre;
        producto.descripcion = params.descripcion;
        producto.precio = params.precio;
        producto.imagen = dbImg;
        
        producto.save((err, datosProducto) => {
            //si llega un error desde el servidor de mongo
            if (err) {//porque solo es true
                res.status(500).send({mensaje: "error al conectar al servidor"});
            } else {
                if (datosProducto) {
                    res.status(200).send({producto: datosProducto});
                } else {
                    res.status(401).send({mensaje: "no se puedo registrar la producto"})
                }
            }
        });
        
    } else {
        res.status(401).send({mensaje: "faltan algunos de los datos"})
    }
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