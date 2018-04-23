(() => {
  'use strict';
  angular
  .module('rate_hotel')
  .service('loginService', loginService);

  loginService.$inject = ['$log', '$http', 'usersService', 'sessionService'];

  function loginService($log, $http, usersService, sessionService){

    let publicAPI = {
      startSession : _startSession,
      closeSession: _closeSession
    }
    return publicAPI
    
    function _startSession(pCredenciales) {
      
      let listaUsuarios = usersService.getUsers();
      let inicioExitoso = false;

      for(let i = 0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i].correo == pCredenciales.correo && listaUsuarios[i].password == pCredenciales.password){
          sessionService.crear(
            {
              nombre: listaUsuarios[i].primerNombre,
              correo: listaUsuarios[i].correo,
            }
          );
          inicioExitoso = true;
        }
      }

      return inicioExitoso;
    }
    function _closeSession(){
      sessionService.destruir();
      swal("Sesión cerrada", "Sesión cerrada correctamente", "success", {
        button: "Aceptar",
      });
    }
  }

})();