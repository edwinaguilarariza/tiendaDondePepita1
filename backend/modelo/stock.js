let mongoose = require("mongoose");
// metodo que permite crear esquemas desde node/express
let Schema = mongoose.Schema;

// Se crea el esquema
let stockSchema = Schema({
  cantidad: String,
  idProducto: { type: Schema.ObjectId, ref: "producto" },
});

// Se exporta el modulo
module.exports = mongoose.model("stock", stockSchema);
