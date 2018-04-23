(() => {
  'use strict';
  angular
    .module('rate_hotel')
    .controller('controllerLogin', controllerLogin);

    controllerLogin.$inject = ['$location', 'loginService', 'usersService'];

  function controllerLogin($location, loginService, usersService) {
    let vm = this;
    vm.userList = usersService.getUsers();
    vm.user = {};


    vm.startSession = (pCredenciales) => {
      let inicioCorrecto = loginService.startSession(pCredenciales);

      if (inicioCorrecto == true) {
        swal("Datos correctos", "Sesion iniciada correctamente", "success");
          $location.path('/dashboard');
      }
      else {
        swal("Datos erroneos", "Intente nuevamente", "error");
      }
    }
  }
})();