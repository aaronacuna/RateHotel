
const mongoose = require('mongoose');

//Esquema de hoteles
var HotelSchema = new mongoose.Schema({
  nombre : {type : String, required : true, unique: true},
  foto : {type : String},
  latitud : {type : String, required : true},
  longitud : {type : String, required : true},
  provincia : {type : String},
  canton : {type : String},
  distrito : {type : String},
  direccionExacta : {type : String},
  telefonoSC : {type : String, required : true},
  telefonoReservaciones : {type : Date, required : true},
  correoSC : {type : String, required : true},
  correoReservaciones : {type : String, required : true},
  estado : {type : String, required : true},
});


module.exports = mongoose.model('Hotel', HotelSchema); 
