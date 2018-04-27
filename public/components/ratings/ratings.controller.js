(() => {
  'use strict'
  angular
    .module('rate_hotel')
    .controller('controllerRatings', controllerRatings);
    
    controllerRatings.$inject = ['$state', '$stateParams', '$location', 'hotelsService'];

  function controllerRatings($state, $stateParams, $location, hotelsService) {
    let vm = this;



    vm.evaluar = (pnuevoRating) => {

      let objNuevoRating = Number(pnuevoRating);
      console.log(objNuevoRating);

      //let registro = hotelsService.addHotels(objNuevoHotel);

      swal("Registro exitoso", "El Hotel ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/dashboard');

    }
  }
})();