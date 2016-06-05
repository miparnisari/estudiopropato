'use strict';

angular.module('estudioPropatoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      })
      .state('boletines', {
        url: '/boletines',
        template: '<boletines></boletines>'
      })
      .state('servicios', {
        url: '/servicios',
        template: '<servicios></servicios>'
      })
      .state('contacto', {
        url: '/contacto',
        template: '<contacto></contacto>'
      });
      
  $urlRouterProvider.otherwise('/');
});