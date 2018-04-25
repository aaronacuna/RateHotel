(() => {
  'use strict';
  angular
    .module('rate_hotel')
    .controller('controllerUpdateHotel', controllerUpdateHotel);

    controllerUpdateHotel.$inject = ['$stateParams', '$state', '$location', 'hotelsService'];

  function controllerUpdateHotel($stateParams, $state, $location, hotelsService) {
    
    
    let vm = this;

    vm.regresar = () => {
    $state.go('listHotel');
    }

    vm.editarHoteles = {};

    vm.objNuevoHotel = {};

    let objHotelAEditar = JSON.parse($stateParams.objHotelTemp);
    console.log(objHotelAEditar);

    let objNuevoHotel = new Hotel(objHotelAEditar.nombre, objHotelAEditar.latitud, objHotelAEditar.longitud, objHotelAEditar.provincia, objHotelAEditar.canton, objHotelAEditar.distrito, objHotelAEditar.correo, objHotelAEditar.direccionExacta, objHotelAEditar.telefonoSC, objHotelAEditar.telefonoReservaciones,objHotelAEditar.correoSC, objHotelAEditar.correoReservaciones);


    vm.editarHoteles.nombre = objNuevoHotel.nombre;
    vm.editarHoteles.latitud = objNuevoHotel.latitud;
    vm.editarHoteles.longitud = objNuevoHotel.longitud;
    vm.editarHoteles.provincia = objNuevoHotel.provincia;
    vm.editarHoteles.canton = objNuevoHotel.canton;
    vm.editarHoteles.distrito = objNuevoHotel.distrito;
    vm.editarHoteles.correo = objNuevoHotel.correo;
    vm.editarHoteles.direccionExacta = objNuevoHotel.direccionExacta;
    vm.editarHoteles.telefonoSC = objNuevoHotel.telefonoSC;
    vm.editarHoteles.telefonoReservaciones = objNuevoHotel.telefonoReservaciones;
    vm.editarHoteles.correoSC = objNuevoHotel.correoSC;
    vm.editarHoteles.correoReservaciones = objNuevoHotel.correoReservaciones;


    vm.editHoteles = (pHotel) => {
      let listaHoteles = hotelsService.getHotels();

      listaHoteles.forEach(objHotel => {
        if (objHotel.nombre == objNuevoHotel.nombre) {
          objHotel.nombre = pHotel.nombre;
          objHotel.latitud = pHotel.latitud;
          objHotel.longitud = pHotel.longitud;
          objHotel.provincia = pHotel.provincia;
          objHotel.canton = pHotel.canton;
          objHotel.distrito = pHotel.distrito;
          objHotel.direccionExacta = pHotel.direccionExacta;
          objHotel.telefonoSC = pHotel.telefonoSC;
          objHotel.telefonoReservaciones = pHotel.telefonoReservaciones;
          objHotel.correoSC = pHotel.correoSC;
          objHotel.correoReservaciones = pHotel.correoReservaciones;

          hotelsService.updateHotels(objHotel);

        }
      });
      swal("Edición exitosa", "Usuario editado correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('listClient');
    }
  }

})();