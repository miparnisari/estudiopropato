'use strict';

angular.module('estudioPropatoApp')
  .directive('navbar', function() {
    return {
      templateUrl: '../html/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarController',
    }
  })
  .controller('NavbarController', ['$scope', function ($scope) {
    $scope.menu = [{
      'title': 'Inicio',
      'state': 'home'
    }, {
    'title': 'Boletines',
    'state': 'boletines'
    }, {
      'title': 'Servicios',
      'state': 'servicios'
    }, {
      'title': 'Contacto',
      'state': 'contacto'
    }];

    $scope.isCollapsed = true;
  }])
  