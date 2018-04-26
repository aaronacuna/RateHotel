(() => {
  'use strict'
  angular
    .module('rate_hotel')
    .controller('controllerListClient', controllerListClient);
    
    controllerListClient.$inject = ['$state', '$stateParams', '$location', 'usersService'];

  function controllerListClient($state, $stateParams, $location, usersService) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();
    
    vm.editUsuarios = (pUsuario) =>{
      $state.go('updateClient', {objUsuarioTemp : JSON.stringify(pUsuario)});

    };

    vm.rol = usersService.getRol();


    vm.eliminarUsuario = (pnuevoUsuario) => {
      
     
      let objNuevoUsuario = new Usuario(pnuevoUsuario.cedula, pnuevoUsuario.primerNombre, pnuevoUsuario.segundoNombre, pnuevoUsuario.primerApellido, pnuevoUsuario.segundoApellido, pnuevoUsuario.edad, pnuevoUsuario.correo, pnuevoUsuario.telefono, pnuevoUsuario.password, pnuevoUsuario.confirmedPassword);

      objNuevoUsuario.cambiarEstado('inactivo');
      usersService.updateUsers(objNuevoUsuario);
      location.reload();
    }

    vm.activarUsuario = (pnuevoUsuario) => {
      
     
      let objNuevoUsuario = new Usuario(pnuevoUsuario.cedula, pnuevoUsuario.primerNombre, pnuevoUsuario.segundoNombre, pnuevoUsuario.primerApellido, pnuevoUsuario.segundoApellido, pnuevoUsuario.edad, pnuevoUsuario.correo, pnuevoUsuario.telefono, pnuevoUsuario.password, pnuevoUsuario.confirmedPassword);

      objNuevoUsuario.cambiarEstado('activo');
      usersService.updateUsers(objNuevoUsuario);
      location.reload();
    }

    function listarUsuarios(){
      let listaUsuarios = usersService.getUsers();
      return listaUsuarios;
    }
  }
})();