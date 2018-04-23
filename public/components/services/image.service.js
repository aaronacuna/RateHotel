(()=>{
  'use strict';
  angular
  .module('rate_hotel')
  .service('imageService', imageService);
  
  imageService.$inject = ['$http'];
  
  function imageService($http){

    let cloudObj = {
      url:'https://api.cloudinary.com/v1_1/dgbtjubgx/image/upload',
      data:{
        upload_preset: 'rate_hotel',
        tags:'Any',
        context:'photo=test'
      }
    };

    let publicAPI = {
      getConfiguration: _getConfiguration
    }
    return publicAPI;

    function _getConfiguration(){
      return cloudObj;
    }
  }
})();
