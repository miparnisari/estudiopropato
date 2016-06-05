'use strict';

angular.module('estudioPropatoApp')
  .component('contacto', {
    templateUrl: '../html/contacto/contacto.html',
    controller: 'ContactoController',
  })
  .controller('ContactoController', function ($scope, $http, $window) {
    $scope.name = '';
    $scope.email = '';
    $scope.message = '';
    $scope.answer = '';
    $scope.error = '';
    $scope.sending = false;
    $scope.sent = false;
    $scope.send = true;
    $window.scrollTo(0, 0);
    
    $scope.submit = function() {
      if (parseInt($scope.answer, 10) !== 5) {
        $scope.error = 'Respuesta incorrecta.';
      } else {
        $scope.send = false;
        $scope.sending = true;
        $scope.sent = false;
        var body = {name: $scope.name, email: $scope.email, message: $scope.message };
        $http.post('/api/contacto', body)
        .then(function (response) {
          $scope.sent = true;
        })
        .catch(function (err) {
          $scope.error = err;
          $scope.sent = false;
        })
        .finally(function () {
          $scope.sending = false;
        });
      }
    }
  })