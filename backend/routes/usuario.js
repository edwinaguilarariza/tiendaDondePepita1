 let express = require("express");
//importamos el controlador de usuario
let Usuario = require("../controllers/usuario");
//creamos la api
let api = express.Router();




api.post("/usuario/registrarUsuario", Usuario.registrarUsuario);
api.post("/login", Usuario.login);

module.exports = api;  