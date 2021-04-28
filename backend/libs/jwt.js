
let jwt = require("jwt-simple"); 

let moment = require("moment");

let secret = "donatienda1234";

exports.createToken = function (usuario) {
    let payload = {
        _id: usuario._id, 
        nombres: usuario.mombres,
        apellidos: usuario.apellidos,
        edad: usuario.edad,
        correo: usuario.correo,
        iat:moment().unix(),
        
    } 
    return jwt.encode(payload, secret); 
}; 