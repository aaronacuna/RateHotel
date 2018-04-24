(() => {
    'use strict';
    angular
        .module('rate_hotel')
        .service('usersService', usersService)

    usersService.$inject = ['$log', '$http', 'dataStorageFactory'];

    function usersService($log, $http, dataStorageFactory) {

        const asyncLocalStorage = {
            setItem: function (key, value) {
                return Promise.resolve().then(() => {
                    let response = true;
                    localStorage.setItem(key, JSON.stringify(value));
                    return response
                });
            }
        };


        let publicAPI = {
            addUsers: _addUsers,
            getUsers: _getUsers,
            updateUsers: _updateUsers,
            
            }
        
            return publicAPI

        
        function _addUsers(pNuevoUsuario) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setUsersData(pNuevoUsuario);
            dataStorageFactory.sendMail(pNuevoUsuario);

            return registroExitoso;
        }

        function _getUsers() {
            let listaUsuarios = [];
            let listaUsuariosBD = dataStorageFactory.getUsersData();
            listaUsuariosBD.forEach(objUsuario => {
     
                    let objUsuarioTemp = new Usuario(objUsuario.cedula, objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.edad, objUsuario.correo, objUsuario.telefono, objUsuario.password, objUsuario.confirmedPassword)
                
                    
                    listaUsuarios.push(objUsuarioTemp);
                });


            return listaUsuarios;
        };



        function _updateUsers(pUsuario) {
            let modificacionExitosa = false;
      
            modificacionExitosa = dataStorageFactory.updateUsersData(pUsuario);
      
            return modificacionExitosa;
          }



        };
        
})();