const HotelModel = require('./hotels.model');

module.exports.registrar = (req, res) => {
  var newHotel = new HotelModel({
    nombre              :  req.body.nombre,
    foto                :  req.body.foto,
    latitud             :  req.body.latitud,
    longitud            :  req.body.longitud,
    provincia           :  req.body.provincia,
    canton              :  req.body.canton,
    distrito            :  req.body.distrito,
    direccionExacta     :  req.body.direccionExacta,
    telefonoSC          :  req.body.telefonoSC,
    telefonoReservaciones   :  req.body.telefonoReservaciones,
    correoSC            :  req.body.correoSC,
    correoReservaciones :  req.body.correoReservaciones,
    estado              :  req.body.estado,
  });

  newHotel.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de hoteles' + err});
    }else{
      res.json({success:true, msj:'Se registró el hotel correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  HotelModel.find().then((hoteles) => {
    res.send(hoteles);
  });
};

module.exports.actualizar = (req,res) => {
  HotelModel.update({nombre: req.body.nombre}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};