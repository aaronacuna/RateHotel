(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: './components/landing/landing.view.html',
        data: {
          pageTitle: 'Rate Hotel'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/landing/landing.controller.js')
          }]
        },
        controller: 'controllerLanding',
        controllerAs: 'vm'

      })

      $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: './components/dashboard/dashboard.view.html',
        data: {
          pageTitle: 'Rate Hotel Dashboard'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/dashboard/dashboard.controller.js')
          }]
        },
        controller: 'controllerDashboard',
        controllerAs: 'vm'

      })

      .state('login', {
        url: '/login',
        templateUrl: './components/login/login.view.html',
        data: {
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/login/login.controller.js')
          }]
        },
        controller: 'controllerLogin',
        controllerAs: 'vm'
      })


      .state('registerClient', {
        url: '/registerClient',
        templateUrl: './components/clients/registerClient/registerClient.view.html',
        data:{
          pageTitle: 'Registro de clientes'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/clients/registerClient/registerClient.controller.js')
          }]
        },
        controller: 'controllerRegisterClient',
        controllerAs: 'vm'
      })

      .state('listClient', {
        url: '/listClient',
        templateUrl: './components/clients/listClient/listClient.view.html',
        data:{
          pageTitle: 'Lista de Clientes'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/clients/listClient/listClient.controller.js')
          }]
        },
        controller: 'controllerListClient',
        controllerAs: 'vm'
      })

      .state('updateClient', {
        url: '/updateClient',
        templateUrl: './components/clients/updateClient/updateClient.view.html',
        data:{
          pageTitle: 'Modificar cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/clients/updateClient/updateClient.controller.js')
          }]
        },
        controller: 'controllerUpdateClient',
        controllerAs: 'vm'
      })

      .state('registerHotel', {
        url: '/registerHotel',
        templateUrl: './components/hotels/registerHotel/registerHotel.view.html',
        data:{
          pageTitle: 'Registro de Hoteles'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/registerHotel/registerHotel.controller.js')
          }]
        },
        controller: 'controllerRegisterHotel',
        controllerAs: 'vm'
      })

      .state('listHotel', {
        url: '/listHotel',
        templateUrl: './components/hotels/listHotel/listHotel.view.html',
        data:{
          pageTitle: 'Lista de Hoteles'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/listHotel/listHotel.controller.js')
          }]
        },
        controller: 'controllerListHotel',
        controllerAs: 'vm'
      })

      .state('updateHotel', {
        url: '/updateHotel',
        templateUrl: './components/hotels/updateHotel/updateHotel.view.html',
        data:{
          pageTitle: 'Modificar Hotel'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/updateHotel/updateHotel.controller.js')
          }]
        },
        controller: 'controllerUpdateHotel',
        controllerAs: 'vm'
      })



    $urlRouterProvider.otherwise('/');
  };

})();
