let express = require("express");

let Producto = require("../controllers/producto");

let multiparty = require("connect-multiparty");

let path = multiparty({cargas : "./uploads/imgproducto" });

let api = express.Router();

api.post("/producto/registrarProducto", path ,Producto.registrarProducto);//registrar porducto
api.get("/producto/:id", Producto.buscarProducto);//buscar por id
api.get("/producto/:nombre?", Producto.listaProducto);//listar
api.post("/producto/:nombre?", Producto.listaProducto);
api.put("/producto/editarProducto/:id", Producto.editarProducto);
api.delete("/producto/eliminarProducto/:id", Producto.eliminarProducto);





module.exports = api;