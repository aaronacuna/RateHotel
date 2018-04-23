(() => {
  'use strict';
  angular
    .module('rate_hotel')
    .controller('controllerLanding', controllerLanding);

  controllerLanding.$inject = ['$location', 'loginService', 'usersService'];

  function controllerLanding($location, loginService, usersService) {
    let vm = this;
  }
})();