(() => {
  'use strict';
  angular
    .module('rate_hotel')
    .controller('controllerLogin', controllerLogin);

    controllerLogin.$inject = ['$state', '$location', 'loginService', 'usersService'];

  function controllerLogin($state, $location, loginService, usersService) {
    let vm = this;
    vm.usuario = {};
    vm.listaUsuarios =[];

    vm.iniciarSesion = (pCredenciales) => {
      vm.listaUsuarios = usersService.getUsers();
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