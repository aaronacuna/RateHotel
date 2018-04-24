(() => {
  'use strict';
  angular
    .module('rate_hotel')
    .controller('controllerDashboard', controllerDashboard);

    controllerDashboard.$inject = ['$state','$location', 'loginService', 'usersService'];

  function controllerDashboard($state, $location, loginService, usersService) {
    const vm = this;

    vm.rol = usersService.getRol();


    vm.cerrarSesion = ()=>{
      loginService.closeSession();

    }    

  }
})();