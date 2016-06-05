'use strict';

angular.module('estudioPropatoApp')
  .component('servicios', {
    templateUrl: '../html/servicios/servicios.html',
    controller: 'ServiciosController'
  })
  .controller('ServiciosController', function($scope) {
    $scope.servicios = [];
  })