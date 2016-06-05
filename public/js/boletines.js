'use strict';

angular.module('estudioPropatoApp')
  .component('boletines', {
    templateUrl: '../html/boletines/boletines.html',
    controller: 'BoletinesController'
  })
  .controller('BoletinesController', ['$scope', '$http', function($scope, $http) {
    $scope.boletines = [];
    $scope.cargando = true;
    $http.get('/api/boletines').then(function (response) {
      $scope.boletines = response.data;
    }).catch(function() {
      $scope.error = 'Lo sentimos, no podemos mostrarte los boletines!';
    }).finally(function () {
      $scope.cargando = false;
    })
  }]);