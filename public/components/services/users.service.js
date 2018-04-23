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
            getRol: _getRol,
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
                let objUsuarioTemp = new Usuario(objUsuario.cedula, objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.edad, objUsuario.correo, objUsuario.telefono, objUsuario.password, objUsuario.confirmedPassword);
                
                objUsuarioTemp.cambiarEstado(objUsuario.estado);
                

                listaUsuarios.push(objUsuarioTemp);
            });

            console.log('Datos de la BD convertidos en clases');
            console.log('Lista de usuarios ', listaUsuarios);
            return listaUsuarios;
        };



        function _updateUsers(pUsuario) {
            let modificacionExitosa = false;
      
            modificacionExitosa = dataStorageFactory.updateUsersData(pUsuario);
      
            return modificacionExitosa;
          }



        function _getRol() {
            let session = JSON.parse(sessionStorage.getItem('sesion'));
            let rol = session.tipo;
            return rol;
        }
        
        function _getRolNombre() {
            let session = JSON.parse(sessionStorage.getItem ('sesion'));
            let rol = session.nombre;
            return rol;
        }

        };
        
})();