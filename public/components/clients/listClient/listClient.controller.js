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

    function listarUsuarios(){
      let listaUsuarios = usersService.getUsers();
      return listaUsuarios;
    }
  }
})();