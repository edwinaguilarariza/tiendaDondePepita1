let express = require("express");

let Producto = require("../controllers/producto");


let api = express.Router();

api.post("/producto/registrarProducto", Producto.registrarProducto);//registrar porducto
api.get("/producto/:id", Producto.buscarProducto);//buscar por id
api.get("/producto/:nombre?", Producto.listaProducto);//listar
api.post("/producto/:nombre?", Producto.listaProducto);
api.put("/producto/editarProducto/:id", Producto.editarProducto);
api.delete("/producto/eliminarProducto/:id", Producto.eliminarProducto);





module.exports = api;