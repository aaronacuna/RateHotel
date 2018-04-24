(() => {
  'use strict'
  angular
    .module('rate_hotel')
    .controller('controllerRegisterClient', controllerRegisterClient);
    
    controllerRegisterClient.$inject = ['$http','$state', '$stateParams', '$location', 'usersService', 'imageService'];

  function controllerRegisterClient($http ,$state, $stateParams, $location, usersService, imageService) {
    let vm = this;

    vm.nuevoUsuario = {};
 
    vm.registrarUsuario = (pNuevoUsuario) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.edad, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.password, pNuevoUsuario.confirmedPassword);

      let registro = usersService.addUsers(objNuevoUsuario);

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/login');

    }
  }
})();
