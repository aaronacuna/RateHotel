(() => {
  'use strict';
  angular
    .module('rate_hotel')
    .factory('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];

  function dataStorageFactory($q, $log, $http) {

    const localAPI = {
      setUsersData: _setUsersData,
      getUsersData: _getUsersData,
      updateUsersData: _updateUsersData,
      setSession: _setSession,
      closeSession: _closeSession,
      getSession: _getSession,
      sendMail: _sendMail,
      getHotelsData: _getHotelsData,
      setHotelsData: _setHotelsData,
      updateHotelsData: _updateHotelsData
    };

    return localAPI;


       function _setUsersData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'edad': data.edad,
          'correo': data.correo,
          'telefono': data.telefono,
          'password': data.password,
          'confirmedPassword': data.confirmedPassword,
          'estado': data.estado,
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    
    function _getUsersData() {
      let usersList = [];

      let petition = $.ajax({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      petition.done(users => {
        console.log('Datos que vienen desde la base de datos');
        console.log(users);

        usersList = users;
      });
      petition.fail(() => {
        usersList = [];
        console.log('Ocurrió un error');
      });

      return usersList;
    }


    function _updateUsersData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/update_user',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'edad': data.edad,
          'correo': data.correo,
          'telefono': data.telefono,
          'password': data.password,
          'confirmedPassword': data.confirmedPassword,
          'estado': data.estado,
        }
      });

      peticion.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }


    // 
    //Final usuarios
    //

    //
    //Inicio Hoteles
    //


    function _getHotelsData() {
      let listaHoteles = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_hotels',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done((hoteles) => {
        console.log('Datos que vienen desde la base de datos')
        console.log(hoteles);
        listaHoteles = hoteles;
      });
      peticion.fail(() => {
        listaUsuarios = [];
        console.log('Ocurrió un error');
      });

      return listaHoteles;
    }

    function _setHotelsData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_hotel',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'nombre': data.nombre,
          'foto': data.foto,
          'latitud': data.latitud,
          'longitud': data.longitud,
          'provincia': data.provincia,
          'canton': data.canton,
          'distrito': data.distrito,
          'direccionExacta': data.direccionExacta,
          'telefonoSC': data.telefonoSC,
          'telefonoReservaciones': data.telefonoReservaciones,
          'correoSC': data.correoSC,
          'correoReservaciones': data.correoReservaciones,
          'estado': data.estado,
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    function _updateHotelsData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/update_hotels',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'nombre': data.nombre,
          'foto': data.foto,
          'latitud': data.latitud,
          'longitud': data.longitud,
          'provincia': data.provincia,
          'canton': data.canton,
          'distrito': data.distrito,
          'direccionExacta': data.direccionExacta,
          'telefonoSC': data.telefonoSC,
          'telefonoReservaciones': data.telefonoReservaciones,
          'correoSC': data.correoSC,
          'correoReservaciones': data.correoReservaciones,
          'estado': data.estado,
        }
      });

      peticion.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }


    //
    //Fin Hoteles
    //

  

    //
    //Inicio envio correo
    //
    function _sendMail(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/mail',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'correo': data.correo,
          'password': data.password,
        }
      });

      peticion.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    //
    //Final envio correo
    //

    //
    //Inicio Autenticación
    //

    /**
     * Función que almacena las credenciales dentro del session Storage
     * @param {Credenciales} value 
     */
    function _setSession(value) {
      let response = true;
      sessionStorage.setItem('session', JSON.stringify(value));
      return response;
    }

    /**
     * Función que elimina los datos de la sesión activa
     */
    function _closeSession() {
      let response = true;
      sessionStorage.removeItem('session');
      return response;
    };

    /**
     * Función que retorna los datos almacenados dentro del sessionStorage
     */
    function _getSession() {
      let sessionActive = JSON.parse(sessionStorage.getItem('session'));

      return sessionActive;
    }

    //
    //Final Autenticación
    //

    



  }
})();