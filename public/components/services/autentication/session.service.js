(() => {
  'use strict';
  angular
  .module('rate_hotel')
  .service('sessionService', sessionService);

  function sessionService(){
    this.crear = (datos)=>{
      this.sesion = datos;
      sessionStorage.setItem('sesion', JSON.stringify(datos));
    }

    this.destruir = () =>{
      delete this.sesion;
      sessionStorage.removeItem('sesion');
    };
  }
})();