(() => {
  'use strict';
  angular
    .module('rate_hotel')
    .controller('controllerUpdateClient', controllerUpdateClient);

    controllerUpdateClient.$inject = ['$stateParams', '$state', '$location', 'usersService'];

  function controllerUpdateClient($stateParams, $state, $location, usersService) {
    
    
    let vm = this;

    vm.editarUsuarios = {};

    vm.objNuevoUsuario = {};

    let objUsuarioAEditar = JSON.parse($stateParams.objUsuarioTemp);
    console.log(objUsuarioAEditar);

    let objNuevoUsuario = new Usuario(objUsuarioAEditar.cedula, objUsuarioAEditar.primerNombre, objUsuarioAEditar.segundoNombre, objUsuarioAEditar.primerApellido, objUsuarioAEditar.segundoApellido, objUsuarioAEditar.edad, objUsuarioAEditar.correo, objUsuarioAEditar.telefono, objUsuarioAEditar.password, objUsuarioAEditar.confirmedPassword);


    vm.editarUsuarios.cedula = objNuevoUsuario.cedula;
    vm.editarUsuarios.primerNombre = objNuevoUsuario.primerNombre;
    vm.editarUsuarios.segundoNombre = objNuevoUsuario.segundoNombre;
    vm.editarUsuarios.primerApellido = objNuevoUsuario.primerApellido;
    vm.editarUsuarios.segundoApellido = objNuevoUsuario.segundoApellido;
    vm.editarUsuarios.edad = objNuevoUsuario.edad;
    vm.editarUsuarios.correo = objNuevoUsuario.correo;
    vm.editarUsuarios.telefono = objNuevoUsuario.telefono;
    vm.editarUsuarios.password = objNuevoUsuario.password;
    vm.editarUsuarios.confirmedPassword = objNuevoUsuario.confirmedPassword;


    vm.editUsuarios = (pUsuario) => {
      let listaUsuarios = usersService.getUsers();

      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.correo == objNuevoUsuario.correo) {
          objUsuario.cedula = pUsuario.cedula;
          objUsuario.primerNombre = pUsuario.primerNombre;
          objUsuario.segundoNombre = pUsuario.segundoNombre;
          objUsuario.primerApellido = pUsuario.primerApellido;
          objUsuario.segundoApellido = pUsuario.segundoApellido;
          objUsuario.edad = pUsuario.edad;
          objUsuario.telefono = pUsuario.telefono;
          objUsuario.password = pUsuario.password;
          objUsuario.confirmedPassword = pUsuario.confirmedPassword;

          usersService.updateUsers(objUsuario);

        }
      });
      swal("Edición exitosa", "Usuario editado correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('listClient');
    }
  }

})();