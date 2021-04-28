let Stock = require("../modelo/stock");


const registrarStock = (req, res) => {
    //obtrenemos datos del json
    let params = req.body;
    //instanciamos el curso modelo
    let stock = new Stock();
    //registramos producto osea curso
    //validamos los campos antes de registrar
    if (
      params.nombre &&
      params.descripcion &&
      params.cantidad
    ) {
      //lleamos el modelo con lls datos del req
      stock.nombre = params.nombre;
      stock.descripcion = params.descripcion;
      stock.cantidad = params.cantidad;
      
      //registramos el curso
      stock.save((err, datosStock) => {
        if (err) {
          //porque solo es true
          res.status(500).send({ mensaje: "error al conectar al servidor" });
        } else {
          if (datosStock) {
            res.status(200).send({ stock: datosStock });
          } else {
            res.status(401).send({ mensaje: "no se puedo registrar el stock" });
          }
        }
      });
    } else {
      res.status(401).send({ mensaje: "falto algunos de los datos" });
    }
  };
  
module.exports = {
    registrarStock, 
};









