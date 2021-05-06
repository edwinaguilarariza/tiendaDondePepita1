// importamos modulo mongoose
let mongoose = require("mongoose"); 

let Schema = mongoose.Schema;



let usuarioSchema = Schema({ 
    nombres: String,
    apellidos: String,
    edad: Number,
    correo: String,
    pass: String,
    rol: String,
    fechaRegistro: {type: Date, default: Date.now}
    
});
//exportaqmos el modelo usuario 
module.exports = mongoose.model("usuario", usuarioSchema);