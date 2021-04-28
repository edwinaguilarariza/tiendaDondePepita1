let express = require("express");
let bodyParser =  require("body-parser"); 
let mongoose = require("mongoose");

//puerto
let port = process.env.port || 3001; 

//variable de la aplicacion
let app = express();


//llamamos las rutas de la s apis

let Usuario = require("./routes/usuario");
let Producto = require("./routes/producto");
let Stock = require("./routes/stock");

//conexion a DB
mongoose.connect("mongodb://localhost:27017/tiendaDonaPepitadb", {useUnifiedTopology: true, useNewUrlParser: true},(err,res) => { 

    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log("servidor DB: ON"); 
        app.listen(port,function () {
            
            console.log("Servidor BACKEND funcionando en el puerto :" + port);
        })
    }
}); 

//analizar las urls
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//usar rutas de la api
app.use("/api",Usuario);
app.use("/api",Producto);
app.use("/api",Stock);

//modulo para importar
module.exports = app;