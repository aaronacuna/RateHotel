(() => {
  'use strict'
  angular
    .module('rate_hotel')
    .controller('controllerRatings', controllerRatings);
    
    controllerRatings.$inject = ['$state', '$stateParams', '$location', 'hotelsService'];

  function controllerRatings($state, $stateParams, $location, hotelsService) {
    let vm = this;

    


  }
})();