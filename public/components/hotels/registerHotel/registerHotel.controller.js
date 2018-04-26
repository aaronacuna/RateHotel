(() => {
  'use strict'
  angular
    .module('rate_hotel')
    .controller('controllerRegisterHotel', controllerRegisterHotel);
    
    controllerRegisterHotel.$inject = ['$http','$state', '$stateParams', '$location', 'hotelsService', 'imageService'];

  function controllerRegisterHotel($http ,$state, $stateParams, $location, hotelsService, imageService) {
    let vm = this;

    vm.nuevoHotel = {};

 
    vm.registrarHotel = (pnuevoHotel) => {

      let objNuevoHotel = new Hotel(pnuevoHotel.nombre, pnuevoHotel.foto, pnuevoHotel.latitud, pnuevoHotel.longitud, pnuevoHotel.provincia, pnuevoHotel.canton, pnuevoHotel.distrito, pnuevoHotel.direccionExacta, pnuevoHotel.telefonoSC, pnuevoHotel.telefonoReservaciones, pnuevoHotel.correoSC, pnuevoHotel.correoReservaciones);

      let registro = hotelsService.addHotels(objNuevoHotel);

      swal("Registro exitoso", "El Hotel ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/dashboard');

    }


  }

})();