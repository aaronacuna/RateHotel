(() => {
    'use strict';
    angular
        .module('rate_hotel')
        .service('hotelsService', hotelsService)

    hotelsService.$inject = ['$log', '$http', 'dataStorageFactory'];

    function hotelsService($log, $http, dataStorageFactory) {

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
            addHotels: _addHotels,
            getHotels: _getHotels,
            updateHotels: _updateHotels,
            }
        
            return publicAPI

        
        function _addHotels(pNuevoHotel) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setHotelsData(pNuevoHotel);

            return registroExitoso;
        }

        function _getHotels() {
            let listaHoteles = [];
            let listaHotelesBD = dataStorageFactory.getHotelsData();
            listaHotelesBD.forEach(objHotel => {
                let objHotelTemp = new Hotel(objHotel.nombre, objHotel.foto, objHotel.latitud, objHotel.longitud, objHotel.provincia, objHotel.canton, objHotel.distrito, objHotel.direccionExacta, objHotel.telefonoSC, objHotel.telefonoReservaciones, objHotel.correoSC, objHotel.correoReservaciones);

                objHotelTemp.cambiarEstado(objHotel.estado);
                
                listaHoteles.push(objHotelTemp);
            });

            console.log('Datos de la BD convertidos en clases');
            console.log('Lista de hoteles ', listaHoteles);
            return listaHoteles;
        };



        function _updateHotels(pHotel) {
            let modificacionExitosa = false;
      
            modificacionExitosa = dataStorageFactory.updateHotelsData(pHotel);
      
            return modificacionExitosa;
          }

        };
        
})();