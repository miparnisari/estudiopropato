'use strict';

angular.module('estudioPropatoApp')
  .component('home', {
    templateUrl: '../html/home/home.html',
    controller: 'HomeController'
  })
  .controller('HomeController', ['$scope', '$location', function($scope, $location) {
    $scope.contactUs = function () {
      $location.path('/contacto');
    }
  }]);