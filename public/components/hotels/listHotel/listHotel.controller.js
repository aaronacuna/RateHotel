(() => {
  'use strict'
  angular
    .module('rate_hotel')
    .controller('controllerListHotel', controllerListHotel);
    
    controllerListHotel.$inject = ['$state', '$stateParams', '$location', 'hotelsService'];

  function controllerListHotel($state, $stateParams, $location, hotelsService) {
    let vm = this;

    vm.listaHoteles = listarHoteles();
    
    vm.editHoteles = (pHotel) =>{
      $state.go('updateHotel', {objHotelTemp : JSON.stringify(pHotel)});

    };


    vm.eliminarHotel = (pnuevoHotel) => {
      
     
      let objNuevoHotel = new Hotel(pnuevoHotel.nombre, pnuevoHotel.foto, pnuevoHotel.latitud, pnuevoHotel.longitud, pnuevoHotel.provincia, pnuevoHotel.canton, pnuevoHotel.distrito, pnuevoHotel.direccionExacta, pnuevoHotel.telefonoSC, pnuevoHotel.telefonoReservaciones, pnuevoHotel.correoSC, pnuevoHotel.correoReservaciones);

      objNuevoHotel.cambiarEstado('inactivo');
      hotelsService.updateHotels(objNuevoHotel);
      location.reload();
    }

    vm.activarHotel = (pnuevoHotel) => {
      
     
      let objNuevoHotel = new Hotel(pnuevoHotel.nombre, pnuevoHotel.foto, pnuevoHotel.latitud, pnuevoHotel.longitud, pnuevoHotel.provincia, pnuevoHotel.canton, pnuevoHotel.distrito, pnuevoHotel.direccionExacta, pnuevoHotel.telefonoSC, pnuevoHotel.telefonoReservaciones, pnuevoHotel.correoSC, pnuevoHotel.correoReservaciones);

      objNuevoHotel.cambiarEstado('activo');
      hotelsService.updateHotels(objNuevoHotel);
      location.reload();
    }

    function listarHoteles(){
      let listaHoteles = hotelsService.getHotels();
      return listaHoteles;
    }
  }
})();